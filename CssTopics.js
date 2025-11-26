import mongoose from "mongoose";

const CssTopicSchema = new mongoose.Schema({
  id: { type: Number },
  title: { type: String, required: true },
  description: { type: String, required: true },
  
   
});

export default mongoose.model("CssTopic", CssTopicSchema);
