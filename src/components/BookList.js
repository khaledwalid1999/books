import BookShow from "./BookShow";
import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  const { books } = useBooksContext();
  const [selectedId, setSelectedId] = useState();

  const handleOnSelect = (id) => {
    setSelectedId(id);
  };
  const renederedBooks = books.map((book) => {
    return (
      <BookShow
        key={book.id}
        onSelect={handleOnSelect}
        book={book}
        selectedId={selectedId}
      />
    );
  });
  return <div className='book-list'>{renederedBooks}</div>;
}
export default BookList;
