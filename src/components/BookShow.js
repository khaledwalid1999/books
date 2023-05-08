import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow({ onSelect, book, selectedId }) {
  const { handleDeleteBook } = useBooksContext();

  const onDelete = () => {
    handleDeleteBook(book.id);
  };

  const handleToggleEdit = () => {
    if (selectedId === book.id) {
      onSelect(0);
    } else {
      onSelect(book.id);
    }
  };

  let content = <h3>{book.title}</h3>;

  if (selectedId === book.id) {
    content = <BookEdit book={book} onSubmit={handleToggleEdit} />;
  }

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${book.id}600/600`} alt='books' />
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleToggleEdit}></button>
        <button className='delete' onClick={onDelete}></button>
      </div>
    </div>
  );
}
export default BookShow;
