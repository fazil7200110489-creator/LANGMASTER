import TailwindTopics from "../models/TailwindTopics.js";

// Insert multiple Tailwind topics
export const addTailwindTopics = async (req, res) => {
  try {
    const data = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({ msg: "Data must be an array" });
    }

    const saved = await TailwindTopics.insertMany(data);
    res.status(200).json({ msg: "Tailwind topics inserted", saved });
  } catch (error) {
    console.log("Error inserting Tailwind topics:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

// Get Tailwind topics
export const getTailwindTopics = async (req, res) => {
  try {
    const topics = await TailwindTopics.find();
    res.status(200).json(topics);
  } catch (error) {
    console.log("Error fetching Tailwind topics:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};
