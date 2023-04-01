import { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    console.log(title);
    setBooks([...books, title]);
    console.log(books);
  };

  return (
    <div>
      <BookList books={books} />
      <BookCreate onSubmit={handleCreateBook} />
    </div>
  );
}

export default App;
