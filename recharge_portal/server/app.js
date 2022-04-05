const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const router = express.Router();
const app = express();
app.use(cors())
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
const cookieparser = require('cookie-parser')  
app.use(cookieparser()) 

mongoose.connect('mongodb+srv://DHAIRYA:Dhairya1221@cluster0.umruy.mongodb.net/DHAIRYA?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));


app.use('/users',require('./routes/users'));

module.exports = router;
app.listen(3010); 