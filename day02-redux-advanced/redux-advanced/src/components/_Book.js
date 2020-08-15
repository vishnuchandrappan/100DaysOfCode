import React from "react";
import { useDispatch } from "react-redux";
import { selectBook } from "../redux/actions";
import { useHistory } from "react-router-dom";

export default function _Book({
  id,
  title,
  imageLinks,
  authors,
  flag = false,
}) {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div
      className="book"
      key={id}
      onClick={() => {
        if (!flag) {
          dispatch(selectBook(id));
          history.push("/order");
        }
      }}
    >
      <img alt={title} src={imageLinks.thumbnail} />
      <span>
        <strong>{title}</strong>
      </span>
      <p>{authors[0]}</p>
    </div>
  );
}
