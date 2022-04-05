import React from 'react'
import "./Homepage.css"
import "./Footer.css"
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
          <div className="body1">
          <div className="image">
          
          <div id="nav">      
                <Link to="/"><label class="logo">FREECHARGE</label></Link>
                <ul>
                    <li><Link to ="/"><ab class="active">Home</ab></Link></li>
                    <li><ab>RECHARGE</ab>                 
                        <ul>
                        <li><Link to ="/bsnl"><aa>BSNL</aa></Link></li>
                        <li><Link to ="/idea"><aa>IDEA</aa></Link></li>
                        <li><Link to ="/jio"><aa>JIO</aa></Link></li>
                        </ul> 
                    </li>           
                    <li><Link to ="/aboutus"><ab>ABOUT US</ab></Link></li>
                    <li><Link to="/contactus"><ab>CONTACT US</ab></Link></li>
                    <li><Link to = "/login"><ab>LOG IN</ab></Link></li>
                    <li><Link to = "/logout"><ab>LOG OUT</ab></Link></li>
                </ul>
          </div>
          
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

    
    <footer> 
      <small>&copy; Copyright 2022, FREECHARGE Corporation</small> 
    </footer>

    </div>    
        </div>
    )
}

export default Home
