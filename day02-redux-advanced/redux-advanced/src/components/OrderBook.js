import React, { useState, useEffect } from "react";
import { submitOrder } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Book from "./_Book";
import { useHistory } from "react-router-dom";

export default function OrderBook() {
  const books = useSelector((state) => state.books);
  const order = useSelector((state) => state.order);
  const [book, setBook] = useState([]);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (books.length > 0) {
      setBook(books.filter((book) => book.id === order.bookId));
      if (!order.date) {
        history.push("/");
      }
    }
  }, [books, order, history]);

  return (
    <div className="order__container">
      {book.length > 0 && (
        <Book id={order.bookId} {...book[0].volumeInfo} flag={true} />
      )}
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={({ target }) => {
          setEmail(target.value);
        }}
      />

      <button
        onClick={() => {
          dispatch(submitOrder());
          history.push('/');
        }}
      >
        Order
      </button>
    </div>
  );
}
