import BookCard from "./BookCard";

function BookList({ books, onDelete }) {
  const renederedBooks = books.map((book) => {
    return <BookCard onDelete={onDelete} key={book.id} book={book} />;
  });
  return <div className='book-list'>{renederedBooks}</div>;
}
export default BookList;
