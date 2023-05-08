import BooksContext from "../context/books";
import { useState, useContext } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const { handleUpdateBook } = useContext(BooksContext);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === "") {
    } else {
      handleUpdateBook(book.id, title.trim());
      onSubmit();
    }
  };

  const handleOnChange = (event) => {
    setTitle(event.target.value);
  };

  const handleOnFocus = () => {
    document.getElementById(book.id).select();
  };

  return (
    <div>
      <label>Title</label>
      <form onSubmit={handleOnSubmit} className='book-edit'>
        <input
          id={book.id}
          value={title}
          onChange={handleOnChange}
          className='input'
          autoFocus
          onFocus={handleOnFocus}
        />
        <button className='button is-primary'>Save</button>
      </form>
    </div>
  );
}
export default BookEdit;
