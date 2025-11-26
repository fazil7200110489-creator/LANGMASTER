import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/Loginmodel.js"; // adjust path as needed

// Helper to create token
const createToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// @desc   Register new user
// @route  POST /api/auth/register
// @access Public
export const register = asyncHandler(async (req, res) => {
  const { name, mail, number, password } = req.body;

  // Basic validation (you may expand)
  if (!name || !mail || !number || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  // Check if user exists
  const existing = await User.findOne({ mail: mail.toLowerCase() });
  if (existing) {
    res.status(409); // Conflict
    throw new Error("Email already registered");
  }

  // Hash password
  const saltRounds = 10;
  const hashed = await bcrypt.hash(password, saltRounds);

  // Create user
  const user = await User.create({
    name,
    mail: mail.toLowerCase(),
    number,
    password: hashed,
  });

  if (!user) {
    res.status(500);
    throw new Error("Failed to create user");
  }

  // Return token + user (excluding password)
  const token = createToken(user._id);
  const { password: _p, ...userSafe } = user.toObject();

  res.status(201).json({ token, user: userSafe });
});

// @desc   Login user
// @route  POST /api/auth/login
// @access Public
export const login = asyncHandler(async (req, res) => {
  const { mail, password } = req.body;

  if (!mail || !password) {
    res.status(400);
    throw new Error("Email and password required");
  }

  const user = await User.findOne({ mail: mail.toLowerCase() });
  if (!user) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  const token = createToken(user._id);
  const { password: _p, ...userSafe } = user.toObject();

  res.json({ token, user: userSafe });
});
