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
    projectPlanSchedule,
    projectRealSchedule,
    projectScope,
    projectPhase,
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
    projectPlanSchedule,
    projectRealSchedule,
    projectScope,
    projectPhase,
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
    projectPlanSchedule,
    projectRealSchedule,
    projectScope,
    projectPhase,
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
      projectPlanSchedule,
      projectRealSchedule,
      projectScope,
      projectPhase,
    },
    { new: true }
  );
  res.status(200).json(project);
};

//Borrar un Proyecto
exports.deleteProject = async (req, res) => {
  const { projectId } = req.params;
  await ProjectModel.findByIdAndRemove(projectId);

  res.status(200).json({
    message: "Project deleted succesfully",
  });
};

//Cambiar Imagen de proyecto
exports.changeProjectImg = async (_req, res) => {
  const { projectImg } = req.body;

  const project = await ProjectModel.findByIdAndUpdate(
    req.project._id,
    { $set: { projectImg } },
    { new: true }
  );
  //const {_doc: {password, ...rest}} = user
  res.status(200).json(project);
};
