const User = require("../models/User");
const passport = require("passport");
const express = require("express");
const router = express.Router();
// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const clearRes = (data) => {
  //destructuramos el objeto "data" y retornamos un nuevo objeto unicamente con
  // los datos requerido para nuestro "desarrollador = dev"
  const { password, __v, createdAt, updatedAt, ...cleanedData } = data; // {key:"value"}
  return cleanedData;
};

//LoginProcess
exports.loginProcess = (req, res, next) => {
  passport.authenticate("local", (err, user, errDetails) => {
    if (err) return res.status(500).json({ message: errDetails });
    if (!user) return res.status(401).json({ message: "Unauthorized User" });

    req.login(user, (error) => {
      if (error) return res.status(500).json({ message: errDetails });
      const usr = clearRes(user.toObject());
      res.status(200).json(usr);
    });
  })(req, res, next);
};

//SignupProcess
exports.signupProcess = (req, res, next) => {
  const { email, password, username } = req.body;
  if (email === "" || password === "") {
    res.status(400).json({ message: "Indicate email and password" });
    return;
  }

  User.findOne({ email }, "email", (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: "The email already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      email,
      username,
      password: hashPass,
    });

    newUser
      .save()
      .then((newUser) => {
        const user = clearRes(newUser.toObject());
        res.status(200).json(user);
      })
      .catch((err) => {
        res.json({ message: "Something went wrong" });
      });
  });
};

//LogoutProcess
exports.logoutProcess = (req, res) => {
  req.logout();
  res.json({ message: "User Loggedout" });
};

//Cehck SessionProcces
exports.checkSession = (req, res) => {
  if (req.user) {
    const usr = clearRes(req.user.toObject());
    return res.status(200).json(usr);
  }
  res.status(200).json(null);
};


