import { useEffect, useState } from "react";
import { addNewBook, fetchAuthors, fetchGenres } from "../api/apiCaller";
import {
  Button,
  Card,
  Container,
  Form,
  FormGroup,
  Stack,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BookForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [price, setPrice] = useState("");
  const [genreId, setGenreId] = useState("");
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    fetchAuthors()
      .then((data) => {
        setAuthors(data);
      })
      .catch((error) => {
        console.error("Failed to fetch authors: ", error);
      });

    fetchGenres()
      .then((data) => setGenres(data))
      .catch((error) => console.log("Failed to fetch genres: ", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Create
    toast.info("Chức năng này sắp ra mắt!", {
      position: "top-center",
      autoClose: 3000,
    });

    // addNewBook({ title, authorId, genreId, publishedYear, price })
    //   .then((data) => {
    //     console.log(data);
    //     toast.success("Create book successfully!");
    //     setTitle("");
    //     setAuthorId("");
    //     setGenreId("");
    //     setPublishedYear("");
    //     setPrice("");
    //   })
    //   .catch((error) => {
    //     console.error("Failed to create data: ", error);
    //   });
  };

  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>Thêm sách mới</Card.Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup className="my-2" controlId="title">
            <Form.Label>Tiêu đề</Form.Label>
            <Form.Control
              name="title"
              placeholder="Tiêu đề sách"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="my-2" controlId="authorId">
            <Form.Label>Tác giả:</Form.Label>
            <Form.Select
              name="authorId"
              value={authorId}
              onChange={(e) => setAuthorId(e.target.value)}
            >
              <option>Vui lòng chọn tác giả</option>
              {authors.length > 0
                ? authors.map((item) => (
                    <option value={item.id}>{item.name}</option>
                  ))
                : null}
            </Form.Select>
          </FormGroup>
          <FormGroup className="my-2" controlId="genreId">
            <Form.Label>Thể loại</Form.Label>
            <Form.Select
              name="genreId"
              value={genreId}
              onChange={(e) => setGenreId(e.target.value)}
            >
              <option>Vui lòng chọn thể loại</option>
              {genres
                ? genres.map((item) => (
                    <option value={item.id}>{item.name}</option>
                  ))
                : null}
            </Form.Select>
          </FormGroup>
          <FormGroup className="my-2" controlId="publishedYear">
            <Form.Label>Năm xuất bản</Form.Label>
            <Form.Control
              name="publishedYear"
              value={publishedYear}
              placeholder="Năm xuất bản"
              onChange={(e) => setPublishedYear(e.target.value)}
            ></Form.Control>
          </FormGroup>
          <FormGroup className="my-2" controlId="price">
            <Form.Label>Giá</Form.Label>
            <Form.Control
              name="price"
              value={price}
              placeholder="Giá"
              onChange={(e) => setPrice(e.target.value)}
            ></Form.Control>
          </FormGroup>
          <Stack direction="horizontal" gap={2}>
            <Button type="submit">Thêm sách mới</Button>
            <Button variant="light" onClick={() => navigation("/")}>
              Quay lại
            </Button>
          </Stack>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default BookForm;
