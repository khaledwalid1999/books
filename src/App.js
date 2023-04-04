import { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    const id = Math.round(Math.random() * Math.random() * 999999999);
    setBooks([...books, { id, title }]);
    console.log(books);
  };

  const handleDeleteBookById = (id) => {
    const updatedBookList = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBookList);
  };

  const handleUpdateBook = (id, newTitle) => {
    console.log(id);
    console.log(newTitle);
    const updatedBookList = books.map((book) => {
      if (id === book.id) {
        return { ...book, title: newTitle };
      } else {
        return book;
      }
    });
    setBooks(updatedBookList);
    console.log(books);
  };

  return (
    <div className='app'>
      <h1>Reading List</h1>
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
