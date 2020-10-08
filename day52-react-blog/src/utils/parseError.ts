export const parseError = (error: any) => {

  if (error.response) {

    if (Object.prototype.hasOwnProperty.call(error.response.data, 'error')) {
      return error.response.data.error;
    }

    if (Object.prototype.hasOwnProperty.call(error.response.data, 'message')) {
      return error.response.data.message;
    }

    return error.response.data;
  }

  if (Object.prototype.hasOwnProperty.call(error, 'request')) {
    return "Request cannot be sent, try again later";
  }


  return "Something went wrong. Please try again later";
}