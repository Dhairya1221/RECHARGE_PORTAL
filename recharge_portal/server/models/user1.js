const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
require('dotenv').config({ path: '/home/dhairya/DHAIRYA/AYANOKOJI/ayanokoji_server/test.env' });
require('dotenv').config();
var bcrypt = require('bcryptjs');

const UserSchema1  = new mongoose.Schema({
  number :{
      type:String 
  },
  details:{
    type:String
  },
  cost:{
    type:String
  },
  sim:{
    type:String
  }
  
});


const User1= mongoose.model('User1',UserSchema1);

module.exports = User1;
