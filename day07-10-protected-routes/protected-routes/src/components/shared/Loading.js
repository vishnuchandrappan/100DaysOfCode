import React from "react";
import { useSelector } from "react-redux";
import './loading.scss';

export function LoadingAnimation() {
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
        <LoadingAnimation />
      </div>
    )
  );
};

export default Loading;
