import BookCard from "./BookCard";

function BookList({ books, onDelete, onUpdate }) {
  const renederedBooks = books.map((book) => {
    return (
      <BookCard
        onUpdate={onUpdate}
        onDelete={onDelete}
        key={book.id}
        book={book}
      />
    );
  });
  return <div className='book-list'>{renederedBooks}</div>;
}
export default BookList;
