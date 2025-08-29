import React from "react";
import BookCard from "./BookCard";

function BookList({ books }) {
  if (books.length === 0) return null;

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {books.map((book, index) => (
          <div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
