import PythonTopic from "../models/PythonTopics.js";

export const addPythonTopics = async (req, res) => {
  try {
    const data = await PythonTopic.insertMany(req.body);
    res.status(201).json({ message: "Python topics added", data });
  } catch (error) {
    res.status(500).json({ message: "Error adding topics", error });
  }
};

export const getPythonTopics = async (req, res) => {
  try {
    const topics = await PythonTopic.find();
    res.status(200).json(topics);
  } catch (error) {
    res.status(500).json({ message: "Error fetching topics", error });
  }
};
