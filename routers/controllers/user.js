const userModel = require("./../../db/models/user")



const register = (req, res) => {
    const {email, password, role} = req.body;
    const newUser = new userModel({
        email: email,
        password: password,
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
                if(result.password == password){
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