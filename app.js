/* =========================================================
   Sổ tay Bảo quản & Hạn sử dụng
   - Tra cứu: tìm không dấu, lọc theo nhóm, xem chi tiết
   - Học thẻ: flashcard tự đánh giá, lưu "đã thuộc" vào máy
   - Kiểm tra: trắc nghiệm 4 đáp án về hạn sử dụng
   Dữ liệu nằm trong data.js (FOOD_DATA) để chạy được cả khi
   mở file trực tiếp lẫn khi deploy tĩnh.
   ========================================================= */
(function () {
  "use strict";

  /* ------------------------------------------------ tiện ích */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const el = (tag, cls, text) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  };

  /** Bỏ dấu tiếng Việt để tìm kiếm "la dua" ra "Lá dứa". */
  const deaccent = (s) =>
    s.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/\s+/g, " ")
      .trim();

  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const TEMP_RANGE = {
    thuong: "khoảng 25 – 32°C",
    mat: "0 – 10°C",
    dong: "-10°C đến -18°C",
    khac: "",
  };

  /* ------------------------------------------------ dữ liệu */
  const GROUPS = FOOD_DATA.map((g) => ({ id: g.id, label: g.label }));
  const GROUP_LABEL = Object.fromEntries(GROUPS.map((g) => [g.id, g.label]));

  const ITEMS = FOOD_DATA.flatMap((g) => g.items).map((item) => {
    const kinds = [];
    item.conditions.forEach((c) =>
      c.options.forEach((o) => {
        if (!kinds.includes(o.kind)) kinds.push(o.kind);
      })
    );
    const haystack = deaccent(
      [item.name, GROUP_LABEL[item.group],
        ...item.conditions.map((c) => c.state + " " + c.options.map((o) => o.temp + " " + o.value).join(" ")),
      ].join(" ")
    );
    return Object.assign({}, item, { kinds, key: deaccent(item.name), haystack });
  });

  const ITEM_BY_ID = Object.fromEntries(ITEMS.map((i) => [i.id, i]));

  /** Mọi giá trị hạn sử dụng có trong tài liệu - dùng làm đáp án nhiễu. */
  const ALL_VALUES = Array.from(
    new Set(ITEMS.flatMap((i) => i.conditions.flatMap((c) => c.options.map((o) => o.value))))
  );

  const unitOf = (value) => {
    const m = /(giờ|ngày|tháng|phút)\s*$/.exec(value);
    return m ? m[1] : "khac";
  };

  /* ------------------------------------------------ bộ nhớ máy */
  const STORE_KEY = "hsd.known.v1";

  const store = {
    known: new Set(),
    load() {
      try {
        const raw = localStorage.getItem(STORE_KEY);
        if (raw) this.known = new Set(JSON.parse(raw).filter((id) => ITEM_BY_ID[id]));
      } catch (e) {
        /* trình duyệt chặn localStorage - vẫn chạy bình thường, chỉ không nhớ */
      }
    },
    save() {
      try {
        localStorage.setItem(STORE_KEY, JSON.stringify(Array.from(this.known)));
      } catch (e) { /* bỏ qua */ }
    },
    set(id, isKnown) {
      if (isKnown) this.known.add(id); else this.known.delete(id);
      this.save();
      refreshKnownUI();
    },
    has(id) { return this.known.has(id); },
  };
  store.load();

  /* ------------------------------------------------ render dùng chung */
  function pill(kind, text) {
    return el("span", "pill pill--" + kind, text);
  }

  /** Danh sách trạng thái -> điều kiện -> hạn sử dụng của một mặt hàng. */
  function renderConditions(item) {
    const frag = document.createDocumentFragment();

    item.conditions.forEach((cond) => {
      const box = el("div", "cond");
      box.appendChild(el("div", "cond__state", cond.state));
      if (cond.note) box.appendChild(el("div", "cond__note", "Lưu ý: " + cond.note));

      cond.options.forEach((opt) => {
        const row = el("div", "opt");

        // dải nhiệt để ở dòng phụ, không nhét vào pill - pill dài sẽ tràn trên máy hẹp
        const left = el("div", "opt__left");
        left.appendChild(pill(opt.kind, opt.temp));
        const sub = [TEMP_RANGE[opt.kind], opt.tempNote].filter(Boolean).join(" · ");
        if (sub) left.appendChild(el("span", "opt__temp-note", sub));
        row.appendChild(left);

        const right = el("div", "opt__right");
        right.appendChild(el("div", "opt__value", opt.value));
        if (opt.note) right.appendChild(el("div", "opt__note", opt.note));
        row.appendChild(right);

        box.appendChild(row);
      });

      frag.appendChild(box);
    });

    return frag;
  }

  const CHECK_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 13 4.5 4.5L19 7"/></svg>';

  /* ================================================================
     1. TRA CỨU
     ================================================================ */
  const searchInput = $("#q");
  const clearBtn = $("#q-clear");
  const resultsBox = $("#results");
  const emptyBox = $("#empty");
  const metaBox = $("#result-meta");
  const chipsBox = $("#group-filter");

  let activeGroup = "all";

  function buildChips() {
    const all = [{ id: "all", label: "Tất cả" }].concat(GROUPS);
    all.forEach((g) => {
      const count = g.id === "all" ? ITEMS.length : ITEMS.filter((i) => i.group === g.id).length;
      const chip = el("button", "chip" + (g.id === activeGroup ? " is-active" : ""), `${g.label} (${count})`);
      chip.type = "button";
      chip.setAttribute("aria-pressed", String(g.id === activeGroup));
      chip.addEventListener("click", () => {
        activeGroup = g.id;
        $$(".chip", chipsBox).forEach((c) => {
          c.classList.remove("is-active");
          c.setAttribute("aria-pressed", "false");
        });
        chip.classList.add("is-active");
        chip.setAttribute("aria-pressed", "true");
        renderSearch();
      });
      chipsBox.appendChild(chip);
    });

    // dải lọc cuộn ngang trên mobile: chỉ làm mờ mép phải khi còn chip bị khuất,
    // nếu không chip cuối cùng lúc nào cũng mờ, trông như lỗi hiển thị
    const syncFade = () => {
      const end = chipsBox.scrollLeft + chipsBox.clientWidth >= chipsBox.scrollWidth - 2;
      chipsBox.classList.toggle("is-end", end);
    };
    chipsBox.addEventListener("scroll", syncFade, { passive: true });
    addEventListener("resize", syncFade);
    syncFade();
  }

  function matchItems() {
    const q = deaccent(searchInput.value);
    let list = ITEMS.filter((i) => activeGroup === "all" || i.group === activeGroup);
    if (!q) return list;

    const scored = [];
    list.forEach((i) => {
      let score = -1;
      if (i.key.startsWith(q)) score = 0;
      else if (i.key.includes(q)) score = 1;
      else if (i.haystack.includes(q)) score = 2;
      if (score >= 0) scored.push({ i, score });
    });
    scored.sort((a, b) => a.score - b.score || a.i.name.localeCompare(b.i.name, "vi"));
    return scored.map((s) => s.i);
  }

  function itemCard(item) {
    const card = el("button", "item-card");
    card.type = "button";

    const top = el("div", "item-card__top");
    const names = el("div");
    names.appendChild(el("div", "item-card__name", item.name));
    names.appendChild(
      el("div", "item-card__meta", `${GROUP_LABEL[item.group]} · ${item.conditions.length} trạng thái`)
    );
    top.appendChild(names);

    if (store.has(item.id)) {
      const dot = el("span", "known-dot");
      dot.innerHTML = CHECK_SVG;
      dot.title = "Đã thuộc";
      top.appendChild(dot);
    }
    card.appendChild(top);

    const tags = el("div", "item-card__tags");
    item.kinds.forEach((k) => {
      const opt = item.conditions.flatMap((c) => c.options).find((o) => o.kind === k);
      tags.appendChild(pill(k, opt.temp));
    });
    card.appendChild(tags);

    card.addEventListener("click", () => openSheet(item));
    return card;
  }

  function renderSearch() {
    const list = matchItems();
    resultsBox.replaceChildren();
    list.forEach((i) => resultsBox.appendChild(itemCard(i)));

    emptyBox.hidden = list.length > 0;
    clearBtn.hidden = searchInput.value.length === 0;

    const knownCount = list.filter((i) => store.has(i.id)).length;
    metaBox.textContent = list.length
      ? `${list.length} mặt hàng · đã thuộc ${knownCount}/${list.length}`
      : "";
  }

  searchInput.addEventListener("input", renderSearch);
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.focus();
    renderSearch();
  });

  /* ------------------------------------------------ bảng chi tiết */
  const sheet = $("#sheet");
  const sheetKnownBtn = $("#sheet-known");
  let sheetItem = null;
  let lastFocus = null;

  function paintSheetKnownBtn() {
    if (!sheetItem) return;
    const known = store.has(sheetItem.id);
    sheetKnownBtn.textContent = known ? "✓ Đã thuộc — bỏ đánh dấu" : "Đánh dấu đã thuộc";
    sheetKnownBtn.className = known ? "btn" : "btn btn--success";
  }

  function openSheet(item) {
    sheetItem = item;
    lastFocus = document.activeElement;
    $("#sheet-group").textContent = GROUP_LABEL[item.group];
    $("#sheet-name").textContent = item.name;
    $("#sheet-body").replaceChildren(renderConditions(item));
    paintSheetKnownBtn();
    sheet.hidden = false;
    document.body.style.overflow = "hidden";
    sheetKnownBtn.focus();
  }

  function closeSheet() {
    sheet.hidden = true;
    sheetItem = null;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  $$("[data-close]", sheet).forEach((n) => n.addEventListener("click", closeSheet));
  sheetKnownBtn.addEventListener("click", () => {
    store.set(sheetItem.id, !store.has(sheetItem.id));
    paintSheetKnownBtn();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !sheet.hidden) closeSheet();
  });

  /* ================================================================
     2. HỌC THẺ
     ================================================================ */
  const fc = {
    deck: [],
    idx: 0,
    flipped: false,
    learned: 0,
  };

  const fcGroupSel = $("#fc-group");
  const fcScopeSel = $("#fc-scope");
  const fcStage = $("#fc-stage");
  const fcCard = $("#fc-card");
  const fcActions = $("#fc-actions");
  const fcDone = $("#fc-done");

  function fillGroupSelect(sel) {
    sel.replaceChildren();
    sel.appendChild(new Option("Tất cả nhóm", "all"));
    GROUPS.forEach((g) => sel.appendChild(new Option(g.label, g.id)));
  }

  function deckFor(groupId, scope) {
    return ITEMS.filter((i) => {
      if (groupId !== "all" && i.group !== groupId) return false;
      if (scope === "unknown") return !store.has(i.id);
      if (scope === "known") return store.has(i.id);
      return true;
    });
  }

  function updateFcNote() {
    const total = ITEMS.length;
    const known = store.known.size;
    $("#fc-progress-note").textContent =
      `Tiến độ chung: đã thuộc ${known}/${total} mặt hàng (${Math.round((known / total) * 100)}%).`;
  }

  function startFlashcards(groupId, scope) {
    const deck = deckFor(groupId, scope);
    if (!deck.length) {
      alert("Không có thẻ nào trong phạm vi này.");
      return;
    }
    fc.deck = shuffle(deck);
    fc.idx = 0;
    fc.learned = 0;
    fcDone.hidden = true;
    fcStage.hidden = false;
    showCard();
    fcCard.focus({ preventScroll: true });
    fcStage.scrollIntoView({ block: "nearest" });
  }

  function showCard() {
    const item = fc.deck[fc.idx];
    fc.flipped = false;
    fcCard.classList.remove("is-flipped");
    fcActions.hidden = true;

    $("#fc-group-badge").textContent = GROUP_LABEL[item.group];
    $("#fc-name").textContent = item.name;
    $("#fc-name-back").textContent = item.name;
    $("#fc-detail").replaceChildren(renderConditions(item));

    $("#fc-count").textContent = `Thẻ ${fc.idx + 1}/${fc.deck.length}`;
    $("#fc-bar").style.width = (fc.idx / fc.deck.length) * 100 + "%";
  }

  function flipCard() {
    fc.flipped = !fc.flipped;
    fcCard.classList.toggle("is-flipped", fc.flipped);
    fcActions.hidden = !fc.flipped;
  }

  function answerCard(isKnown) {
    const item = fc.deck[fc.idx];
    store.set(item.id, isKnown);
    if (isKnown) fc.learned++;
    fc.idx++;
    if (fc.idx >= fc.deck.length) {
      fcStage.hidden = true;
      fcDone.hidden = false;
      $("#fc-done-text").textContent =
        `Bạn đánh dấu đã thuộc ${fc.learned}/${fc.deck.length} thẻ trong lượt này. ` +
        `Tổng cộng đã thuộc ${store.known.size}/${ITEMS.length} mặt hàng.`;
      updateFcNote();
      return;
    }
    showCard();
  }

  fcCard.addEventListener("click", flipCard);
  fcCard.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      flipCard();
    }
  });
  $("#fc-again").addEventListener("click", () => answerCard(false));
  $("#fc-known").addEventListener("click", () => answerCard(true));
  $("#fc-start").addEventListener("click", () => startFlashcards(fcGroupSel.value, fcScopeSel.value));
  $("#fc-restart").addEventListener("click", () => startFlashcards(fcGroupSel.value, fcScopeSel.value));
  $("#fc-review-unknown").addEventListener("click", () => {
    fcScopeSel.value = "unknown";
    startFlashcards(fcGroupSel.value, "unknown");
  });

  document.addEventListener("keydown", (e) => {
    if (currentView !== "cards" || fcStage.hidden || !sheet.hidden) return;
    if (e.target.tagName === "SELECT") return;
    if (e.key === "1" && fc.flipped) answerCard(false);
    if (e.key === "2" && fc.flipped) answerCard(true);
  });

  /* ================================================================
     3. KIỂM TRA
     ================================================================ */
  const qz = {
    questions: [],
    idx: 0,
    correct: 0,
    wrong: [],
    answered: false,
  };

  const qzGroupSel = $("#qz-group");
  const qzCountSel = $("#qz-count");
  const qzSetup = $("#quiz-setup");
  const qzStage = $("#qz-stage");
  const qzResult = $("#qz-result");
  const qzOptions = $("#qz-options");
  const qzFeedback = $("#qz-feedback");
  const qzNextBtn = $("#qz-next");

  /** Mỗi (mặt hàng × trạng thái × điều kiện bảo quản) là một câu hỏi tiềm năng. */
  function buildQuestionPool(groupId) {
    const pool = [];
    ITEMS.forEach((item) => {
      if (groupId !== "all" && item.group !== groupId) return;
      item.conditions.forEach((cond) => {
        // các đáp án đúng khác trong cùng trạng thái không được làm đáp án nhiễu
        const siblings = cond.options.map((o) => o.value);
        cond.options.forEach((opt) => {
          pool.push({ item, cond, opt, siblings });
        });
      });
    });
    return pool;
  }

  function makeChoices(q) {
    const answer = q.opt.value;
    const banned = new Set(q.siblings);
    const sameUnit = shuffle(ALL_VALUES.filter((v) => !banned.has(v) && unitOf(v) === unitOf(answer)));
    const otherUnit = shuffle(ALL_VALUES.filter((v) => !banned.has(v) && unitOf(v) !== unitOf(answer)));

    // ưu tiên đáp án nhiễu cùng đơn vị thời gian để câu hỏi thật sự khó
    const distractors = sameUnit.slice(0, 2);
    while (distractors.length < 3) {
      const next = (sameUnit.slice(2).concat(otherUnit)).find((v) => !distractors.includes(v));
      if (!next) break;
      distractors.push(next);
    }
    return shuffle(distractors.concat(answer));
  }

  function startQuiz(pool) {
    if (!pool.length) {
      alert("Không có câu hỏi nào trong phạm vi này.");
      return;
    }
    const wanted = parseInt(qzCountSel.value, 10);
    const picked = shuffle(pool);
    qz.questions = (wanted > 0 ? picked.slice(0, wanted) : picked).map((q) =>
      Object.assign({}, q, { choices: makeChoices(q) })
    );
    qz.idx = 0;
    qz.correct = 0;
    qz.wrong = [];
    qzSetup.hidden = true;
    qzResult.hidden = true;
    qzStage.hidden = false;
    showQuestion();
  }

  function fact(label, value) {
    const row = el("div", "fact");
    row.appendChild(el("span", "fact__label", label));
    row.appendChild(el("span", "fact__value", value));
    return row;
  }

  function showQuestion() {
    const q = qz.questions[qz.idx];
    qz.answered = false;

    $("#qz-group-badge").textContent = GROUP_LABEL[q.item.group];
    $("#qz-name").textContent = q.item.name;

    const facts = $("#qz-facts");
    facts.replaceChildren();
    facts.appendChild(fact("Trạng thái", q.cond.state));
    facts.appendChild(
      fact("Bảo quản", q.opt.temp + (TEMP_RANGE[q.opt.kind] ? ` (${TEMP_RANGE[q.opt.kind]})` : "") +
        (q.opt.tempNote ? ` — ${q.opt.tempNote}` : ""))
    );

    qzOptions.replaceChildren();
    q.choices.forEach((choice, n) => {
      const btn = el("button", "option");
      btn.type = "button";
      btn.dataset.value = choice;
      btn.appendChild(el("span", "option__key", String(n + 1)));
      btn.appendChild(el("span", null, choice));
      btn.addEventListener("click", () => answerQuestion(choice, btn));
      qzOptions.appendChild(btn);
    });

    qzFeedback.hidden = true;
    qzNextBtn.hidden = true;
    qzNextBtn.textContent = qz.idx === qz.questions.length - 1 ? "Xem kết quả" : "Câu tiếp theo";

    $("#qz-count-label").textContent = `Câu ${qz.idx + 1}/${qz.questions.length}`;
    $("#qz-score").textContent = `Đúng ${qz.correct}`;
    $("#qz-bar").style.width = (qz.idx / qz.questions.length) * 100 + "%";
  }

  function answerQuestion(choice, btn) {
    if (qz.answered) return;
    qz.answered = true;

    const q = qz.questions[qz.idx];
    const isRight = choice === q.opt.value;

    $$(".option", qzOptions).forEach((b) => {
      b.disabled = true;
      if (b.dataset.value === q.opt.value) b.classList.add("is-correct");
    });
    if (!isRight) btn.classList.add("is-wrong");

    if (isRight) {
      qz.correct++;
      qzFeedback.className = "feedback feedback--ok";
      qzFeedback.textContent = "Chính xác!";
    } else {
      qz.wrong.push({ q, picked: choice });
      store.set(q.item.id, false); // sai thì đưa lại vào nhóm chưa thuộc
      qzFeedback.className = "feedback feedback--bad";
      qzFeedback.replaceChildren(
        document.createTextNode("Chưa đúng. Đáp án là "),
        el("strong", null, q.opt.value),
        document.createTextNode(q.opt.note ? ` (${q.opt.note})` : ".")
      );
    }

    qzFeedback.hidden = false;
    qzNextBtn.hidden = false;
    qzNextBtn.focus();
    $("#qz-score").textContent = `Đúng ${qz.correct}`;
  }

  function nextQuestion() {
    if (!qz.answered) return;
    qz.idx++;
    if (qz.idx >= qz.questions.length) finishQuiz();
    else showQuestion();
  }

  function finishQuiz() {
    qzStage.hidden = true;
    qzResult.hidden = false;

    const total = qz.questions.length;
    const pct = Math.round((qz.correct / total) * 100);
    const ring = $("#qz-ring");
    ring.style.setProperty("--p", pct);
    $("#qz-ring-text").textContent = pct + "%";

    $("#qz-result-title").textContent =
      pct === 100 ? "Tuyệt đối!" : pct >= 80 ? "Rất tốt!" : pct >= 50 ? "Khá ổn, ôn thêm nhé" : "Cần ôn lại kỹ";
    $("#qz-result-text").textContent = `Đúng ${qz.correct}/${total} câu.` +
      (qz.wrong.length ? " Các mặt hàng trả lời sai đã được đánh dấu chưa thuộc." : "");

    $("#qz-retry-wrong").hidden = qz.wrong.length === 0;

    const review = $("#qz-review");
    review.replaceChildren();
    if (qz.wrong.length) {
      review.appendChild(el("p", "review__title", `Xem lại ${qz.wrong.length} câu sai`));
      qz.wrong.forEach(({ q, picked }) => {
        const row = el("div", "review__row");
        row.appendChild(el("div", "review__name", q.item.name));
        row.appendChild(el("div", "review__ctx", `${q.cond.state} · ${q.opt.temp}${q.opt.tempNote ? " (" + q.opt.tempNote + ")" : ""}`));
        const ans = el("div", "review__ans");
        ans.appendChild(el("s", null, picked));
        ans.appendChild(document.createTextNode(" → "));
        ans.appendChild(el("b", null, q.opt.value));
        row.appendChild(ans);
        review.appendChild(row);
      });
    }
  }

  qzNextBtn.addEventListener("click", nextQuestion);
  $("#qz-start").addEventListener("click", () => startQuiz(buildQuestionPool(qzGroupSel.value)));
  $("#qz-new").addEventListener("click", () => {
    qzResult.hidden = true;
    qzSetup.hidden = false;
  });
  $("#qz-quit").addEventListener("click", () => {
    if (qz.idx === 0 && !qz.answered) {
      qzStage.hidden = true;
      qzSetup.hidden = false;
      return;
    }
    qz.questions = qz.questions.slice(0, qz.idx + (qz.answered ? 1 : 0));
    if (!qz.questions.length) {
      qzStage.hidden = true;
      qzSetup.hidden = false;
      return;
    }
    finishQuiz();
  });
  $("#qz-retry-wrong").addEventListener("click", () => {
    const pool = qz.wrong.map(({ q }) => ({ item: q.item, cond: q.cond, opt: q.opt, siblings: q.siblings }));
    const keep = qzCountSel.value;
    qzCountSel.value = "0";
    startQuiz(pool);
    qzCountSel.value = keep;
  });

  document.addEventListener("keydown", (e) => {
    if (currentView !== "quiz" || qzStage.hidden || !sheet.hidden) return;
    if (e.target.tagName === "SELECT") return;
    if (["1", "2", "3", "4"].includes(e.key)) {
      const btn = $$(".option", qzOptions)[Number(e.key) - 1];
      if (btn && !btn.disabled) btn.click();
    } else if (e.key === "Enter" && qz.answered) {
      e.preventDefault();
      nextQuestion();
    }
  });

  /* ================================================================
     Điều hướng
     ================================================================ */
  let currentView = "search";

  function switchView(name) {
    currentView = name;
    $$(".tab").forEach((t) => {
      const on = t.dataset.view === name;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", String(on));
    });
    $$(".view").forEach((v) => {
      const on = v.id === "view-" + name;
      v.classList.toggle("is-active", on);
      v.hidden = !on;
    });
    window.scrollTo(0, 0);
    if (name === "cards") updateFcNote();
    if (name === "search") renderSearch();
  }

  $$(".tab").forEach((t) => t.addEventListener("click", () => switchView(t.dataset.view)));

  /** Cập nhật những chỗ hiển thị trạng thái "đã thuộc" sau khi thay đổi. */
  function refreshKnownUI() {
    if (currentView === "search") renderSearch();
    if (currentView === "cards") updateFcNote();
  }

  /* ------------------------------------------------ khởi động */
  buildChips();
  fillGroupSelect(fcGroupSel);
  fillGroupSelect(qzGroupSel);
  updateFcNote();
  renderSearch();

  if (window.matchMedia("(min-width: 761px)").matches) searchInput.focus();
})();
