import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();
    useEffect(()=>{
        
        fetch("/users/logout",{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
            navigate('/login',{replace:true});
            if(res.status!==200)
            {
                const error = new Error(res.error);
                throw error
            }
        }).catch((err)=>{
            console.log(err)
        })
    });

    return (
        <div>
            <h1>logout</h1>
        </div>
    )
}

export default Logout
