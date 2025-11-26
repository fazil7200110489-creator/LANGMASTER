import HtmlTopic from "../models/HtmlTopics.js";

// Save new HTML topic
export const addHtmlTopic = async (req, res) => {
  try {
    const {index,title,description,code} = req.body;

    

    const newTopic = await HtmlTopic.create({ title,description,code,index});

    res.status(201).json({
      msg: "HTML Topic added successfully",
      topic: newTopic
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Get all HTML topics
export const getHtmlTopics = async (req, res) => {
  try {
    const topics = await HtmlTopic.find();
    res.status(200).json(topics);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Failed to fetch topics" });
  }
};
