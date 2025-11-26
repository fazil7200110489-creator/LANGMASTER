import express from "express";
import SqlTopic from "../models/SqlTopic.js";

const router = express.Router();

// POST multiple SQL topics at once
export const addSqlTopicsBulk = async (req, res) => {
  const topics = req.body; // Expecting an array of objects [{title, description}, ...]

  if (!Array.isArray(topics) || topics.length === 0) {
    return res.status(400).json({ message: "Array of topics required" });
  }

  try {
    const insertedTopics = await SqlTopic.insertMany(topics);
    res.status(201).json(insertedTopics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET all SQL topics
export const getSqlTopics = async (req, res) => {
  try {
    const topics = await SqlTopic.find().sort({ createdAt: 1 }); // Sorted by creation time
    res.status(200).json(topics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Failed to fetch SQL topics" });
  }
};

export default router;
