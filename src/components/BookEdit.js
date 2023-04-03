import { useState } from "react";

function BookEdit({ onUpdate, book }) {
  const [title, setTitle] = useState(book.title);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === "") {
    } else {
      onUpdate(title.trim(), book.id);
    }
    setTitle("");
  };

  const handleOnChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <label>Edit</label>
      <form onSubmit={handleOnSubmit}>
        <input value={title} onChange={handleOnChange} />
      </form>
    </div>
  );
}
export default BookEdit;
