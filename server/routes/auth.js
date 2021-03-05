const express = require("express");
const router = express.Router();

const {
  loginProcess,
  sessionProcess,
  logoutProcess,
  signupProcess,
} = require("../controllers/auth");

router.post("/login", loginProcess);

router.post("/signup", signupProcess);

router.get("/logout", logoutProcess);

//Ruta para verficar que se mantiene una session
router.get("/session", sessionProcess);

module.exports = router;
