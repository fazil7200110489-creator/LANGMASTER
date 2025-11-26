import mongoose from "mongoose";

const DsaSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
});

export default mongoose.model("DsaTopics", DsaSchema);
