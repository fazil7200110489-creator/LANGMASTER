import ExpressTopic from "../models/ExpressTopic.js";

// ADD EXPRESS TOPICS (BULK ONLY)
export const addExpressTopics = async (req, res) => {
  try {
    const { topics } = req.body;

    if (!topics || !Array.isArray(topics)) {
      return res.status(400).json({
        msg: "Invalid data. 'topics' must be an array."
      });
    }

    const savedTopics = await ExpressTopic.insertMany(topics);

    res.status(201).json({
      msg: "Express.js topics added successfully (bulk insert)",
      topics: savedTopics
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// GET EXPRESS TOPICS
export const getExpressTopics = async (req, res) => {
  try {
    const topics = await ExpressTopic.find();
    res.status(200).json(topics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Failed to fetch Express.js topics" });
  }
};
