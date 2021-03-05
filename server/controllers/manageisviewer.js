const Project = require("../models/Project");
const User = require("../models/User");

//Asignar rol de viewer
//Actualizar roles para visualización / Modificaciòn
exports.chageIsViewer = async (req, res) => {
  const { _id } = req.user;
  //1. Encontrar al usuario que coincida con el ID de la sesion
  const user = await User.findOne({ _id });
  //2. Crear la instancia del model Roles
  const manageisviewer = await manageisviewer.create();
  //3. Asociar el rol y el proyecto al usuario
  user.isViewer = true;
  //4. Cambiar la propiedad de isViewer / isViewChanger a true
  user.manageisviewer = manageisviewer._id;
  //5. Guarduar los cambios en el user
  await user.save();
};
