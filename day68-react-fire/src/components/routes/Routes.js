import { Route, Switch } from "react-router-dom";
import ChatContainer from "../chat/ChatContainer";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import LoginContainer from "../login/LoginContainer";
import SignupContainer from "../signup/SignupContainer";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/signup" component={SignupContainer} />
      <ProtectedRoute path="/chat" component={ChatContainer} />

      <Route component={NotFound} />
    </Switch>
  );
}
