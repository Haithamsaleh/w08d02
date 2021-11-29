const express = require("express")
const dotenv =require("dotenv")
const cors = require("cors")
const db = require("./db/index")





const app = express()
dotenv.config()
app.use(express.json());
app.use(cors());





const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`server on port ${PORT}`);
})