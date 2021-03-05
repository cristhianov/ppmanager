exports.catchErrors = (controller) => (req, res, next) =>
  controller(req, res).catch(next);

exports.isAuth = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized action" });
  }
  next();
};

exports.checkAsginedProjects = (req, res, next) => {
  if (req.user.projectsasgned === null) {
    return res
      .status(401)
      .json({ message: "You must asign a Project to the User" });
  }
};
