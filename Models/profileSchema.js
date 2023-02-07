const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: true, required: true},
  serverID: { type: String, require: true },
  coins: { type: Number, default: 0 },
  bank: { type: Number },
  inventory: [{_id: String, count: Number }],
  licenses:  [{_id: String, count: Number }],
  bac: { type: Number, default: 0.00 }
});

const model = mongoose.model("ProfileModels", profileSchema);

module.exports = model;