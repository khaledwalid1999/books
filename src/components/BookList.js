import BookCard from "./BookCard";

function BookList({ books }) {
  const renederedBooks = books.map((book) => {
    return <BookCard book={book} />;
  });
  return <div>{renederedBooks}</div>;
}
export default BookList;
