import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import "./Login.css"
const Login = () => {

    const navigate = useNavigate();

    const [user,setUser] = useState({
        email:"",
        password:"",
        phone:""
    })

    const [userErr,setUserErr] = useState({
        phoneErr:"",
        emailErr:"",
        passwordErr:""
    })

    const handleChange = e => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const login = async(e) => {
       if(validForm())
       {
        e.preventDefault();
        const { email, phone, password } = user
        const res = await fetch('/users/login',{
            method:"POST",
           
            headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({
             email,password,phone
         })
        });
         const  data =await res.json();
        console.log(data,"d");
         if(res.status === 400 || !data)
             {window.alert(" credentials")}
         else{
             window.alert("login sucessfull")
             navigate('/dashboard');
         }
       }
       else
       {
           console.log("invalid form");
       }
       
    }

    const validForm = ()=>{
        let formIsValid = true;
        

        if(user.phone=='')
        {
            formIsValid = false;
            setUserErr(prevState=>({
                ...prevState,phoneErr:"PLEASE ENTER PHONE"
            }))
        }

        if(user.email=='')
        {
            formIsValid = false;
            setUserErr(prevState=>({
                ...prevState,emailErr:"PLEASE ENTER EMAIL"
            }))
        }

        if(user.password=='')
        {
            formIsValid = false;
            setUserErr(prevState=>({
                ...prevState,passwordErr:"PLEASE ENTER PASSWORD"
            }))
        }

        
        return formIsValid
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
                        <li><Link to ="/idea"><aa>IDEA</aa></Link></li>
                        <li><Link to ="/jio"><aa>JIO</aa></Link></li>
                        </ul> 
                    </li>           
                    <li><Link to ="/aboutus"><ab>ABOUT US</ab></Link></li>
                    <li><Link to="/contactus"><ab>CONTACT US</ab></Link></li>
                    </ul>
          </div>

    <body className="image1"> 
    <div className='log-in-card'   >
        <h1>Login</h1>
    
        <form className="input-div">

        <div class="textbox_login">
        <i class="far fa-envelope"></i>
        <input placeholder="EMAIL" type="text" name = "email" value = {user.email}  onChange= {handleChange} autoComplete="off"/>
        {
            userErr.emailErr.length>0 && <span>{userErr.emailErr}</span>
        }
        </div>
    
        <div class="textbox_login">
        <i class="fa fa-phone"></i>
        <input placeholder="PHONE" type="phone" name = "phone" value = {user.phone}  onChange= {handleChange} autoComplete="off" />  
        {
            userErr.phoneErr.length>0 && <span>{userErr.phoneErr}</span>
        }
        </div>

        <div class="textbox_login">
        <i class="fas fa-lock"></i>
        <input placeholder="PASSWORD" type="password" name = "password" value = {user.password}  onChange= {handleChange} autoComplete="off" />  
        {
            userErr.passwordErr.length>0 && <span>{userErr.passwordErr}</span>
        }
        </div>
    
        <div className="btn1" onClick = {login}>Login</div>
    
        <>Don't have an Account?<div className="link1" onClick = {() => navigate("/signup")}>Signup</div></> 
        
        </form>
    </div>  
    </body>
    </>
    )
}

export default Login
