// Dữ liệu tra cứu hạn sử dụng & điều kiện bảo quản.
// Tệp này được sinh tự động từ build_data.py - không sửa tay.
const FOOD_DATA = [
  {
    "id": "rau-cu",
    "label": "Rau / Củ / Quả",
    "items": [
      {
        "id": "rau-cu-1",
        "name": "Lá dứa",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa mở bao bì, bao bì còn nguyên vẹn",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "7 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-2",
        "name": "Chanh không hạt",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "7 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "5 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày",
                "tempNote": "có ướp lạnh"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-3",
        "name": "Củ cải trắng",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "7 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "3 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "1 ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-4",
        "name": "Khoai tây củ",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "7 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "5 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "1 ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-5",
        "name": "Ớt Ba Tri",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "7 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "2 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-6",
        "name": "Sả cây",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "7 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "3 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "3 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-7",
        "name": "Lá chanh",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "7 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày",
                "tempNote": "ngâm với nước"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-8",
        "name": "Tắc trái",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "7 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "Trong ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "8 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-9",
        "name": "Củ riềng",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "7 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "5 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-10",
        "name": "Củ gừng",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "7 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "5 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-11",
        "name": "Ngò gai",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "5 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-12",
        "name": "Hành baro",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "5 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-13",
        "name": "Bắp trái",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "5 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "3 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-14",
        "name": "Nấm đông cô khô",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "3 tháng"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-15",
        "name": "Cà rốt",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "7 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "3 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "48 giờ"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào/nấu)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "Trong ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-16",
        "name": "Lolo xanh",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "7 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-17",
        "name": "Hành tây",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "15 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "7 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào/nấu)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-18",
        "name": "Ớt chuông",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "7 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào/nấu)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-19",
        "name": "Tỏi xay",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa) CHO RA CONT SẠCH",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "3 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-20",
        "name": "Cải thảo",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "7 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "1 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (chưa rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "1 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-21",
        "name": "Nấm kim châm",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "7 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "12 giờ"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào/nấu) - dành cho máy deli",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "2 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-22",
        "name": "Bắp cải tím",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "15 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "3 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (chưa rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào/nấu) - dành cho máy deli",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "2 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-23",
        "name": "Trứng gà tươi",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "10 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-24",
        "name": "Tỏi phi",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Bao bì cột kín",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "14 ngày"
              }
            ]
          },
          {
            "state": "Đã cho ra cont",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào/nấu)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "3 ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-25",
        "name": "Súp lơ - bông cải xanh",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "5 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "1 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (Chưa rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ],
            "note": "Khi đã rửa sử dụng không hết tiến hành bảo quản trong nước lạnh có đá sấp sấp"
          },
          {
            "state": "Đã chế biến (trụng/xào/nấu) - dành cho máy deli",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-26",
        "name": "Cải bó xôi",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "4 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "1 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã rửa/gọt vỏ/cắt nhỏ/bào sợi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "Trong ngày"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào/nấu)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "Trong ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "rau-cu-27",
        "name": "Lá cẩm",
        "group": "rau-cu",
        "conditions": [
          {
            "state": "Chưa sơ chế (chưa gọt vỏ/chưa rửa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "3 ngày"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào/nấu)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "6 ngày"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "gia-vi",
    "label": "Gia vị / Khô",
    "items": [
      {
        "id": "gia-vi-1",
        "name": "Trà sữa nhà làm – Trà sữa matcha",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao (Chưa pha với nước) nhưng cột kín khi không sử dụng",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "1 tháng"
              }
            ]
          },
          {
            "state": "Đã chế biến (đã pha)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "1 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-2",
        "name": "Trà đào - trà dâu - trà ổi hồng",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao (Chưa pha với nước) nhưng cột kín khi không sử dụng",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "1 tháng"
              }
            ]
          },
          {
            "state": "Đã chế biến (đã pha)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-3",
        "name": "Đào lon",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao/ đã sơ chế",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "3 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-4",
        "name": "Nước gạo Hàn Quốc",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao/ đã sơ chế",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "7 ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-5",
        "name": "Trân châu 3Q trắng",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao (Chưa pha với nước) nhưng cột kín khi không sử dụng",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "3 tháng"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "1 tháng"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-6",
        "name": "Hạt thủy tinh hương phúc bồn tử",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao (Chưa pha với nước) nhưng cột kín khi không sử dụng",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "3 tháng"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "1 tháng"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-7",
        "name": "Bột late hoa anh đào",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao (Chưa pha với nước) nhưng cột kín khi không sử dụng",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "1 tháng"
              }
            ]
          },
          {
            "state": "Đã chế biến (đã pha)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-8",
        "name": "Thạch hương",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao (Chưa pha với nước) nhưng cột kín khi không sử dụng",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "1 tháng"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-9",
        "name": "Ổi hồng ngâm đường",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã khui bao bì (cho ra cont)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "5 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày",
                "tempNote": "tủ pha chế có ướp đá"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-10",
        "name": "Đường cát",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã khui bao bì (còn trong chai)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "3 tháng"
              }
            ]
          },
          {
            "state": "Syrup đường",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "3 tháng"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "7 ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-11",
        "name": "Siro đậm đặc việt quất",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã khui bao bì (còn trong chai)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 tháng"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "1 tháng"
              }
            ]
          },
          {
            "state": "Đã khui bao bì (cho ra cont)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-12",
        "name": "Sinh tố phúc bồn tử",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã khui bao bì (còn trong chai)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 tháng"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "21 ngày"
              }
            ]
          },
          {
            "state": "Đã khui bao bì (cho ra cont)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-13",
        "name": "Caramel",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã khui bao bì (còn trong chai)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 tháng"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "21 ngày"
              }
            ]
          },
          {
            "state": "Đã khui bao bì (cho ra cont)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-14",
        "name": "Bột thịt bò Dasida",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao (Chưa pha với nước) nhưng cột kín khi không sử dụng",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "3 tháng"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-15",
        "name": "Dầu ăn",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao (Chưa pha với nước) nhưng cột kín khi không sử dụng",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 tháng"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-16",
        "name": "Dầu mè",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao (Chưa pha với nước) nhưng cột kín khi không sử dụng",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 tháng"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-17",
        "name": "Nước tương Maige",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở nắp, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "18 tháng",
                "note": "Kể từ NSX"
              }
            ]
          },
          {
            "state": "Đã mở nắp",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "1 tháng"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-18",
        "name": "Miến khô",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao (Chưa pha với nước) nhưng cột kín khi không sử dụng",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "1 tháng"
              }
            ]
          },
          {
            "state": "Đã chế biến (đã pha)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "3 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "5 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-19",
        "name": "Rong biển lá cuộn",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao (Chưa pha với nước) nhưng cột kín khi không sử dụng",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "2 tháng"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-20",
        "name": "Gạo Jasmine",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao (Chưa pha với nước) nhưng cột kín khi không sử dụng / Đã chế biến (đã nấu)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "3 tháng",
                "tempNote": "hoặc tủ mát 0 – 10°C"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-21",
        "name": "Lá kim cắt nhỏ tẩm gia vị - rong biển vụn",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao (Chưa pha với nước) nhưng cột kín khi không sử dụng",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "1 tháng"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-22",
        "name": "Xúc xích bò CP",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao, đã sơ chế",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "Trong ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-23",
        "name": "Tương cà",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao, đã sơ chế",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "1 tháng"
              }
            ]
          },
          {
            "state": "Đã fill ra chai",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-24",
        "name": "Giấm kimbap",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao, đã sơ chế (cho ra cont/ trong bao bì nhưng chưa sử dụng)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "2 tháng"
              }
            ]
          },
          {
            "state": "Đã cho ra cont và loại bỏ bao bì (Cho ra cont để sử dụng)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "14 ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-25",
        "name": "Tương ớt nhà làm",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao, đã sơ chế",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "1 tháng"
              }
            ]
          },
          {
            "state": "Đã fill ra chai",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-26",
        "name": "Dầu màu điều",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao, đã sơ chế",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "3 tháng"
              }
            ]
          },
          {
            "state": "Đã fill ra cont để ở bếp mì",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "14 ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-27",
        "name": "Xốt bánh gạo",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao, đã sơ chế",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 tháng"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "1 tháng"
              }
            ]
          },
          {
            "state": "Đã chế biến (đã pha ra thành phẩm nước tok)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "10 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-28",
        "name": "Sauce chấm bò",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao, đã sơ chế",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "1 tháng"
              }
            ]
          },
          {
            "state": "Đã chế biến (đã pha)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-29",
        "name": "Muối ớt xanh",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao, đã sơ chế",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "1 tháng"
              }
            ]
          },
          {
            "state": "Đã chế biến (đã pha)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-30",
        "name": "Tương đen ngọt",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao, đã sơ chế",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "1 tháng"
              }
            ]
          },
          {
            "state": "Đã chế biến (đã pha)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-31",
        "name": "Mayonnaise",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao, đã sơ chế",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "3 tháng"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          },
          {
            "state": "Đã chế biến (đã pha xốt kimbap)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "7 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-32",
        "name": "Mè trắng",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao, đã sơ chế",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "1 tháng"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-33",
        "name": "Ớt độ",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao, đã sơ chế",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "1 tháng"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "2 ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-34",
        "name": "Mì gói nhà làm + Chinno",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã chế biến (đã trụng hoặc đã ngâm qua nước lọc)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "5 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-35",
        "name": "Công thức kim chi",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã chế biến (đã nấu)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "2 ngày"
              }
            ],
            "note": "Nhiệt độ thường: Sau 10 giờ hâm lại nước lèo đạt nhiệt độ từ 70 -75°C, thì tắt bếp · Bảo quản tủ mát khi nước lèo dưới 3L (sau khi nguội)"
          }
        ]
      },
      {
        "id": "gia-vi-36",
        "name": "Công thức Sincay",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã chế biến (đã nấu)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "2 ngày"
              }
            ],
            "note": "Nhiệt độ thường: Sau 10 giờ hâm lại nước lèo đạt nhiệt độ từ 70 -75°C, thì tắt bếp · Bảo quản tủ mát khi nước lèo dưới 3L (sau khi nguội)"
          }
        ]
      },
      {
        "id": "gia-vi-37",
        "name": "Công thức Soyum",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã chế biến (đã nấu)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              }
            ],
            "note": "Sau khi nấu: để nguội, chia ra bịt nhỏ (5L) để bảo quản tủ mát"
          }
        ]
      },
      {
        "id": "gia-vi-38",
        "name": "Bột chiên gà rán - loại khô",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao (chưa lăn qua gà)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 tháng"
              }
            ]
          },
          {
            "state": "Đã mở bao (đã lăn qua gà và được loại bỏ phần bột đã dính nước)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "3 ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-39",
        "name": "Bột chiên gà rán - loại nước",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao (chưa lăn qua gà)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 tháng"
              }
            ]
          },
          {
            "state": "Đã chế biến (chưa lăn qua gà)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          },
          {
            "state": "Đã chế biến (đã lăn qua gà)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-40",
        "name": "Bột chiên gà rán - gia vị tẩm ướp",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã mở bao (chưa lăn qua gà)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 tháng"
              }
            ]
          }
        ]
      },
      {
        "id": "gia-vi-41",
        "name": "Nước dùng Sinpho cô đặc",
        "group": "gia-vi",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã pha với nước)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "dong-lanh",
    "label": "Đông lạnh",
    "items": [
      {
        "id": "dong-lanh-1",
        "name": "Tôm",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Thời gian rã đông",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "30-70 phút",
                "tempNote": "ngâm với nước trực tiếp"
              }
            ]
          },
          {
            "state": "Đã sơ chế (rã đông chưa mở bao hoặc đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "1 ngày",
                "tempNote": "ướp 1 tôm + 3 đá + nước sấp"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "12 giờ",
                "tempNote": "ướp 1 tôm + 1 đá + nước sấp"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày",
                "tempNote": "ướp 1 tôm + 2 đá + nước sấp"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "8 giờ",
                "tempNote": "ướp 1 tôm + 2 đá + nước sấp"
              }
            ],
            "note": "Chỉ áp dụng cho NH bán deli bằng máy deli"
          }
        ]
      },
      {
        "id": "dong-lanh-2",
        "name": "Mực ống",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Thời gian rã đông (trạng thái sản phẩm tốt nhất)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "10 - 12 giờ"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "30-40 phút",
                "tempNote": "ngâm với nước còn bao bì"
              }
            ]
          },
          {
            "state": "Đã sơ chế (rã đông chưa mở bao hoặc đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày",
                "tempNote": "ướp đá trực tiếp + rổ để ráo"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "8 giờ",
                "tempNote": "ướp đá trực tiếp + rổ để ráo"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "1 ngày",
                "tempNote": "ướp đá trực tiếp + rổ để ráo"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "8 giờ",
                "tempNote": "ướp đá trực tiếp + rổ để ráo"
              }
            ]
          }
        ]
      },
      {
        "id": "dong-lanh-3",
        "name": "Cá viên",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Thời gian rã đông (trạng thái sản phẩm tốt nhất)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "10 - 12 giờ"
              }
            ]
          },
          {
            "state": "Đã sơ chế (rã đông chưa mở bao hoặc đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "dong-lanh-4",
        "name": "Cá Basa filler còn bụng",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Thời gian rã đông (trạng thái sản phẩm tốt nhất)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "10 - 12 giờ"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "45-60 phút",
                "tempNote": "ngâm với nước còn bao bì"
              }
            ]
          },
          {
            "state": "Đã sơ chế (rã đông chưa mở bao hoặc đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày",
                "note": "Đối với rã đông bằng PP tủ mát 1 ngày đối với rã đông bằng PP ngâm nước còn bao bì"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "dong-lanh-5",
        "name": "Ba chỉ bò",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Thời gian rã đông (trạng thái sản phẩm tốt nhất)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "10 - 12 giờ"
              }
            ]
          },
          {
            "state": "Đã sơ chế (rã đông chưa mở bao hoặc đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "dong-lanh-6",
        "name": "Ba chỉ heo",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Thời gian rã đông (trạng thái sản phẩm tốt nhất)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "10 - 12 giờ"
              }
            ]
          },
          {
            "state": "Đã sơ chế (rã đông chưa mở bao hoặc đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "dong-lanh-7",
        "name": "Mandu - bánh xếp Hàn Quốc",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì/ đã mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              }
            ]
          }
        ]
      },
      {
        "id": "dong-lanh-8",
        "name": "Khoai tây sợi đông lạnh",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì/ mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              }
            ]
          }
        ]
      },
      {
        "id": "dong-lanh-9",
        "name": "Kimbap chiên",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Thời gian rã đông (trạng thái sản phẩm tốt nhất)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "10 - 12 giờ"
              }
            ]
          },
          {
            "state": "Đã sơ chế (rã đông chưa mở bao hoặc đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "dong-lanh-10",
        "name": "Chả cá Hàn Quốc",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Thời gian rã đông (trạng thái sản phẩm tốt nhất)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "10 - 12 giờ"
              }
            ]
          },
          {
            "state": "Đã sơ chế (rã đông chưa mở bao hoặc đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "dong-lanh-11",
        "name": "Xúc xích",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              },
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "45 ngày"
              }
            ]
          },
          {
            "state": "Thời gian rã đông (trạng thái sản phẩm tốt nhất)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "10 - 12 giờ"
              }
            ]
          },
          {
            "state": "Đã sơ chế (rã đông chưa mở bao hoặc đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "Trong ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "dong-lanh-12",
        "name": "Phô mai Mozzarella",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              },
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "7 ngày"
              }
            ]
          },
          {
            "state": "Thời gian rã đông (trạng thái sản phẩm tốt nhất)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "10 - 12 giờ"
              }
            ]
          },
          {
            "state": "Đã sơ chế (rã đông đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "2 tháng"
              },
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "3 ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "dong-lanh-13",
        "name": "Đùi gà tỏi",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Thời gian rã đông (trạng thái sản phẩm tốt nhất)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "10 giờ"
              }
            ]
          },
          {
            "state": "Rã đông chưa mở bao/đã mở bao bì/cắt nhỏ/chia phần.",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              }
            ]
          },
          {
            "state": "Đã ướp gia vị (của gà rán)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "16 giờ"
              }
            ]
          },
          {
            "state": "Đã chế biến (Gà rán đã chế biến)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "32 giờ",
                "note": "Tính từ thời điểm chiên gà xong. Cuối ngày mới được bảo quản tủ mát"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          },
          {
            "state": "Đã chế biến (đã hấp)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "4 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "dong-lanh-14",
        "name": "Mai ghẹ",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Thời gian rã đông (trạng thái sản phẩm tốt nhất)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "10 - 12 giờ"
              }
            ]
          },
          {
            "state": "Đã sơ chế (rã đông chưa mở bao hoặc đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "3 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "4 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "dong-lanh-15",
        "name": "Thanh cua",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Thời gian rã đông (trạng thái sản phẩm tốt nhất)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "10 - 12 giờ"
              }
            ]
          },
          {
            "state": "Đã sơ chế (rã đông chưa mở bao hoặc đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "4 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày",
                "tempNote": "bàn mát / có lót đá / tủ đá để topping"
              }
            ]
          }
        ]
      },
      {
        "id": "dong-lanh-16",
        "name": "Xiên bánh cá hầm",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Thời gian rã đông (trạng thái sản phẩm tốt nhất)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "10 - 12 giờ"
              }
            ]
          },
          {
            "state": "Đã sơ chế (rã đông chưa mở bao hoặc đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "dong-lanh-17",
        "name": "Gà phi lê ướp",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Thời gian rã đông (trạng thái sản phẩm tốt nhất)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "10 - 12 giờ"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "30 - 35 phút"
              }
            ]
          },
          {
            "state": "Đã sơ chế (rã đông chưa mở bao hoặc đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "dong-lanh-18",
        "name": "Phô mai viên",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Thời gian rã đông (trạng thái sản phẩm tốt nhất)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "10 - 12 giờ"
              }
            ]
          },
          {
            "state": "Đã sơ chế (rã đông chưa mở bao hoặc đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "dong-lanh-19",
        "name": "Phô mai que",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì/ đã mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Thời gian rã đông (trạng thái sản phẩm tốt nhất)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "10 - 12 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "dong-lanh-20",
        "name": "Viên phô mai thanh cua",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Thời gian rã đông (trạng thái sản phẩm tốt nhất)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "10 - 12 giờ"
              }
            ]
          },
          {
            "state": "Đã sơ chế (rã đông chưa mở bao hoặc đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "4 ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "dong-lanh-21",
        "name": "Gà viên",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Thời gian rã đông (trạng thái sản phẩm tốt nhất)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "10 - 12 giờ"
              }
            ]
          },
          {
            "state": "Đã sơ chế (rã đông chưa mở bao hoặc đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "2 ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "dong-lanh-22",
        "name": "Takoyaki - bánh bạch tuộc",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Thời gian rã đông (trạng thái sản phẩm tốt nhất)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "10 - 12 giờ"
              }
            ]
          },
          {
            "state": "Đã sơ chế (rã đông chưa mở bao hoặc đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "14 ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "dong-lanh-23",
        "name": "Sụn gà",
        "group": "dong-lanh",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "dong",
                "temp": "Tủ đông",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Thời gian rã đông (trạng thái sản phẩm tốt nhất)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "10 - 12 giờ"
              }
            ]
          },
          {
            "state": "Đã sơ chế (rã đông chưa mở bao hoặc đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "7 ngày"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mat",
    "label": "Hàng mát",
    "items": [
      {
        "id": "mat-1",
        "name": "Bánh gạo truyền thống",
        "group": "mat",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "14 ngày"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào/nấu)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "mat-2",
        "name": "Bánh gạo phô mai",
        "group": "mat",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "14 ngày"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào/nấu)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "mat-3",
        "name": "Xốt tương đen",
        "group": "mat",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "Theo bao bì"
              }
            ]
          }
        ]
      },
      {
        "id": "mat-4",
        "name": "Xốt kem cam",
        "group": "mat",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "Theo bao bì"
              }
            ]
          }
        ]
      },
      {
        "id": "mat-5",
        "name": "Xốt kem trắng",
        "group": "mat",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "Theo bao bì"
              }
            ]
          }
        ]
      },
      {
        "id": "mat-6",
        "name": "Kimchi cải thảo",
        "group": "mat",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "3 ngày"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào/nấu)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ",
                "tempNote": "thùng đá/bàn mát"
              }
            ]
          }
        ]
      },
      {
        "id": "mat-7",
        "name": "Rong biển xốt - ngâm chua",
        "group": "mat",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "3 ngày"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào/nấu)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ",
                "tempNote": "thùng đá/bàn mát"
              }
            ]
          }
        ]
      },
      {
        "id": "mat-8",
        "name": "Kimbap cuộn nhà làm",
        "group": "mat",
        "conditions": [
          {
            "state": "Đã chế biến (đã cuộn và quấn màng bọc thực phẩm hoặc để trong trong kín)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "Trong ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "5 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "mat-9",
        "name": "Củ cải muối vàng",
        "group": "mat",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "10 ngày"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào/nấu)",
            "options": [
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ",
                "tempNote": "thùng đá/bàn mát"
              }
            ]
          }
        ]
      },
      {
        "id": "mat-10",
        "name": "Trứng ngâm tương",
        "group": "mat",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "21 ngày"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã mở bao bì)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "7 ngày"
              }
            ]
          },
          {
            "state": "Đã chế biến (trụng/xào/nấu/cắt đôi)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "1 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "3 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "mat-11",
        "name": "Nấm mèo xào",
        "group": "mat",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "21 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "5 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "mat-12",
        "name": "Xốt cơm trộn",
        "group": "mat",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "1 tháng"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "mat-13",
        "name": "Xốt heo hầm",
        "group": "mat",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "1 tháng"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "mat-14",
        "name": "Xốt vị cay",
        "group": "mat",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "Theo bao bì"
              }
            ]
          },
          {
            "state": "Đã sơ chế (đã mở bao bì/cắt nhỏ/chia phần)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "1 tháng"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "mat-15",
        "name": "Xốt tỏi mè rang",
        "group": "mat",
        "conditions": [
          {
            "state": "Chưa mở bao, bao bì nguyên vẹn",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "3 tháng",
                "note": "Kể từ NSX"
              }
            ]
          },
          {
            "state": "Đã mở bao (yêu cầu loại bỏ bao và trút sản phẩm ra cont chứa)",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "1 tháng"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "6 giờ"
              }
            ]
          }
        ]
      },
      {
        "id": "mat-16",
        "name": "BTP xốt mì trộn",
        "group": "mat",
        "conditions": [
          {
            "state": "BTP xốt mì trộn nhà làm",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "3 ngày"
              }
            ]
          }
        ]
      },
      {
        "id": "mat-17",
        "name": "Xốt miến",
        "group": "mat",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "Theo bao bì"
              }
            ]
          }
        ]
      },
      {
        "id": "mat-18",
        "name": "BTP xốt chấm gà rán",
        "group": "mat",
        "conditions": [
          {
            "state": "Bảo quản, chưa mở bao bì",
            "options": [
              {
                "kind": "mat",
                "temp": "Tủ mát",
                "value": "5 ngày"
              },
              {
                "kind": "thuong",
                "temp": "Nhiệt độ thường",
                "value": "Trong ngày"
              }
            ]
          }
        ]
      }
    ]
  }
];
