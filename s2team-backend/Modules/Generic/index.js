const Db = require('../../Database');
const bcrypt = require('bcryptjs');
const Conts = require('../../Conts');
module.exports = {
    setupDatabase: async function(){
        return new Promise(async (res,rej)=>{
            try{
                const Data = await Db.query(`CREATE TABLE IF NOT EXISTS users(
                    ID  SERIAL PRIMARY KEY,
                    username VARCHAR(100) NOT NULL UNIQUE,
                    role VARCHAR(100) NOT NULL,
                    password VARCHAR(100) NOT NULL
                );`,[]);
                const Password = await bcrypt.hash("S2TeamAdmin", Conts.SaltRounds)
                await Db.query("INSERT INTO users (username, password, role) VALUES ($1, $2, $3);",["Admin",Password,"Admin"]);
                res("Setup done");
            }
            catch(e){
                res("setup not needed")
            }
        })
    },
    IsUserPresent: async function(Username){
        const result = await Db.query("SELECT * FROM users WHERE username = $1",[Username]);
        if(result.rowCount == 1)
        {
            return result.rows[0];
        }
        else
        {
            return null;
        }
    },
    verifyPassword: function(account,password){
        if(account !== null && bcrypt.compareSync(password, account.password))
            return true;
        else
            return false;
    }
}