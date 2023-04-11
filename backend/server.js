const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const colors = require("colors");
const connectDB = require("./config/db");

// DB Connection
connectDB();

// Initializing the express app
const app = express();

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/goals", require("./routes/goalRoutes"));

// Error Handler
app.use(errorHandler);

// Server listening
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
