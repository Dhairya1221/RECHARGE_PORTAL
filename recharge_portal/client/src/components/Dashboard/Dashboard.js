import React, { useState , useEffect } from "react";
import PayPal from "../PayPal";
import { useNavigate } from 'react-router-dom';

import "./dashboard.css"
import { Link } from 'react-router-dom'

const Checkout = () => {
  const navigate = useNavigate();
  const [userData,setUserData] = useState({});

  const Dashboard = async() =>
    {
        try{
            const res = await fetch('/users/dashboard',{
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
        Dashboard();
    },[]);

  

    return (
        <>
        
        <div className="body1">
    <div id="nav_dashboard">      
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
        <div class="container">
          <div class="cardh">
            <div class="box">
              <div class="content">
                <h2>IDEA</h2>
                <h3>RECHARGE PLANS</h3>
                <p>TO KNOW MORE,CLICK HERE!!</p>
                <Link to ="/idea"><ac>RECHARGE</ac></Link>
              </div>
            </div>
          </div>
        
          <div class="cardh">
            <div class="box">
              <div class="content">
                <h2>BSNL</h2>
                <h3>RECHARGE PLANS</h3>
                <p>TO KNOW MORE,CLICK HERE!!</p>
                <Link to ="/bsnl"><ac>RECHARGE</ac></Link>
              </div>
            </div>
          </div>
          
          <div class="cardh">
            <div class="box">
              <div class="content">
                <h2>JIO</h2>
                <h3>RECHARGE PLANS</h3>
                <p>TO KNOW MORE,CLICK HERE!!</p>
                <Link to="/jio"><ac >RECHARGE</ac></Link>
              </div>
            </div>
          </div>
          </div> 
      </div>  
        </>
    )
}

export default Checkout
