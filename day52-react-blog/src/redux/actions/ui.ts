import { Action } from "../_interfaces";

const entity = "[UI]";

export const Types = {
  SET_SUBMITTING: `${entity} Set Submitting`,
  RESET_SUBMITTING: `${entity} Reset Submitting`,
  UPDATE_SUBMITTING: `${entity} Update Submitting`,
  SHOW_SUCCESS_TOAST: `${entity} Show Success Toast`,
  SHOW_DANGER_TOAST: `${entity} Show Danger Toast`,
  SHOW_INFO_TOAST: `${entity} Show Info Toast`,
  SHOW_WARNING_TOAST: `${entity} Show Warning Toast`,
  SHOW_TOAST: `${entity} Show Default Toast`,
  SHOW_COMMENT_BAR: `${entity} Show Comment Bar`,
  HIDE_COMMENT_BAR: `${entity} Hide Comment Bar`,
  SET_ERROR: `${entity} Set Error`,
};

export const updateSubmitting = (
  value: boolean
): Action => ({
  type: Types.UPDATE_SUBMITTING,
  payload: value
});

export const setSubmitting = (): Action => ({
  type: Types.SET_SUBMITTING
});

export const resetSubmitting = (): Action => ({
  type: Types.RESET_SUBMITTING
});

export const showSuccessToast = (
  data: any
): Action => ({
  type: Types.SHOW_SUCCESS_TOAST,
  payload: data
})

export const showDangerToast = (
  data: any
): Action => ({
  type: Types.SHOW_DANGER_TOAST,
  payload: data
})

export const showToast = (
  data: any
): Action => ({
  type: Types.SHOW_TOAST,
  payload: data
})

export const showWarningToast = (
  data: any
): Action => ({
  type: Types.SHOW_WARNING_TOAST,
  payload: data
})

export const showInfoToast = (
  data: any
): Action => ({
  type: Types.SHOW_INFO_TOAST,
  payload: data
})

export const showCommentBar = (id: number): Action => ({
  type: Types.SHOW_COMMENT_BAR,
  payload: id
})

export const hideCommentBar = (): Action => ({
  type: Types.HIDE_COMMENT_BAR
})