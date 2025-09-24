import { Schema, model, models } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema);

export default User;
