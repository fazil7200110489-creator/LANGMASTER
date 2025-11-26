import TypeScriptTopic from "../models/TypescriptTopics.js";

// ADD TYPESCRIPT TOPICS (BULK ONLY)
export const addTypeScriptTopics = async (req, res) => {
  try {
    const { topics } = req.body;

    if (!topics || !Array.isArray(topics)) {
      return res.status(400).json({
        msg: "Invalid data. 'topics' must be an array.",
      });
    }

    const savedTopics = await TypeScriptTopic.insertMany(topics);

    res.status(201).json({
      msg: "TypeScript topics added successfully (bulk insert)",
      topics: savedTopics,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

// GET TYPESCRIPT TOPICS
export const getTypeScriptTopics = async (req, res) => {
  try {
    const topics = await TypeScriptTopic.find();
    res.status(200).json(topics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Failed to fetch TypeScript topics" });
  }
};
