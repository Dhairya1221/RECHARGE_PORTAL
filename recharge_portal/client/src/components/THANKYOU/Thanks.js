import React from 'react'
import { Link } from 'react-router-dom'  
import './Thanks.css'
const Thankyou = () => {
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
            <body >
            <h1 className='heading1'>THANKS FOR RECHARGING</h1>
            </body>
        </>
    )
}

export default Thankyou
