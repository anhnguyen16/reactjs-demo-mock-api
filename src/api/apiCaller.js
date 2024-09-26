import axios from "axios";
import { API_URL } from "../constants/appConfig";
import { v4 as uuidv4 } from "uuid";

export const fetchBooks = async () => {
  try {
    const response = await axios.get(
      API_URL + "/books?_expand=author&_expand=genre"
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message ?? "Unknown Error");
  }
};

export const addNewBook = async (book) => {
  try {
    const response = await axios.post(API_URL + "/books", {
      ...book,
      id: uuidv4(),
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message ?? "Unknown Error");
  }
};

export const fetchAuthors = async () => {
  try {
    const response = await axios.get(API_URL + "/authors");
    return response.data;
  } catch (error) {
    throw new Error(error.message ?? "Unknown Error");
  }
};

export const fetchGenres = async () => {
  try {
    const response = await axios.get(API_URL + "/genres");
    return response.data;
  } catch (error) {
    throw new Error(error.message ?? "Unknown Error");
  }
};

export const addNewAuthor = async (post) => {
  try {
    const response = await axios.post(API_URL + "/books", post);
    return response.data;
  } catch (error) {
    throw new Error(error.message ?? "Unknown Error");
  }
};

export const deleteAuthor = async (id) => {
  try {
    const response = await axios.delete(API_URL + "/books/" + id);
    return response.data;
  } catch (error) {
    throw new Error(error.message ?? "Unknown Error");
  }
};

export const updateAuthor = async (id, author) => {
  try {
    const response = await axios.put(API_URL + "/books/" + id, author);
    return response.data;
  } catch (error) {
    throw new Error(error.message ?? "Unknown Error");
  }
};
