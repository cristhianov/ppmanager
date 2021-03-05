const mongoose = require("mongoose");

const monthperiodSchema = new mongoose.Schema(
  {
    nameofPeriod: {
      type: String,
      required: true,
      maxlength: 32,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MonthPeriod", monthperiodSchema);
