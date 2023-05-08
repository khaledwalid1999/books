import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { handleCreateBook } = useContext(BooksContext);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === "") {
    } else {
      handleCreateBook(title.trim());
      setTitle("");
    }

    setTitle("");
  };
  const handleTitleOnChange = (event) => {
    setTitle(event.target.value);
  };
  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleFormSubmit}>
        <label>Title</label>
        <input className='input' value={title} onChange={handleTitleOnChange} />
        <button className='button'>Create</button>
      </form>
    </div>
  );
}
export default BookCreate;
