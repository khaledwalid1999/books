import BookShow from "./BookShow";
import BooksContext from "../context/books";
import { useContext, useState } from "react";

function BookList() {
  const { books, handleUpdateBook, handleDeleteBook } =
    useContext(BooksContext);
  const [selectedId, setSelectedId] = useState();

  const handleOnSelect = (id) => {
    setSelectedId(id);
  };
  const renederedBooks = books.map((book) => {
    return (
      <BookShow
        key={book.id}
        onUpdate={handleUpdateBook}
        onDelete={handleDeleteBook}
        onSelect={handleOnSelect}
        book={book}
        selectedId={selectedId}
      />
    );
  });
  return <div className='book-list'>{renederedBooks}</div>;
}
export default BookList;
