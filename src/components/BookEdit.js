import { useState } from "react";

function BookEdit({ onUpdate, book }) {
  const [title, setTitle] = useState(book.title);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === "") {
    } else {
      onUpdate(book.id, title.trim());
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
