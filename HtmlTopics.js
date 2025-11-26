import mongoose from "mongoose";

const HtmlTopicSchema = new mongoose.Schema({
  index: { type: Number },
  title: { type: String, required: true },
  description: { type: String, required: true },
  code: { type: String, required: false }
   
});

export default mongoose.model("HtmlTopic", HtmlTopicSchema);
