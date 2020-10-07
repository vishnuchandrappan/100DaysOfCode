import { Action } from "../_interfaces";

const entity = "[UI]";

export const Types = {
  SET_SUBMITTING: `${entity} Set Submitting`,
  RESET_SUBMITTING: `${entity} Reset Submitting`,
  UPDATE_SUBMITTING: `${entity} Update Submitting`,
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
