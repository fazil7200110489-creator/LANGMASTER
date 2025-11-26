import DsaTopics from "../models/DsaTopics.js";

// Add multiple DSA topics
export const addDsaTopics = async (req, res) => {
  try {
    const data = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({ msg: "Data must be an array" });
    }

    const saved = await DsaTopics.insertMany(data);
    res.status(200).json({ msg: "DSA topics added successfully", saved });
  } catch (error) {
    res.status(500).json({ msg: "Error adding DSA topics", error });
  }
};

// Get all DSA topics
export const getDsaTopics = async (req, res) => {
  try {
    const topics = await DsaTopics.find();
    res.status(200).json(topics);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching DSA topics", error });
  }
};


