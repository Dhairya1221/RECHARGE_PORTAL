import React from 'react'
import "./Aboutus.css"
import { Link } from 'react-router-dom'  

const Aboutus = () => {
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
            <div class="main-container">
        <div class="content1">
            <h3 class="about-heading">About Us</h3>
            <p>
                FreeCharge, a wholly owned subsidiary of Axis Bank Limited, is India’s No.1 payments app. Customers across the country use
                FreeCharge to make prepaid, postpaid, DTH, metro recharge and utility bill payments for numerous service
                providers. We launched our wallet in September 2015 and customers are already using it to pay across all
                major online platforms and offline stores like Shoppers Stop, McDonalds, Cinepolis, HomeStop, Crosswords,
                Hypercity and even for E-Rickshaws, the list is growing by the day.</p>
            <p>
                We are on a mission to get millions of merchants both in organised and unorganised sector to be a part of the digital payments
                ecosystem. Our Chat-n-Pay service is all about social payments. It is an engaging and secure way for you
                to seamlessly Chat-n-Pay to friends, family, and merchants in less than 5 seconds. It also enables merchants,
                small or large to accept digital payments in less than 1 minute after registering on the FreeCharge App.
            </p>
            <br/>
            <br/>
            
            <h4 class="about-heading4">We promise:</h4>
            <ul class="list">
                <li>An easy and instant recharging process</li>
                <li>A hassle-free online experience</li>
                <li>A safe and secure payment process </li>
                <li>Best discounts available in the market</li>
                <li>Simple voucher redemption with no hidden costs or complex terms and conditions </li>
                <li>And a totally satisfied you, who'll want to come back to us again and again </li>
                <li>After all, you know it's a smart thing to do! </li>
            </ul>
        </div>
        </div>
            </body>
        </>
    )
}

export default Aboutus
