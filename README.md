# Sổ tay Bảo quản & Hạn sử dụng

Ứng dụng web tĩnh (HTML + CSS + JS thuần, không cần build) giúp **tra cứu nhanh**
điều kiện bảo quản / hạn sử dụng của từng loại thực phẩm, và **học cho tới khi thuộc**.

## Ba chế độ

| Chế độ | Mục đích |
|---|---|
| **Tra cứu** | Gõ tên (có dấu hoặc không dấu) → xem đầy đủ trạng thái, điều kiện bảo quản, hạn sử dụng. Lọc theo nhóm hàng. |
| **Học thẻ** | Flashcard: hiện tên → tự nhớ lại → lật thẻ đối chiếu → tự đánh giá *Đã thuộc / Chưa thuộc*. |
| **Kiểm tra** | Trắc nghiệm 4 đáp án về hạn sử dụng. Câu trả lời sai tự động bị đánh dấu *chưa thuộc* để ôn lại ở phần Học thẻ. |

Vòng lặp học: **Kiểm tra → câu sai thành thẻ chưa thuộc → Học thẻ (phạm vi "Chỉ thẻ chưa thuộc") → Kiểm tra lại.**

Tiến độ "đã thuộc" được lưu trong `localStorage` của trình duyệt (không cần đăng nhập,
không gửi dữ liệu đi đâu). Xoá dữ liệu trình duyệt sẽ mất tiến độ.

## Phím tắt (máy tính)

- Học thẻ: `Space` lật thẻ · `1` chưa thuộc · `2` đã thuộc
- Kiểm tra: `1`–`4` chọn đáp án · `Enter` câu tiếp theo
- `Esc` đóng bảng chi tiết

## Chạy thử

Mở thẳng `index.html` bằng trình duyệt là chạy được (dữ liệu nằm trong `data.js`
dưới dạng biến JS nên không vướng lỗi CORS như khi `fetch` file JSON).

## Deploy lên GitHub Pages

1. Push 4 tệp: `index.html`, `styles.css`, `app.js`, `data.js`.
2. Repo → **Settings → Pages** → Source: `Deploy from a branch` → branch `main`, thư mục `/ (root)`.
3. Truy cập `https://<tài-khoản>.github.io/<tên-repo>/`.

> **Lưu ý bảo mật nội dung:** tài liệu PDF gốc, các tệp `parsed_data.*`,
> `verification_report.txt`, `_raw_cell_dump.json` và hai script `parse_pdf.py`,
> `build_data.py` vẫn chứa tên thương hiệu, mã tài liệu nội bộ và tên người ký ban hành.
> `.gitignore` đã loại chúng khỏi repo — **đừng dùng `git add -f`** với những tệp này.
> Chỉ `data.js` (đã làm sạch) được publish.

## Cấu trúc dữ liệu (`data.js`)

```js
const FOOD_DATA = [
  {
    id: "rau-cu", label: "Rau / Củ / Quả",
    items: [
      {
        id: "rau-cu-1",
        name: "Lá dứa",
        group: "rau-cu",
        conditions: [
          {
            state: "Chưa mở bao bì, bao bì còn nguyên vẹn",
            note: "…",                      // tuỳ chọn
            options: [
              { kind: "mat",               // thuong | mat | dong | khac
                temp: "Tủ mát",
                tempNote: "ướp đá trực tiếp",  // tuỳ chọn
                value: "7 ngày",
                note: "Kể từ NSX" }            // tuỳ chọn
            ]
          }
        ]
      }
    ]
  }
]
```

Quy ước khi tạo dữ liệu: ô hạn sử dụng để trống trong tài liệu gốc được **bỏ hẳn**,
không hiển thị và không đưa vào câu hỏi kiểm tra.

Muốn sửa/bổ sung dữ liệu: sửa trực tiếp `data.js`, hoặc chỉnh `build_data.py` rồi chạy
`python build_data.py` để sinh lại.
