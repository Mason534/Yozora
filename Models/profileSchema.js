const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: true, required: true},
  serverID: { type: String, require: true },
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 0 },
  coins: { type: Number, default: 0 },
  bank: { type: Number, default: 0 },
  lotterySesh: { type: Number, default: 1 },
  inventory: [{_id: String, count: Number }],
  licenses:  [{_id: String, count: Number }],
  isCuffed: { type: Boolean, default: false },
  bac: { type: Number, default: 0.00 }
});

const model = mongoose.model("ProfileModels", profileSchema);

module.exports = model;

