import { Types as AuthTypes } from './auth';
import { Types as UiTypes } from './ui';
import { Types as ApiTypes } from './api';

export const Types = {
  ...AuthTypes,
  ...UiTypes,
  ...ApiTypes
}

export { loginRequest } from './auth';
export { setSubmitting, resetSubmitting } from './ui';
export { apiRequest, authApiRequest } from './api'