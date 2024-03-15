import { Schema, model, models } from "mongoose";

const UserSchemaa = newSchema({
  email: {
    type: String,
    unique: [true, "Email already exist"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    match: [],
  },
});
