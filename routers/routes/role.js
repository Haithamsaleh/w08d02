const express = require("express")
const {Roles, creatRole} = require("./../controllers/role")
const roleRouter = express.Router()

roleRouter.post("/createrole", creatRole)
roleRouter.get("/roles", Roles)

module.exports = roleRouter
