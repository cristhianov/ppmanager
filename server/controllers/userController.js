const UserModel = require("../models/User");

exports.getAllUser = async (req, res) => {
  const user = await UserModel.find();
  res.status(200).json({ user });
};

exports.getUserbyId = async (req, res) => {
  const { userId } = req.params;
  const user = await UserModel.findById(userId);
  res.status(200).json(user);
};

exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  const {
    username,
    avatar,
    projectsasgned,
    isViewer,
    isViewChanger,
    isAdmin,
  } = req.body;

  const user = await UserModel.findByIdAndUpdate(
    userId,
    {
      username,
      avatar,
      projectsasgned,
      isViewer,
      isViewChanger,
      isAdmin,
    },
    { new: true }
  );
  res.status(200).json(user);
};

exports.deleteUser = async (req, res) => {
  const { userId } = req.params;
  await UserModel.findByIdAndRemove(userId);

  res.status(200).json({
    message: "User deleted succesfully",
  });
};
