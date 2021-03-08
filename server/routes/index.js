const express = require("express");
const router = express.Router();
const { isAuth, catchErrors } = require("../middlewares");
const {
  getAllProjects,
  getProjectbyId,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const {
  getAllRisk,
  getRiskbyId,
  createRisk,
  updateRisk,
  deleteRisk,
} = require("../controllers/risksController");
const {
  getAllMonthPeriod,
  getMonthPeriodbyId,
  createMonthPeriod,
  updateMonthPeriod,
  deleteMonthPeriod,
} = require("../controllers/monthperiodController");

const {
  getAllUser,
  getUserbyId,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

/* GET home page */
router.get("/", (req, res, next) => {
  res.send("ProjectPortfolio APP - Server");
});

//=================Routes related to Project===================
// // Use middleware isAuth
// // router.post("/project/create", isAuth, catchErrors(createProject));

// router.get("/project/list", isAuth, catchErrors(list));
// router.post("/project/create", catchErrors(create));
// router.delete("/:projectId", catchErrors(remove));
// // router.get("/photo/:torneovideogameId", photo);
// // router.get("/:torneovideogameId", read);

//=================Routes related to Project===================

router.get("/project", catchErrors(getAllProjects));
router.get("/project/:projectId", catchErrors(getProjectbyId));
router.post("/project/create", catchErrors(createProject));
router.patch("/project/:projectId", catchErrors(updateProject));
router.delete("/project/:projectId", catchErrors(deleteProject));

//==> Pending to enable it when problems will resolved
// router.get("/project", catchErrors(getAllProjects));
// router.get("/project/:projectId", isAuth, catchErrors(getProjectbyId));
// router.post("/project/create", isAuth, catchErrors(createProject));
// router.patch("/project/:projectId", isAuth, catchErrors(updateProject));
// router.delete("/project/:projectId", isAuth, catchErrors(deleteProject));

//=================Routes related to Risk===================

router.get("/risk/all", getAllRisk);
router.get("/risk/:riskId", getRiskbyId);
router.post("/risk/create", createRisk);
router.patch("/risk/:riskId", updateRisk);
router.delete("/risk/:riskId", deleteRisk);

//=================Routes related to Risk===================

router.get("/monthperiod", getAllMonthPeriod);
router.get("/monthperiod/:monthperiodId", getMonthPeriodbyId);
router.post("/monthperiod/create", createMonthPeriod);
router.patch("/monthperiod/:monthperiodId", updateMonthPeriod);
router.delete("/monthperiod/:monthperiodId", deleteMonthPeriod);

//=================Routes related to User===================

router.get("/user", getAllUser);
router.get("/user/:userId", getUserbyId);
router.patch("/user/:userId", updateUser);
router.delete("/user/:userId", deleteUser);

module.exports = router;
