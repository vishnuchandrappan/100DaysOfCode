import { Action, UiState } from "../_interfaces";
import { Types } from '../actions/ui';

const uiState: UiState = {
  isSubmitting: false,
  showCommentBar: false,
  blogPostId: null
}

export function UiReducer(
  state = uiState,
  action: Action
) {
  switch (action.type) {
    case Types.UPDATE_SUBMITTING:
      return {
        ...state,
        isSubmitting: action.payload
      }

    case Types.SHOW_COMMENT_BAR:
      return {
        ...state,
        showCommentBar: true,
        blogPostId: action.payload
      }

    case Types.HIDE_COMMENT_BAR:
      return {
        ...state,
        showCommentBar: false,
        blogPostId: null
      }

    default:
      return state
  }
}