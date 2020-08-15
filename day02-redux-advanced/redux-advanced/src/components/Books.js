import React from "react";
import { useSelector } from "react-redux";
import Book from "./_Book";
export default function Books() {
  const books = useSelector((state) => state.books);
  return (
    <div className="books__container">
      {books.map(({ volumeInfo, id }) => (
        <Book key={id} {...volumeInfo} id={id} />
      ))}
    </div>
  );
}
