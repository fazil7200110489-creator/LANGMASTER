import NodeTopic from "../models/NodejsTopic.js";

// ADD NODE TOPICS (bulk only)
export const addNodeTopics = async (req, res) => {
  try {
    const { topics } = req.body;

    if (!topics || !Array.isArray(topics)) {
      return res.status(400).json({
        msg: "Invalid data. 'topics' must be an array."
      });
    }

    const savedTopics = await NodeTopic.insertMany(topics);

    res.status(201).json({
      msg: "Node.js topics added successfully (bulk insert)",
      topics: savedTopics
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// GET NODE TOPICS
export const getNodeTopics = async (req, res) => {
  try {
    const topics = await NodeTopic.find();
    res.status(200).json(topics);

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Failed to fetch Node.js topics" });
  }
};
