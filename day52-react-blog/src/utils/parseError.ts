export const parseError = (error: any) => {
  if (error.response) {
    if (Object.prototype.hasOwnProperty.call(error.response.data, 'error')) {
      return error.response.data.error;
    }
    return error.response.data;
  }
  return error;
}