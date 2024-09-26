#

## Install JSON Server

```
npm install -g json-server@0.17.4
```

### Create a data/db.json file with some data

```json
{
  "books": [
    {
      "id": 1,
      "title": "Tắt Đèn",
      "authorId": 1,
      "publishedYear": 1939,
      "genreId": 1,
      "price": 8.99
    },
    {
      "id": 2,
      "title": "Số Đỏ",
      "authorId": 2,
      "publishedYear": 1936,
      "genreId": 1,
      "price": 9.5
    },
    {
      "id": 3,
      "title": "Dế Mèn Phiêu Lưu Ký",
      "authorId": 3,
      "publishedYear": 1941,
      "genreId": 2,
      "price": 7.99
    },
    {
      "id": 4,
      "title": "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
      "authorId": 4,
      "publishedYear": 2010,
      "genreId": 3,
      "price": 12
    },
    {
      "id": 5,
      "title": "Mắt Biếc",
      "authorId": 4,
      "publishedYear": 1990,
      "genreId": 3,
      "price": 10.5
    }
  ],
  "genres": [
    {
      "id": 1,
      "name": "Văn học hiện thực"
    },
    {
      "id": 2,
      "name": "Thiếu nhi"
    },
    {
      "id": 3,
      "name": "Tiểu thuyết"
    }
  ],
  "authors": [
    {
      "id": 1,
      "name": "Ngô Tất Tố"
    },
    {
      "id": 2,
      "name": "Vũ Trọng Phụng"
    },
    {
      "id": 3,
      "name": "Tô Hoài"
    },
    {
      "id": 4,
      "name": "Nguyễn Nhật Ánh"
    }
  ]
}
```

### Start JSON Server

```
json-server --watch --port 3004 data/db.json
```

## Install axios

Sử dụng gói này để call các API

```
npm i axios
```

## Install react-toastify

```
npm install --save react-toastify
```

## Install uuid

Để tạo ra mã id tự động

```
npm install uuid
```