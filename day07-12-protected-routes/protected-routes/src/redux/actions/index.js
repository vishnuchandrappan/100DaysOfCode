import { Types as AuthTypes } from "./auth";
import { Types as UiTypes } from "./ui";
import { Types as ApiTypes } from "./api";
import { Types as UsersTypes } from "./users";

export const Types = {
  ...AuthTypes,
  ...UiTypes,
  ...ApiTypes,
  ...UsersTypes,
};

export { userLogin, updateUser, userLogout } from "./auth";
export { setLoading, resetLoading, setSubmitting, resetSubmitting } from "./ui";
export { apiRequest, authApiRequest, apiRequestWithToken } from "./api";
export { usersRequest } from "./users";
