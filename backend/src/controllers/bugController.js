import Bug from "../models/bug.js";

// Create new bug
export const createBug = async (req, res, next) => {
  try {
    const bug = await Bug.create(req.body);
    res.status(201).json(bug);
  } catch (error) {
    next(error);
  }
};

// Get all bugs
export const getBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch (error) {
    next(error);
  }
};

// Update bug
export const updateBug = async (req, res, next) => {
  try {
    const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(bug);
  } catch (error) {
    next(error);
  }
};

// Delete bug
export const deleteBug = async (req, res, next) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Bug deleted successfully" });
  } catch (error) {
    next(error);
  }
};
