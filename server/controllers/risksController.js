const RiskModel = require("../models/Risk");

exports.getAllRisk = async (req, res) => {
  const risk = await RiskModel.find();
  res.status(200).json({ risk });
};

exports.getRiskbyId = async (req, res) => {
  const { riskId } = req.params;
  const risk = await RiskModel.findById(riskId);
  res.status(200).json(risk);
};

exports.createRisk = async (req, res) => {
  const {
    riskName,
    riskCause,
    riskConsequence,
    riskImpact,
    riskOdd,
    riskTreatmentPlan,
  } = req.body;
  const risk = await RiskModel.create({
    riskName,
    riskCause,
    riskConsequence,
    riskImpact,
    riskOdd,
    riskTreatmentPlan,
  });
  res.status(201).json(risk);
};

exports.updateRisk = async (req, res) => {
  const { riskId } = req.params;
  const {
    riskName,
    riskCause,
    riskConsequence,
    riskImpact,
    riskOdd,
    riskTreatmentPlan,
  } = req.body;

  const risk = await RiskModel.findByIdAndUpdate(
    riskId,
    {
      riskName,
      riskCause,
      riskConsequence,
      riskImpact,
      riskOdd,
      riskTreatmentPlan,
    },
    { new: true }
  );
  res.status(200).json(risk);
};

exports.deleteRisk = async (req, res) => {
  const { riskId } = req.params;
  await RiskModel.findByIdAndRemove(riskId);

  res.status(200).json({
    message: "Risk deleted succesfully",
  });
};
