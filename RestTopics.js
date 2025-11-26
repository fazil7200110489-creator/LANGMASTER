import mongoose from "mongoose";

const restapiSchema = new mongoose.Schema({
  topic: String,
  content: String,
});

export default mongoose.model("RestApiTopics", restapiSchema);
