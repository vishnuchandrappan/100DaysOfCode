import React from "react";
import { CSSTransition } from "react-transition-group";
import "./anim.scss";
import { Route } from "react-router-dom";
const AnimatedRoute = (props) => {
  const { path, Component, ...rest } = props;
  let children = "";
  if (!Component && props.children) {
    children = props.children;
  }
  return (
    <Route path={path} {...rest}>
      {({ match }) => (
        <CSSTransition
          in={match != null}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          <div className="page">{Component ? <Component /> : children}</div>
        </CSSTransition>
      )}
    </Route>
  );
};

export default AnimatedRoute;
