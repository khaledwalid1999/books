import { createContext, useState, useEffect } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleCreateBook = async (title) => {
    await axios.post("http://localhost:3001/books", { title });
    fetchBooks();
  };

  const handleDeleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    fetchBooks();
  };

  const handleUpdateBook = async (id, title) => {
    await axios.put(`http://localhost:3001/books/${id}`, { title });
    fetchBooks();
  };

  return (
    <BooksContext.Provider
      value={{ books, handleCreateBook, handleDeleteBook, handleUpdateBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}
export { Provider };
export default BooksContext;
