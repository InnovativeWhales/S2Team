/*
    Author: Rohit Dasamantharo
    usage Needs Routes with Route and Permission and /permission/Route Should match the Complete route
*/
const jwt = require('jsonwebtoken')
const constants = require('../Conts/');

//Get All the Routes from the constant
const keys = Object.keys(constants.Routes);
let Routepermissions = {};

//Map them with / permission and Route
keys.map((value)=>{ Routepermissions["/"+constants.Routes[value].Permission+constants.Routes[value].Route] = constants.Routes[value].Permission})

//Auth verification Takes Barrer and verifys it adn returns the decoded and checks for valid permession
VerifyAuth = function (req, res, next) {
    if(Routepermissions[req.url] != "None" && Routepermissions[req.url] != undefined)
    {
      const bearerHeader = req.headers['authorization'];

      if (bearerHeader)
      {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        try
        {
          const decoded = jwt.verify(bearerToken, constants.Key);
            if(Routepermissions[req.url] == decoded.Role)
            {
              req.decoded = decoded;
              next();
            }
          else
            res.sendStatus(403);
        }
        catch (err)
        {
            return res.status(401).send("Invalid Token");
        }
      }
      else
      {
        // Forbidden
        res.sendStatus(403);
      }
    }
    else
      next();
  }

module.exports = VerifyAuth;