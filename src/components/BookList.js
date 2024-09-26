import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import { fetchBooks } from "../api/apiCaller";
import { Button, Col, Container, Row, Stack, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function BookList() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks()
      .then((data) => setBooks(data))
      .catch((error) => setError("Failed to fetch books: " + error.message));
  }, []);

  const handleDelete = (id) => {
    // TODO: Delete
  };

  const handleEdit = (item) => {
    // TODO: Edit
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

  if (books && books.length === 0) {
    return <p>Không có dữ liệu</p>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Books</h1>
          <Button
            className="my-2"
            type="button"
            onClick={() => navigate("/create")}
          >
            Add new book
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Published Year</th>
            <th>Genre</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author.name}</td>
              <td>{item.publishedYear}</td>
              <td>{item.genre.name}</td>
              <td>{item.price}</td>
              <td>
                <Stack direction="horizontal" gap={2}>
                  <Button
                    onClick={() => handleEdit(item)}
                    variant="info"
                    size="sm"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(item.id)}
                    variant="danger"
                    size="sm"
                  >
                    Delete
                  </Button>
                </Stack>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default BookList;
