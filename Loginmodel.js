import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    mail: {
      type: String,
      required: true,
      unique: true,   // email should not duplicate
      lowercase: true
    },
    number: {
      type: String,
      required: true,
      minlength: 10
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
