const userModel = require("./../../db/models/user");
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.secretkey;
const register = async (req, res) => {
  const { email, password, role } = req.body;
  const SALT = Number(process.env.SALT);
  const savedEmail = email.toLowerCase();
  const hashedPassword = await bcrypt.hash(password, SALT);
  const newUser = new userModel({
    email: savedEmail,
    password: hashedPassword,
    role,
  });
  newUser
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const login = (req, res) => {
  const { email, password } = req.body;
  userModel
    .findOne({ email: savedEmail })
    .then(async (result) => {
      // console.log(result);
      if (result) {
        if (result.email == email) {
          const hashedpassword = await bcrypt.compare(
            password,
            result.password
          );
          if (hashedpassword) {
            const payload = {
              role,
            };
            const options = {
              expiresIn: "60m",
            };
            const token = await Jwt.sign(payload, secretkey, options);

            res.status(200).json(result);
          } else {
            res.status(400).json("invalid email or passwoer");
          }
        } else {
          res.status(400).json("invalid email or passwoer");
        }
      } else {
        res.status(404).json("email dot fuond");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
module.exports = { register, login };
