import { User } from "./interface";

export const getUserWithId = (user: User) => {
  let obj: any = {}
  let Id: number = Date.now();
  obj[Id] = { id: Id, ...user };
  return obj;
}