const { Schema, model } = require("mongoose");
const projectSchema = new Schema(
  {
    projectCode: {
      type: String,
      unique: true,
      required: true,
    },
    strategyObjective: { type: String, trim: true, required: true },
    responsibleArea: { type: String, trim: true, required: true },
    projectName: { type: String, trim: true, required: true },
    projectLeader: { type: String, trim: true, required: true },
    projectTeam: [
      {
        type: String,
        required: true,
      },
    ],
    monthUpdate: { type: String, trim: true, required: true },
    url: {
      type: String,
      required: true,
    },
    totalBudget: {
      type: Number,
      min: 0,
      required: true,
      default: 0,
    },
    anualBudget: {
      type: Number,
      min: 0,
      required: true,
      default: 0,
    },
    CPI: { type: Number, required: true, min: 0, default: 0 },
    SPI: { type: Number, required: true, min: 0, default: 0 },
    projectMonthUpdates: [String],
    projectMilestones: [String],
    projectViewers: [String],
    projectViewChangers: [String],
    projectScope: { type: String, trim: true, required: true },
    projectPlanSchedule: {
      type: Number,
      min: 0,
      required: true,
      default: 0,
    },
    projectRealSchedule: {
      type: Number,
      min: 0,
      required: true,
      default: 0,
    },
    projectPhase: { type: String, trim: true, required: true,},
  },
  {
    timestamps: true,
  }
);

module.exports = model("Project", projectSchema);
