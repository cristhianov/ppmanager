const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: String,
    avatar: {
      type: String,
      default:
        "https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png",
    },
    projectsasgned: {
      type: String,
      default: "",
    },
    isViewer: { type: Boolean, default: false },
    isViewChanger: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("User", userSchema);
