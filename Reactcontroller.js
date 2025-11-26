import ReactTopic from "../models/ReactTopics.js";

// ADD REACT TOPICS (Single or Bulk)
export const addReactTopics = async (req, res) => {
  try {
    let { topics, title, content } = req.body;

    // CASE 1: Bulk insert (topics array)
    if (topics && Array.isArray(topics)) {
      const saved = await ReactTopic.insertMany(topics);
      return res.status(201).json({
        msg: "React topics added successfully (bulk insert)",
        topics: saved
      });
    } } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};export const getReactTopics = async (req, res) => {
  try {
    const topics = await ReactTopic.find();
    res.status(200).json(topics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Failed to fetch topics" });
  }
};