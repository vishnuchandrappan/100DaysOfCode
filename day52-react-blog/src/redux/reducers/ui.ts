import { Action, UiState } from "../_interfaces";
import { Types } from '../actions/ui';

const uiState: UiState = {
  isSubmitting: false
}

export function UiReducer(
  state = uiState,
  action: Action
) {
  switch (action.type) {
    case Types.UPDATE_SUBMITTING:
      return {
        isSubmitting: action.payload
      }

    default:
      return state
  }
}