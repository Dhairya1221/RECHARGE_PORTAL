const express = require('express');
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/user");
const User1 = require("../models/user1");
const Regards = require("../models/contactus");
var bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");
const twilio = require('twilio'); 
const accountSid = 'ACf66c071542fd881fd5edeccac32b8c32';
const authToken = 'fa086bd8e08b0587716b85eecf10c379'; 
const client = new twilio(accountSid, authToken);

router.post('/signup',async (req,res) => {    
    const {name,phone, email, password,cpassword} = req.body
    let token;
    //console.log(' Name ' + name+ ' email :' + email+ ' pass:' + password);
   //console.log(name);
    if(!name || !phone || !email || !password ) {
        return res.status(422).json({error:"fill properly"});
    }
    
    try
    {
        const userExist =await User.findOne({email:email});

        if(userExist)
        {
            return res.status(422).json({error:"already exist"});
        }
        else if(password !== cpassword)
        {
            return res.status(422).json({error:"password not matching"});  
        }
        else
        {
            const user = new User({name,phone,email,password});
            //console.log(user)
            token = await user.generateAuthToken();
            console.log(token)
            await user.save()
            res.status(201).json({error:"registered successfully"});
        }
    }
    catch(err)
    {
        console.log(err);
    }
});   

router.post('/login',async (req,res) => {   

    const {email, password ,phone} = req.body
   try {
     
       if(!email || !password || !phone)
        {
            return res.status(400).json({error:"please filled the data"}) 
        }

        const userLogin = await User.findOne({email:email});
        
        if(userLogin)
        {
            const ismatch = await bcrypt.compare(password,userLogin.password) 
            
            if(ismatch)
            {
                const token = await userLogin.generateAuthToken();
                console.log(token);
                res.cookie("jwtoken",token,{
                    expires:new Date(Date.now()+25892000000),
                    httpOnly:true
                });
               // console.log(token)
                
                return res.status(200).json({error : "user signin successfully"})
            }
            else
            {
                //console.log("no")
                return res.status(400).json({message : "INVALID"})
            }
        }

        else
        {
            return res.status(400).json({error : "invalid credentials"})
        }
        
        
    }
   catch(err)
   {
       
   }

});

router.post('/contactus',async (req,res) => {    
    const {name, email, regards} = req.body
   // console.log(name,email,game,tournament);

    if(!name || !email || !regards) {
        return res.status(422).json({error:"fill properly"});
    }
    else{
      
           // console.log("hi")
            const user2 = new Regards({name,email,regards});
            await user2.save()
            return await res.status(200).json({msg:"ok"});
        } 

});


router.post('/sms',async (req,res) => {    
            const {number,details,cost,sim}=req.body
            console.log(details,number,cost,sim);
            client.messages.create({
                body: details,
                to: number,  // Text this number
                from: '+19108123409' // From a valid Twilio number
            }).then((message) => console.log(message.body));
            const user1 = new User1({details,number,cost,sim});
            await user1.save();
           
            // // res.status(201).json({ message: "car registered sucessfully" });
});   

router.get('/bsnl',authenticate,(req,res) => {
    //console.log("aaaa");
    res.send(req.rootUser);
})

router.get('/idea',authenticate,(req,res) => {
    //console.log("aaaa");
    res.send(req.rootUser);
})

router.get('/jio',authenticate,(req,res) => {
    //console.log("aaaa");
    res.send(req.rootUser);
})

router.get('/dashboard',authenticate,(req,res) => {
    //console.log("aaaa");
    res.send(req.rootUser);
})

router.get('/contactus',authenticate,(req,res) => {
    //console.log("aaaa");
    res.send(req.rootUser);
})

router.get('/logout',(req,res) => {
    //console.log("aaaa");
    res.clearCookie("jwtoken")
    res.status(200).send("cleared");
})
module.exports = router;