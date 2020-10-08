export const transformErrors = (error: any): string[] => {

  if (Array.isArray(error)) {
    return error;
  }

  return [error as string];

}