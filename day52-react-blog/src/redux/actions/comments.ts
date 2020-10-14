const entity = "[Comment]";

export const Types = {
  GET_COMMENTS_REQUEST: `${entity} Get Request`,
  GET_COMMENTS_REQUEST_SUCCESS: `${entity} Get Success`,
  GET_COMMENTS_REQUEST_ERROR: `${entity} Get Error`,
}

export const getCommentsRequest = () => ({
  type: Types.GET_COMMENTS_REQUEST,
})