const entity = "[UI]";

export const Types = {
  SET_LOADING: `${entity} Set Loading`,
  RESET_LOADING: `${entity} Reset Loading`,
  UPDATE_LOADING: `${entity} Update Loading`,
  SET_SUBMITTING: `${entity} Set Submitting`,
  RESET_SUBMITTING: `${entity} Reset Submitting`,
  UPDATE_SUBMITTING: `${entity} Update Submitting`,
};

export const setLoading = () => ({
  type: Types.SET_LOADING,
});

export const resetLoading = () => ({
  type: Types.RESET_LOADING,
});

export const updateLoading = (value) => ({
  type: Types.UPDATE_LOADING,
  payload: value,
});

export const setSubmitting = () => ({
  type: Types.SET_SUBMITTING,
});

export const resetSubmitting = () => ({
  type: Types.RESET_SUBMITTING,
});

export const updateSubmitting = (value) => ({
  type: Types.UPDATE_SUBMITTING,
  payload: value,
});
