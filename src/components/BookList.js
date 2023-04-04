import BookCard from "./BookShow";
import { useState } from "react";

function BookList({ books, onDelete, onUpdate }) {
  const [selectedId, setSelectedId] = useState();
  const handleOnSelect = (id) => {
    setSelectedId(id);
  };
  const renederedBooks = books.map((book) => {
    return (
      <BookCard
        key={book.id}
        onUpdate={onUpdate}
        onDelete={onDelete}
        onSelect={handleOnSelect}
        book={book}
        selectedId={selectedId}
      />
    );
  });
  return <div className='book-list'>{renederedBooks}</div>;
}
export default BookList;
