const MonthPeriodModel = require("../models/MonthPeriod");

exports.getAllMonthPeriod = async (req, res) => {
  const monthperiod = await MonthPeriodModel.find();
  res.status(200).json({ monthperiod });
};

exports.getMonthPeriodbyId = async (req, res) => {
  const { monthperiodId } = req.params;
  const monthperiod = await MonthPeriodModel.findById(monthperiodId);
  res.status(200).json(monthperiod);
};

exports.createMonthPeriod = async (req, res) => {
  const { nameofPeriod } = req.body;
  const monthperiod = await MonthPeriodModel.create({
    nameofPeriod,
  });
  res.status(201).json(monthperiod);
};

exports.updateMonthPeriod = async (req, res) => {
  const { monthperiodId } = req.params;
  const { nameofPeriod } = req.body;

  const monthperiod = await MonthPeriodModel.findByIdAndUpdate(
    monthperiodId,
    {
      nameofPeriod,
    },
    { new: true }
  );
  res.status(200).json(monthperiod);
};

exports.deleteMonthPeriod = async (req, res) => {
  const { monthperiodId } = req.params;
  await MonthPeriodModel.findByIdAndRemove(monthperiodId);

  res.status(200).json({
    message: "Month Period deleted succesfully",
  });
};
