import { Redirect, Route } from "react-router-dom";
import { AuthCheck } from "reactfire";

export default function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <AuthCheck fallback={<Redirect to="/login" />}>
          <Component {...rest} {...props} />
        </AuthCheck>
      )}
    />
  );
}
