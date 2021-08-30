var express = require('express')
var Constants = require('../../Conts')
var router = express.Router()
var Db = require('../../Database')
var bcrypt = require('bcryptjs')
const Conts = require('../../Conts')
//Add
router.post(Constants.Routes.AddSubAdmin.Route, async function (req, res) {
    try{
        const username = req.body.username;
        const password = req.body.password;
        //Add the record and end the response
        let Data = await Db.query("INSERT INTO users (username, password, role) VALUES ($1, $2, $3);",[username,await bcrypt.hash(password,Conts.SaltRounds),"SubAdmin"])
        if(Data.rowCount === 1)
            Constants.ressend({Message:"Message",Data:{},StatusCode:200,res:res,Status:"Sucess"})
    }
    catch(e){
        console.log(e);
        if(e.constraint == "users_username_key")
            Constants.ressend({Message:"A user is already present with this username",Data:{},StatusCode:500,res:res,Status:"Error"})
        else
            Constants.ressend({Message:"Internal Error",Data:{},StatusCode:500,res:res,Status:"Error"})
    }
})

//Delete
router.post(Constants.Routes.DeleteSubAdmin.Route, async function (req, res) {
    const username = req.body.username;
    //Delete the record and end the response
    let Data = await Db.query("Delete FROM users WHERE username = $1 And role = 'SubAdmin'",[username])
    if(Data.rowCount === 1)
        Constants.ressend({Message:"Sucessfully Deleted",Data:req.decoded,StatusCode:200,res:res,Status:"Sucess"});
    else
        Constants.ressend({Message:"User Not Found",Data:req.decoded,StatusCode:500,res:res,Status:"Error"});
})

//Update
router.post(Constants.Routes.UpdateSubAdmin.Route, async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    //Update subadmin
    let Data = await Db.query("Update users SET password = $1 WHERE username = $2 And role = 'SubAdmin' ",[await bcrypt.hash(password,Conts.SaltRounds),username])
    if(Data.rowCount === 1)
        Constants.ressend({Message:"Sucessfully Updated",Data:req.decoded,StatusCode:200,res:res,Status:"Sucess"});
    else
        Constants.ressend({Message:"User Not Found",Data:req.decoded,StatusCode:500,res:res,Status:"Error"});
})

//Get All Elements
router.post(Constants.Routes.GetAllSubAdmins.Route, async function (req, res) {
    let Data = await Db.query("SELECT * FROM users WHERE role = 'SubAdmin'",[])
    //Add the record and end the response
    Constants.ressend({Message:"Got All Sub Admins",Data:Data.rows,StatusCode:200,res:res,Status:"Sucess"});
})

//Generate admin report

module.exports = router