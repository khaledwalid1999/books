import { useContext } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import BooksContext from "./context/books";

function App() {
  const { handleCreateBook } = useContext(BooksContext);

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList />
      <BookCreate onSubmit={handleCreateBook} />
    </div>
  );
}

export default App;
