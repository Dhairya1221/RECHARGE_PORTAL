const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
require('dotenv').config({ path: '/home/dhairya/DHAIRYA/AYANOKOJI/ayanokoji_server/test.env' });
require('dotenv').config();
var bcrypt = require('bcryptjs');

const UserSchema  = new mongoose.Schema({
  name :{
      type  : String,
      
  } ,
  email :{
    type  : String,
    
} ,
password :{
    type  : String,
    
} ,
phone:{
    type  : String,
    
} ,
date :{
    type : Date,
    default : Date.now
},

tokens: [
    {
        token:{
            type:String,
            required:true
        }
    }
]

});

UserSchema.pre('save',function(next){
    var salt = bcrypt.genSaltSync(10);
    if(this.password && this.isModified('password'))
    {
        this.password = bcrypt.hashSync(this.password, salt);
    }
    
    //console.log(this.password)
    next();
});



UserSchema.methods.generateAuthToken = async function()
{
    try{
       // console.log(process.env.SECRET_KEY)
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }
    catch(err){
        console.log(err)
    }
}

const User= mongoose.model('User',UserSchema);

module.exports = User;
