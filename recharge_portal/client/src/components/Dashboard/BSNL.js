import React, { useState , useEffect } from "react";
import PayPal from "../PayPal";
import { useNavigate } from 'react-router-dom';

import "./Dashboard.css"
import { Link } from 'react-router-dom'

const Checkout = () =>
{
  const navigate = useNavigate();
  const [userData,setUserData] = useState({});
  const [user,setUser] = useState({
   phone:""
  })

  const handleChange = e => {
    const {name,value} = e.target
    setUser({
        ...user,
        [name]:value
    })
  }

  const BsnlPage = async() =>
    {
        try{
            const res = await fetch('/users/bsnl',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"  
            });

            const data = await res.json();
 
            setUserData(data);

            if(!res.status===200)
            {
                const error = new Error(res.error);
                throw error;
            }
        }
        catch(err){
            console.log(err);
            navigate('/login')
        }
    }

    useEffect(() => {
        BsnlPage();
    },[]);

  const product = {
    company:"BSNL",
    description:"100 SMS/PERDAY, UNLIMITED CALLING, 2GB INTERNET/PERDAY, 60 DAYS VALIDITY",
    price:5.0,
    phone:user.phone
  }

  const product1 = {
    company:"BSNL",
    description:"100 SMS/PERDAY, UNLIMITED CALLING, 2GB INTERNET/PERDAY, 30 DAYS VALIDITY ",
    price:3.0,
    phone:user.phone
  }

  const product2 = {
    company:"BSNL",
    description:"50 SMS/PERDAY, UNLIMITED CALLING, 1GB INTERNET/PERDAY, 90 DAYS VALIDITY",
    price:5.0,
    phone:user.phone
  }

  const product3 = {
    company:"BSNL",
    description:"50 SMS/PERDAY, UNLIMITED CALLING, 1GB INTERNET/PERDAY, 60 DAYS VALIDITY",
    price:3.0,
    phone:user.phone
  }

  const product4 = {
    company:"BSNL",
    description:"UNLIMITED CALLING, 1GB INTERNET/PERDAY, 70 DAYS VALIDITY",
    price:4.0,
    phone:user.phone
  }

  const product5 = {
    company:"BSNL",
    description:"30Hrs CALLING, 2GB INTERNET/PERDAY, 30 DAYS VALIDITY",
    price:2.0,
    phone:user.phone
  }

  const product6 = {
    company:"BSNL",
    description:"72Hrs CALLING, 2GB INTERNET/PERDAY, 60 DAYS VALIDITY",
    price:3.0,
    phone:user.phone
  }

  const product7 = {
    company:"BSNL",
    description:"UNLIMITED CALLING, 2GB INTERNET/PERDAY, 90 DAYS VALIDITY",
    price:5.0,
    phone:user.phone
  }

  const product8 = {
    company:"BSNL",
    description:"50 SMS/PERDAY, 2GB INTERNET/PERDAY, 60 DAYS VALIDITY",
    price:2.0,
    phone:user.phone
  }

  const product9 = {
    company:"BSNL",
    description:"100 SMS/PERDAY, 2GB INTERNET/PERDAY, 60 DAYS VALIDITY",
    price:3.0,
    phone:user.phone
  }

  const product10 = {
    company:"BSNL",
    description:"100 SMS/PERDAY, 4GB INTERNET/PERDAY, 60 DAYS VALIDITY",
    price:5.0,
    phone:user.phone
  }

  const product11 = {
    company:"BSNL",
    description:"100 SMS/PERDAY, 2GB INTERNET/PERDAY, 90 DAYS VALIDITY",
    price:5.0,
    phone:user.phone
  }

   return (
     <>
 <div id="nav">      
      <Link to="/"><label class="logo">FREECHARGE</label></Link>
      <ul>
        <li><Link to ="/"><ab class="active">Home</ab></Link></li>
        <li><ab>RECHARGE</ab>                 
          <ul>
            <li><Link to ="/bsnl"><aa>BSNL</aa></Link></li>
            <li><Link to ="/idea"><aa>VI</aa></Link></li>
            <li><Link to ="/jio"><aa>JIO</aa></Link></li>
          </ul> 
        </li>           
          <li><Link to ="/aboutus"><ab>ABOUT US</ab></Link></li>
          <li><Link to="/contactus"><ab>CONTACT US</ab></Link></li>
         
          <li><Link to = "/logout"><ab>LOG OUT</ab></Link></li>
      </ul>
    </div>
    <body>     
    
    
    <h1 className="BSNL">BSNL</h1>
    <div className="textbox_phone">
        
        <input placeholder="PHONE" type="phone" name = "phone" value = {user.phone}  onChange= {handleChange} autoComplete="off" />  
    </div>
          
      <h2 className="heading">UNLIMITED ENJOYMENT</h2>
<br/>
<br/>

<div class="row">
  <div class="column">
    <div class="card">
      <h1>PACK 4</h1>
      <br/>
      <br/>
      <p className="price" >$3</p>
      <br/>
      <br/>
      <p className="details">50 SMS/PERDAY, UNLIMITED CALLING, 1GB INTERNET/PERDAY, 60 DAYS VALIDITY</p>
      <br/>
      <br/>
      <ac><PayPal Product={product3}/></ac> 
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h1>PACK 3</h1>
      <br/>
      <br/>
      <p className="price" >$5</p>
      <br/>
      <br/>
      <p className="details">50 SMS/PERDAY, UNLIMITED CALLING, 1GB INTERNET/PERDAY, 90 DAYS VALIDITY</p>
      <br/>
      <br/>
      <ac><PayPal Product={product2}/></ac> 
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h1>PACK 2</h1>
      <br/>
      <br/>
      <p className="price" >$3</p>
      <br/>
      <br/>
      <p className="details">100 SMS/PERDAY, UNLIMITED CALLING, 2GB INTERNET/PERDAY, 30 DAYS VALIDITY</p>
      <br/>
      <br/>
      <ac><PayPal Product={product1}/></ac> 
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h1>PACK 1</h1>
      <br/>
      <br/>
      <p className="price" >$5</p>
      <br/>
      <br/>
      <p className="details">100 SMS/PERDAY, UNLIMITED CALLING, 2GB INTERNET/PERDAY, 60 DAYS VALIDITY</p>
      <br/>
      <br/>
      <ac><PayPal Product={product}/></ac> 
    </div>
  </div>
  
</div>


<h2 className="heading">UNLIMITED CALLING AND DATA</h2>

<br/>
<br/>
<div class="row">
  
<div class="column">
    <div class="card">
      <h1>PACK 8</h1>
      <br/>
      <br/>
      <p className="price" >$5</p>
      <br/>
      <br/>
      <p className="details">UNLIMITED CALLING, 2GB INTERNET/PERDAY, 90 DAYS VALIDITY</p>
      <br/>
      <br/>
      <ac><PayPal Product={product7}/></ac> 
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h1>PACK 7</h1>
      <br/>
      <br/>
      <p className="price" >$3</p>
      <br/>
      <br/>
      <p className="details">72Hrs CALLING, 2GB INTERNET/PERDAY, 60 DAYS VALIDITY</p>
      <br/>
      <br/>
      <ac><PayPal Product={product6}/></ac> 
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h1>PACK 6</h1>
      <br/>
      <br/>
      <p className="price" >$2</p>
      <br/>
      <br/>
      <p className="details">30Hrs CALLING, 2GB INTERNET/PERDAY, 30 DAYS VALIDITY</p>
      <br/>
      <br/>
      <ac><PayPal Product={product5}/></ac> 
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h1>PACK 5</h1>
      <br/>
      <br/>
      <p className="price" >$4</p>
      <br/>
      <br/>
      <p className="details"> UNLIMITED CALLING, 1GB INTERNET/PERDAY, 70 DAYS VALIDITY</p>
      <br/>
      <br/>
      <ac><PayPal Product={product4}/></ac> 
    </div>
  </div>
  
  
</div>


<h2 className="heading">UNLIMITED SMS AND DATA</h2>

<br/>
<br/>
<div class="row">
  
<div class="column">
    <div class="card">
      <h1>PACK 12</h1>
      <br/>
      <br/>
      <p className="price" >$5</p>
      <br/>
      <br/>
      <p className="details">100 SMS/PERDAY, 2GB INTERNET/PERDAY, 90 DAYS VALIDITY</p>
      <br/>
      <br/>
      <ac><PayPal Product={product11}/></ac> 
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h1>PACK 11</h1>
      <br/>
      <br/>
      <p className="price" >$5</p>
      <br/>
      <br/>
      <p className="details">100 SMS/PERDAY, 4GB INTERNET/PERDAY, 60 DAYS VALIDITY</p>
      <br/>
      <br/>
      <ac><PayPal Product={product10}/></ac> 
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h1>PACK 10</h1>
      <br/>
      <br/>
      <p className="price" >$3</p>
      <br/>
      <br/>
      <p className="details">100 SMS/PERDAY, 2GB INTERNET/PERDAY, 60 DAYS VALIDITY</p>
      <br/>
      <br/>
      <ac><PayPal Product={product9}/></ac> 
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h1>PACK 9</h1>
      <br/>
      <br/>
      <p className="price" >$2</p>
      <br/>
      <br/>
      <p className="details">50 SMS/PERDAY, 2GB INTERNET/PERDAY, 60 DAYS VALIDITY</p>
      <br/>
      <br/>
      <ac><PayPal Product={product8}/></ac> 
    </div>
  </div>
  
  
</div>
    </body>
    </>
  );
}

export default Checkout;