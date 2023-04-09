const asyncHandler = require("express-async-handler");

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "Get goals" });
});

// @desc    Set goals
// @route   POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  // console.log(req.body);
  if (!req.body.text) {
    // res.status(400).json({ msg: "Please add a text field" });
    res.status(400);
    throw new Error("Please add a text field");
  } else {
    res.status(200).json({ msg: "Set goal" });
  }
});

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `Update goal ${req.params.id}` });
});

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
