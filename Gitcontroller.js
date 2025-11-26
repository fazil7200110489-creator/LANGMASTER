import Git from "../models/GitTopic.js";

export const insertGitTopics = async (req, res) => {
  try {
    const topics = req.body;

    const saved = await Git.insertMany(topics);
    res.status(200).json({ msg: "Git Topics Inserted", data: saved });
  } catch (error) {
    res.status(500).json({ error: "Insert Error", details: error });
  }
};

export const getGitTopics = async (req, res) => {
  try {
    const data = await Git.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Fetch Error" });
  }
};
