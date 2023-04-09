import BookShow from "./BookShow";
import BooksContext from "../context/books";
import { useContext, useState } from "react";

function BookList({ books, onDelete, onUpdate }) {
  const { count, incrementCount } = useContext(BooksContext);

  const [selectedId, setSelectedId] = useState();
  const handleOnSelect = (id) => {
    setSelectedId(id);
  };
  const renederedBooks = books.map((book) => {
    return (
      <BookShow
        key={book.id}
        onUpdate={onUpdate}
        onDelete={onDelete}
        onSelect={handleOnSelect}
        book={book}
        selectedId={selectedId}
      />
    );
  });
  return (
    <div className='book-list'>
      {count}
      <button onClick={incrementCount}>Click</button>
      {renederedBooks}
    </div>
  );
}
export default BookList;
