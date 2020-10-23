import Login from "./Login";
import { useHistory } from "react-router-dom";
import { useAuth } from "reactfire";

export const EMAIL_REGEX = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

export default function LoginContainer() {

  const auth = useAuth();
  const history = useHistory();

  const handleSubmit = async (values) => {
    try {
      await auth.signInWithEmailAndPassword(values.email, values.password);
      history.push("/chat");
    } catch (error) {
      console.log("error");
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validate = (values) => {
    let errors = {};

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(values.email)) {
      errors.email = "Invalid email";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Minimum 8 characters required";
    }

    return errors;
  };

  return (
    <Login
      handleSubmit={handleSubmit}
      initialValues={initialValues}
      validate={validate}
    />
  );
}
