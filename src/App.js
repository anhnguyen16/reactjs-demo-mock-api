import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
import "bootstrap/dist/css/bootstrap.min.css";
import BookForm from "./components/BookForm";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />}></Route>
          <Route path="/create" element={<BookForm />}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
