import React from "react";
import { useSelector } from "react-redux";
import { onBookSelect } from "../redux/actions";

export default function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <div className="books__container">
      {books.map(({ volumeInfo: { imageLinks, title, authors }, id }) => (
        <div
          className="book"
          key={id}
          onClick={() => dispatch(onBookSelect(id))}
        >
          <img alt={title} src={imageLinks.thumbnail} />
          <span>
            <strong>{title}</strong>
          </span>
          <p>{authors[0]}</p>
        </div>
      ))}
    </div>
  );
}
