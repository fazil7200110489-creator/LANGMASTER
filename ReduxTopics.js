import mongoose from "mongoose";

const ReduxSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
});

const ReduxTopics = mongoose.model("ReduxTopics", ReduxSchema);

export default ReduxTopics;
