import Topics from "../models/AddTopics.js"; // correct path

export const addcontent = async (req, res) => {
  try {
    const { name } = req.params; // HTML
    const { content } = req.body; // extra text

    const updated = await Topics.findOneAndUpdate(
  { name: name.toLowerCase() },
  { $push: { contents: content }},
  { new: true }
);

    

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
};
