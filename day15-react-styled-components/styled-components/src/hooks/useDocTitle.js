import { useEffect } from "react";

export default function useDocTitle(count) {
  useEffect(() => {
    document.title = `You Clicked ${count} times`;
  }, [count]);
}
