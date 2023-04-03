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

  const handleUpdateBook = (title, id) => {
    console.log(title);
    const updatedBookList = books.map((book) => {
      if (id === book.id) {
        return { id: book.id, title };
      } else {
        return book;
      }
    });
    setBooks([updatedBookList]);
    console.log(books);
  };

  return (
    <div>
      <BookList
        onUpdate={handleUpdateBook}
        onDelete={handleDeleteBookById}
        books={books}
      />
      <BookCreate onSubmit={handleCreateBook} />
    </div>
  );
}

export default App;
