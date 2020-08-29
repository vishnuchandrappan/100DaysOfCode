import React, { useState } from "react";
import Container from "../_shared/Container";
import Button from "../_shared/Button";
import useDocTitle from "../hooks/useDocTitle";

export default function DocTitle() {
  const [count, setCount] = useState(0);

  useDocTitle(count);

  return (
    <Container fluid primary>
      <Button onClick={() => setCount(count + 1)}>Count :{count}</Button>
    </Container>
  );
}
