import ReduxTopics from "../models/ReduxTopics.js";

// Insert multiple Redux topics
export const insertReduxTopics = async (req, res) => {
  try {
    const data = req.body;

    if (!Array.isArray(data) || data.length === 0) {
      return res.status(400).json({ msg: "Please send an array of topics" });
    }

    await ReduxTopics.insertMany(data);

    res.status(200).json({ msg: "Redux topics inserted successfully!" });
  } catch (error) {
    console.error("Insert Redux Error:", error);
    res.status(500).json({ msg: "Failed to insert topics" });
  }
};

// Get all Redux topics
export const getReduxTopics = async (req, res) => {
  try {
    const topics = await ReduxTopics.find();
    res.status(200).json(topics);
  } catch (error) {
    console.error("Fetch Redux Error:", error);
    res.status(500).json({ msg: "Failed to fetch topics" });
  }
};
