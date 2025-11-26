import mongoose from "mongoose";

const MongoTopicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("MongoTopic", MongoTopicSchema);
