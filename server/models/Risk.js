const mongoose = require("mongoose");

const riskSchema = new mongoose.Schema(
  {
    riskName: {
      type: String,
      required: true,
      maxlength: 32,
      unique: true,
    },
    riskCause: {
      type: String,
      required: true,
      maxlength: 100,
      unique: true,
    },
    riskConsequence: {
      type: String,
      required: true,
      maxlength: 100,
      unique: true,
    },
    riskImpact: {
      type: Number,
      min: 0,
      required: true,
      default: 0,
    },
    riskOdd: {
      type: Number,
      min: 0,
      required: true,
      default: 0,
    },
    riskTreatmentPlan: {
      type: String,
      required: true,
      maxlength: 100,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Risk", riskSchema);
