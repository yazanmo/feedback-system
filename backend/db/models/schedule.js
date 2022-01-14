const mongoose = require("mongoose");

const schedule = new mongoose.Schema({
  userName: { type: String, required: true },
  adress: { type: String, required: true },
  description: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  iq: { type: String, required: true },
  status: { type: String, required: true },
  userId: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Schedule", schedule);
