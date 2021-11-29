const userModel = require("./../../db/models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const SALT= Number(process.env.SALT)

const register = async (req, res) => {
    const {email, password, role} = req.body;
    const savedEmail = email.toLowerCase();
    const hashedPassword = await bcrypt.hash(password, SALT)
    const newUser = new userModel({
        email: savedemail,
        password: hashedpassword,
        role
    })
    newUser 
    .save()
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(400).json(err)
    })
}

const login = (req, res)=> {
    const{email, password} = req.body
    userModel
    .findOne({email})
    .then((result)=>{
        // console.log(result);
        if(result){
            if(result.email == email){
                if(hashedpassword){
                    res.status(200).json(result)
                }else{
                    res.status(400).json("invalid email or passwoer")
                }
            }else{
                res.status(400).json("invalid email or passwoer")

            }
        }else{
            res.status(404).json("email dot fuond")

        }
    })
    .catch((err)=>{
        res.status(400).json(err)
    })
}
module.exports= {register, login}