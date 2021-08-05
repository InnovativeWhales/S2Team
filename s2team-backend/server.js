// index.js
const express = require('express');
const Auth = require('./middleware/Auth');
const Db = require('./Database')
const Constants = require('./Conts');
const app = express();
const jwt = require("jsonwebtoken")
const Genric = require("./Modules/Generic");
const Admin = require("./Modules/Admin")
var cors = require('cors');
const { ressend } = require('./Conts');

app.use(express.json());
app.use(cors())
app.use(Auth);

app.post('/Login', async (req, res) => {
    const Username = req.body.Username;
    const Password = req.body.Password;
    //Verify Username and Password And Return jwt
    //JWt Should have the role
    let account = await Genric.IsUserPresent(Username)
    console.log(account)
    if(Genric.verifyPassword(account,Password)){
        var token = jwt.sign({ Role: account.role }, Constants.Key);
        Constants.ressend({Message:"Login Sucessfull",Data:{jwt:token,Role:account.role},StatusCode:200,res:res,Status:"Sucess"});
    }
    else{
        Constants.ressend({Message:"Invalid user name or password",Data:{},StatusCode:200,res:res,Status:"Error"});
    }
});

app.use('/Admin',Admin)

const db = Constants.Database;

    Db.connect({user:db.Username,host:db.Host,database:db.Database,password:db.Password,port:db.Port})
    .then(async ()=>{
        console.log("Database connected");
        console.log(await Genric.setupDatabase());
    })
    .catch((e)=>{
        console.log(e);
    })
app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));