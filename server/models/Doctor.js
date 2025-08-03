const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  image: String,
  status: String,
  details: String,
  qualifiction: String,
  experience: String,
  fee: String,
  clinic: String,
  schedule: [
    {
      date: String,
      times: [String],
    },
  ],
});

module.exports = mongoose.model("Doctor", doctorSchema, "Doctor");
