import { Schema, model, models } from "mongoose";

const UserSchemaa = newSchema({
  email: {
    type: String,
    unique: [true, "Email aldready exist"],
    required: [true, "Email is required"],
  },
});
