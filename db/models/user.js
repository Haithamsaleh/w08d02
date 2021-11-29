const mongoose = require("mongoose");
const user = new mongoose.Schema({
  emale: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Role" },
});

mongoose.exports = mongoose.model("User", user);
