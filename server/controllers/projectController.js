const ProjectModel = require("../models/Project");
const { catchErrors } = require("../middlewares");

exports.getAllProjects = async (req, res) => {
  const projects = await ProjectModel.find();
  res.status(200).json({ projects });
};

exports.getProjectbyId = async (req, res) => {
  const { projectId } = req.params;
  const project = await ProjectModel.findById(projectId);
  res.status(200).json(project);
};

exports.createProject = async (req, res) => {
  const {
    projectCode,
    strategyObjective,
    responsibleArea,
    projectName,
    projectLeader,
    projectTeam,
    monthUpdate,
    url,
    totalBudget,
    anualBudget,
    CPI,
    SPI,
    projectMonthUpdates,
    projectMilestones,
    projectViewers,
    projectViewChangers,
  } = req.body;
  const project = await ProjectModel.create({
    projectCode,
    strategyObjective,
    responsibleArea,
    projectName,
    projectLeader,
    projectTeam,
    monthUpdate,
    url,
    totalBudget,
    anualBudget,
    CPI,
    SPI,
    projectMonthUpdates,
    projectMilestones,
    projectViewers,
    projectViewChangers,
  });
  res.status(201).json(project);
};

exports.updateProject = async (req, res) => {
  const { projectId } = req.params;
  const {
    strategyObjective,
    responsibleArea,
    projectName,
    projectLeader,
    projectTeam,
    monthUpdate,
    url,
    totalBudget,
    anualBudget,
    CPI,
    SPI,
    projectMonthUpdates,
    projectMilestones,
    projectViewers,
    projectViewChangers,
  } = req.body;

  const project = await ProjectModel.findByIdAndUpdate(
    projectId,
    {
      strategyObjective,
      responsibleArea,
      projectName,
      projectLeader,
      projectTeam,
      monthUpdate,
      url,
      totalBudget,
      anualBudget,
      CPI,
      SPI,
      projectMonthUpdates,
      projectMilestones,
      projectViewers,
      projectViewChangers,
    },
    { new: true }
  );
  res.status(200).json(project);
};

exports.deleteProject = async (req, res) => {
  const { projectId } = req.params;
  await ProjectModel.findByIdAndRemove(projectId);

  res.status(200).json({
    message: "Project deleted succesfully",
  });
};
