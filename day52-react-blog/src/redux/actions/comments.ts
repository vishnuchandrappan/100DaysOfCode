import { Action } from "../_interfaces";

const entity = "[Comment]";

export const Types = {
  GET_COMMENTS_REQUEST: `${entity} Get Request`,
  GET_COMMENTS_REQUEST_SUCCESS: `${entity} Get Success`,
  GET_COMMENTS_REQUEST_ERROR: `${entity} Get Error`,
  LIKE_COMMENT: `${entity} Like Comment`,
  LIKE_COMMENT_SUCCESS: `${entity} Like Success`,
  LIKE_COMMENT_ERROR: `${entity} Like Error`
}

export const getCommentsRequest = (): Action => ({
  type: Types.GET_COMMENTS_REQUEST,
})

export const likeComment = (commentId: number): Action => ({
  type: Types.LIKE_COMMENT,
  payload: commentId
})