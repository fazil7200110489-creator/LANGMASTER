import mongoose from "mongoose";

const TailwindSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  content: { type: String, required: true }
});

export default mongoose.model("TailwindTopics", TailwindSchema);
