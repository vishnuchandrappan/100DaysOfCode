import React, { useState } from "react";
import { submitOrder } from "../redux/actions";

export default function OrderBook() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="books__container">
      <pre>book image</pre>

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
        }}
      >
        Order
      </button>
    </div>
  );
}
