import BookEdit from "./BookEdit";

function BookShow({ onSelect, onUpdate, onDelete, book, selectedId }) {
  const handleToggleEdit = () => {
    if (selectedId === book.id) {
      onSelect(0);
    } else {
      onSelect(book.id);
    }
  };

  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleUpdateBook = (id, title) => {
    onSelect(0);
    onUpdate(id, title);
  };

  let content = <h3>{book.title}</h3>;
  if (selectedId === book.id) {
    content = <BookEdit onUpdate={handleUpdateBook} book={book} />;
  }

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${book.id}600/600`} alt='books' />
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleToggleEdit}></button>
        <button className='delete' onClick={handleDelete}></button>
      </div>
    </div>
  );
}
export default BookShow;
