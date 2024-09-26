import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../constants/appConfig";
import { addNewBook, fetchAuthors, fetchGenres } from "../api/apiCaller";
import { Button, Container, Form, FormGroup, Stack } from "react-bootstrap";
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

    addNewBook({ title, authorId, genreId, publishedYear, price })
      .then((data) => {
        console.log(data);
        toast.success("Create book successfully!");
        setTitle("");
        setAuthorId("");
        setGenreId("");
        setPublishedYear("");
        setPrice("");
      })
      .catch((error) => {
        console.error("Failed to create data: ", error);
      });
  };

  return (
    <Container>
      <h1>BookForm</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="my-2" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            placeholder="Enter title..."
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="my-2" controlId="authorId">
          <Form.Label>Author:</Form.Label>
          <Form.Select
            name="authorId"
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
          >
            <option>Please select author</option>
            {authors.length > 0
              ? authors.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))
              : null}
          </Form.Select>
        </FormGroup>
        <FormGroup className="my-2" controlId="genreId">
          <Form.Label>Genre</Form.Label>
          <Form.Select
            name="genreId"
            value={genreId}
            onChange={(e) => setGenreId(e.target.value)}
          >
            <option>Please select genre</option>
            {genres
              ? genres.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))
              : null}
          </Form.Select>
        </FormGroup>
        <FormGroup className="my-2" controlId="publishedYear">
          <Form.Label>Published Year</Form.Label>
          <Form.Control
            name="publishedYear"
            value={publishedYear}
            onChange={(e) => setPublishedYear(e.target.value)}
          ></Form.Control>
        </FormGroup>
        <FormGroup className="my-2" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></Form.Control>
        </FormGroup>
        <Stack direction="horizontal" gap={2}>
          <Button type="submit">Submit</Button>
          <Button variant="light" onClick={() => navigation("/")}>
            Back
          </Button>
        </Stack>
      </Form>
    </Container>
  );
};

export default BookForm;
