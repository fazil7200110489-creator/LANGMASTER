import mongoose from "mongoose";

const BootstrapSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
});

export default mongoose.model("BootstrapTopics", BootstrapSchema);
