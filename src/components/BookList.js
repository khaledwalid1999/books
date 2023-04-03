import BookCard from "./BookCard";

function BookList({ books, onDelete, onUpdate }) {
  const renederedBooks = books.map((book) => {
    return (
      <BookCard
        key={book.id}
        onUpdate={onUpdate}
        onDelete={onDelete}
        book={book}
      />
    );
  });
  return <div className='book-list'>{renederedBooks}</div>;
}
export default BookList;
