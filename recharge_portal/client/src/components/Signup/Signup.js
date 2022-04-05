import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./signup.css";

const Signup = () => {

    const navigate = useNavigate();

    const [user,setUser] = useState({
        name:"",
        phone:"",
        email:"",
        password:"",
        cpassword:""
    })
    const [userErr,setUserErr] = useState({
        nameErr:"",
        phoneErr:"",
        emailErr:"",
        passwordErr:"",
        cpasswordErr:""
    })

    const handleChange = e => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
         
    }
    const signup = async(e) =>
    {
        if(validForm())
        {
            e.preventDefault();
        console.log(user)
        const {name, phone, email, password,cpassword} = user

        const res = await fetch("/users/signup", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,phone,email,password,cpassword
            })
            
        });
        
        const data = await res.json();
        //console.log(data,"d");
        if(res.status === 422 || !data) 
        {
            
        }
        else
        {
            window.alert("succesfull registration")
            console.log("succesfull registration")
            //console.log("hi")
            navigate('/login');
        }

        }
        else
        {
            console.log("invalid form");
        }
    }

    const validForm = ()=>{
        let formIsValid = true;
        if(user.name=='')
        {
            formIsValid = false;
            setUserErr(prevState=>({
                ...prevState,nameErr:"PLEASE ENTER NAME"
            }))
        }

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

        if(user.cpassword=='')
        {
            formIsValid = false;
            setUserErr(prevState=>({
                ...prevState,cpasswordErr:"PLEASE ENTER CONFIRM-PASSWORD"
            }))
        }
        return formIsValid
    }

   

   return(
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
                    <li><Link to = "/login"><ab>LOG IN</ab></Link></li>
                   
                </ul>
          </div>

    <body className="image1">   
    <div className="sign-up-card">  
           
    <h1>Register</h1>
    
    <form method="POST" class="input-div">  

    <div class="textbox_signup">
    <i class="fas fa-user"></i> 
    <input placeholder="USERNAME"type="text" name = "name" value = {user.name}  onChange= {handleChange} autoComplete="off"/>
    {
        userErr.nameErr.length>0 && <span>{userErr.nameErr}</span>
    }
    </div>

    <div class="textbox_signup">
    <i class="fa fa-phone"></i>
    <input placeholder="Phone"type="text" name = "phone" value = {user.phone}  onChange= {handleChange} autoComplete="off"/>
    {
        userErr.phoneErr.length>0 && <span>{userErr.phoneErr}</span>
    }
    </div>

    <div class="textbox_signup">
    <i class="far fa-envelope"></i>
    <input placeholder="EMAIL" type="text" name = "email" value = {user.email}  onChange= {handleChange} autoComplete="off"/>
    {
        userErr.emailErr.length>0 && <span>{userErr.emailErr}</span>
    }
    </div>

    <div class="textbox_signup">
    <i class="fas fa-lock"></i>
    <input placeholder="PASSWORD" type="password" name = "password" value = {user.password}  onChange= {handleChange} autoComplete="off" />  
    {
        userErr.passwordErr.length>0 && <span>{userErr.passwordErr}</span>
    }
    </div>

    <div class="textbox_signup">
    <i class="fas fa-lock"></i>
    <input placeholder="CONFIRM PASSWORD"type="password" name = "cpassword" value = {user.cpassword}  onChange= {handleChange} autoComplete="off"/>
    {
        userErr.cpasswordErr.length>0 && <span>{userErr.cpasswordErr}</span>
    }
    </div>

    <div className="btn1" onClick={signup}>Register</div>
    
    
    </form>
    </div>
    </body>
    </>
   )


}

export default Signup