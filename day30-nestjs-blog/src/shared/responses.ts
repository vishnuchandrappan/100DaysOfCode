import { SuccessResponse } from './interfaces/SuccessMessage.interface';
import { SuccessData } from './interfaces/SuccessData.interface';

export const SuccessMessage = (message: string): SuccessResponse => {
  return {
    status: 'OK',
    message,
  };
};

export const SuccessMessageWithData = (data: any): SuccessData => {
  return {
    status: 'OK',
    data,
  };
};
