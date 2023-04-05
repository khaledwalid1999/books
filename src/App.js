import { useState, useEffect } from "react";
import axios from "axios";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleCreateBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    setBooks([...books, response.data]);
  };

  const handleDeleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    fetchBooks();
  };

  const handleUpdateBook = async (id, title) => {
    const response = (
      await axios.put(`http://localhost:3001/books/${id}`, { title })
    ).data;

    const updatedBookList = books.map((book) => {
      if (id === book.id) {
        return { ...book, ...response.data };
      } else {
        return book;
      }
    });
    setBooks(updatedBookList);
  };

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList
        onUpdate={handleUpdateBook}
        onDelete={handleDeleteBook}
        books={books}
      />
      <BookCreate onSubmit={handleCreateBook} />
    </div>
  );
}

export default App;
