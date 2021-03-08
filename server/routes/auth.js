const express = require("express");
const router = express.Router();

const {
  loginProcess,
  logoutProcess,
  signupProcess,
  checkSession,
} = require("../controllers/auth");

const { changeProjectImg } = require("../controllers/projectController");

const { isAuth } = require("../middlewares");

router.post("/login", loginProcess);

router.post("/signup", signupProcess);

router.get("/logout", logoutProcess);

//Ruta para verficar que se mantiene una session
router.get("/session", checkSession);

router.post("/projectimg/change", changeProjectImg);

module.exports = router;
