import { Types as AuthTypes } from "./auth";
import { Types as UiTypes } from "./ui";

export const Types = {
  ...AuthTypes,
  ...UiTypes,
};

export { userLogin, updateAuth, userLogout } from "./auth";
export { setLoading, resetLoading, setSubmitting, resetSubmitting } from "./ui";