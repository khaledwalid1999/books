import { useState } from "react";

function BookEdit({ onUpdate, book }) {
  const [title, setTitle] = useState(book.title);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === "") {
    } else {
      onUpdate(title.trim(), book.id);
    }
  };

  const handleOnChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <label>Title</label>
      <form onSubmit={handleOnSubmit} className='book-edit'>
        <input value={title} onChange={handleOnChange} className='input' />
        <button className='button is-primary'>Save</button>
      </form>
    </div>
  );
}
export default BookEdit;
