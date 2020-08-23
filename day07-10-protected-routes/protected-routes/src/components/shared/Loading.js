import React from "react";
import { useSelector } from "react-redux";

export function LoadingPage() {
  return (
    <div className="ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

const Loading = () => {
  const isLoading = useSelector(({ ui }) => ui.isLoading);
  return (
    isLoading && (
      <div className="loading">
        <LoadingPage />
      </div>
    )
  );
};

export default Loading;
