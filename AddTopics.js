import mongoose from "mongoose";

const TopicSchema = new mongoose.Schema({
  name: String,
  contents: [String]   // array type to store multiple lines
});

export default mongoose.model("Topics", TopicSchema);
