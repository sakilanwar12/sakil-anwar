
import { IUser } from "./user.interface";
import User from "./user.model";

export async function createUser(data: IUser) {
  const newUser = await User.create(data);
  return newUser;
}