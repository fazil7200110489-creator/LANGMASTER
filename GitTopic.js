import mongoose from "mongoose";

const GitSchema = new mongoose.Schema({
  topic: String,
  content: String
});

const Git = mongoose.model("Git", GitSchema);
export default Git;
