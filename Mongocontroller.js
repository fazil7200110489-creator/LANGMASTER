import MongoTopic from "../models/MongoTopic.js";

// Add multiple MongoDB topics
export const addMongoTopics = async (req, res) => {
  try {
    const { topics } = req.body;
    if (!topics || !Array.isArray(topics)) {
      return res.status(400).json({ msg: "Invalid data. 'topics' must be an array." });
    }

    const savedTopics = await MongoTopic.insertMany(topics);
    res.status(201).json({ msg: "MongoDB topics added successfully", topics: savedTopics });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Get all MongoDB topics
export const getMongoTopics = async (req, res) => {
  try {
    const topics = await MongoTopic.find();
    res.status(200).json(topics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Failed to fetch MongoDB topics" });
  }
};
