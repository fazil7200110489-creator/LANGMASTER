import CssTopics from "../models/CssTopics.js";

// Save new HTML topic
export const addCssTopics = async (req, res) => {
  try {
    const {id,title,description} = req.body;

    

    const newTopic = await CssTopics.create({id,title,description});

    res.status(201).json({
      msg: "CsS Topic added successfully",
      topic: newTopic
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Get all HTML topics
export const getCssTopics = async (req, res) => {
  try {
    const topics = await CssTopics.find();
    res.status(200).json(topics);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Failed to fetch topics" });
  }
};
