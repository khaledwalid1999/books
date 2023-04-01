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
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleTitleOnChange} />
      </form>
    </div>
  );
}
export default BookCreate;
