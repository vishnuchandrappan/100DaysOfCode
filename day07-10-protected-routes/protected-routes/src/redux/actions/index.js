import { Types as AuthTypes } from "./auth";
import { Types as UiTypes } from "./ui";
import { Types as ApiTypes } from "./api";

export const Types = {
  ...AuthTypes,
  ...UiTypes,
  ...ApiTypes,
};

export { userLogin, updateUser, userLogout } from "./auth";
export { setLoading, resetLoading, setSubmitting, resetSubmitting } from "./ui";
export { apiRequest, apiRequestWithToken } from "./api";
