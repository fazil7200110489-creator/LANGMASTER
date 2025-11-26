
import JavascriptTopics from "../models/JavascriptTopics.js";

// Save new HTML topic
export const addJavascriptTopics = async (req, res) => {
  try {
    const {title,content} = req.body;

    

    const newTopic = await JavascriptTopics.create({title,content});

    res.status(201).json({
      msg: "Javascript Topic added successfully",
      topic: newTopic
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Get all HTML topics
export const getJavascriptTopics = async (req, res) => {
  try {
    const topics = await JavascriptTopics.find();
    res.status(200).json(topics);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Failed to fetch topics" });
  }
};
