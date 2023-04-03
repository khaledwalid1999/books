import { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    const id = Math.round(Math.random() * Math.random() * 999999999);
    console.log(title);
    setBooks([...books, { id, title }]);
    console.log(books);
  };

  const handleDeleteBookById = (id) => {
    const updatedBookList = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBookList);
  };

  return (
    <div>
      <BookList onDelete={handleDeleteBookById} books={books} />
      <BookCreate onSubmit={handleCreateBook} />
    </div>
  );
}

export default App;
