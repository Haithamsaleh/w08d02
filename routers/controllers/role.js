const roleModel = require("./../../db/models/role");

const creatRole = (req, res) => {
  const newRole = new roleModel(req.body);
  newRole
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const Roles = (req, res) => {
  roleModel
    .find({ email })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
module.exports = { creatRole, Roles };
