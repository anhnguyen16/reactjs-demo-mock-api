import { useEffect, useState } from "react";
import { fetchBooks } from "../api/apiCaller";
import { Button, Card, Col, Row, Spinner, Stack, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ConfirmDeleteButton from "./ConfirmDeleteButton";
import { toast } from "react-toastify";

function BookList() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks()
      .then((data) => setBooks(data))
      .catch((error) => setError("Không thể lấy sách: " + error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    // TODO: Delete
    toast.info("Chức năng này sắp ra mắt!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const handleEdit = (item) => {
    // TODO: Edit
    toast.info("Chức năng này sắp ra mắt!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // if (book) {
      //   // TODO: Update Book
      // } else {
      //   // TODO: Create book
      // }
    } catch (error) {
      console.log(error.status, "error.status");
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (books && books.length === 0) {
    return <p>Không có dữ liệu</p>;
  }

  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>Thêm sách mới</Card.Title>
        <div className="text-end">
          <Button
            className="my-2"
            type="button"
            onClick={() => navigate("/create")}
          >
            Thêm sách mới
          </Button>
        </div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="text-center" style={{ width: "40px" }}>
                #
              </th>
              <th>Tiêu đề</th>
              <th>Tác giả</th>
              <th>Năm xuất bản</th>
              <th>Thể loại</th>
              <th>Giá</th>
              <th style={{ width: "110px" }}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {books.map((item, index) => (
              <tr key={item.id}>
                <td className="text-center">{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.author ? item.author.name : "-"}</td>
                <td>{item.publishedYear}</td>
                <td>{item.genre ? item.genre.name : "-"}</td>
                <td>{item.price}</td>
                <td>
                  <Stack direction="horizontal" gap={2}>
                    <Button
                      onClick={() => handleEdit(item)}
                      variant="info"
                      size="sm"
                    >
                      Sửa
                    </Button>
                    <ConfirmDeleteButton
                      id={item.id}
                      onConfirm={handleDelete}
                    />
                  </Stack>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default BookList;
