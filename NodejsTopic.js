import mongoose from "mongoose";

const NodeTopicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});

export default mongoose.model("NodeTopic", NodeTopicSchema);
