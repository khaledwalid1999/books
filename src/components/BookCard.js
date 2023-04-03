import { useState } from "react";
import BookEdit from "./BookEdit";

function BookCard({ onUpdate, onDelete, book }) {
  const [isEdit, setIsEdit] = useState(false);
  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleToggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleOnUpdate = () => {
    onUpdate();
    handleToggleEdit();
  };

  let content = <h3>{book.title}</h3>;
  if (isEdit) {
    content = <BookEdit onUpdate={handleOnUpdate} book={book} />;
  }

  return (
    <div className='book-show'>
      <div>{content}</div>
      <div className='actions'>
        <button className='delete' onClick={handleDelete}></button>
        <button className='edit' onClick={handleToggleEdit}></button>
      </div>
    </div>
  );
}
export default BookCard;
