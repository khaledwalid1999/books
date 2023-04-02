import { useState } from "react";

function BookCreate({ onSubmit }) {
  const [title, setTitle] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(title.trim());
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
