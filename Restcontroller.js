import RestApiTopics from "../models/RestTopics.js";

// Insert Multiple REST API Topics
export const addRestApiTopics = async (req, res) => {
  try {
    const topics = req.body;   // Expecting array of topics
    const data = await RestApiTopics.insertMany(topics);

    res.status(200).json({
      message: "REST API topics inserted successfully",
      data,
    });
  } catch (error) {
    console.error("Insert Error:", error);
    res.status(500).json({ message: "Failed to insert topics", error });
  }
};

// Get All REST API Topics
export const getRestApiTopics = async (req, res) => {
  try {
    const topics = await RestApiTopics.find();
    res.status(200).json(topics);
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ message: "Failed to fetch topics", error });
  }
};
