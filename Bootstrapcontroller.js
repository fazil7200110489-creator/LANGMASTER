import BootstrapTopics from "../models/BootstrapTopics.js";

// Insert multiple topics
export const addBootstrapTopics = async (req, res) => {
  try {
    const data = req.body; // expect array of objects

    if (!Array.isArray(data)) {
      return res.status(400).json({ msg: "Data must be an array" });
    }

    await BootstrapTopics.insertMany(data);

    res.status(200).json({ msg: "Bootstrap topics added successfully" });
  } catch (error) {
    console.error("Insert Error:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

// Fetch all topics
export const getBootstrapTopics = async (req, res) => {
  try {
    const topics = await BootstrapTopics.find();
    res.status(200).json(topics);
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
