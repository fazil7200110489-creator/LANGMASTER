import mongoose from "mongoose";

const JavascriptSchema = new mongoose.Schema({
  
  title: { type: String, required: true },
  content: { type: String, required: true }
  
   
});

export default mongoose.model("JavascriptTopic", JavascriptSchema);
