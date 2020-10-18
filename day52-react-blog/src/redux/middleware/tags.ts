import { TAG_URLS } from '../../utils/urls';
import {
  Types,
  authApiRequest,
  setSubmitting,
  resetSubmitting
} from '../actions';
import { Action } from '../_interfaces';

const fetchTagsFlow = ({ dispatch }: any) => (next: any) => (action: Action) => {
  next(action);

  if (action.type === Types.GET_TAGS_REQUEST) {
    dispatch(
      authApiRequest(
        "GET",
        TAG_URLS.GET_TAGS,
        {},
        Types.GET_TAGS_SUCCESS,
        Types.SET_ERROR
      )
    );
    dispatch(setSubmitting());
  } else if (action.type === Types.GET_TAGS_SUCCESS) {
    dispatch(resetSubmitting())
  }

};

export const tagsMiddleware = [
  fetchTagsFlow,
]