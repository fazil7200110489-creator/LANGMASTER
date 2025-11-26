import mongoose from "mongoose";

const SqlTopicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {   // dynamic content
    type: String,
    required: true,
  },
}, { timestamps: true });

const SqlTopic = mongoose.model("SqlTopic", SqlTopicSchema);
export default SqlTopic;
