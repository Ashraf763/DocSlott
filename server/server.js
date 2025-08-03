const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const doctorRoutes = require("./routes/doctorRoutes");
app.use("/doctor", doctorRoutes);

app.listen(5000, () => {
  console.log("Server running on port: 5000");
});
