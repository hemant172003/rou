/* eslint-disable */
import React, { useState } from "react";
import style from "../styleCSS/SignUp.module.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const SignUp =()=>{
    let navigate=useNavigate()
    let [data,setData]=useState({
        userName:"",
        email:"",
        password:"",
        contact:"",
        address:""
    })

    let handelChnage=(e)=>{
    let {name,value}=e.target;
    setData({...data, [name]:value})

    }

  let handleSubmit=async (e)=>{
      e.preventDefault();
         let response=await axios.post("http://localhost:4500/customers", data);
         toast.success("User is Created Succesfully");
         setTimeout(()=>{
            navigate("/homePage")
         },1500)
  }

    return(
        <div className={style["signup-container"]}>
            <h2>SignUp </h2>
            <form onSubmit={handleSubmit}>
                <div className={style["form-group"]}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="userName" required onChange={handelChnage}/>
                </div>
                <div className={style["form-group"]}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required onChange={handelChnage}/>
                </div>
                <div className={style["form-group"]}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required onChange={handelChnage}/>
                </div>
                <div className={style["form-group"]}>
                    <label htmlFor="tel">Contact</label>
                    <input type="tel" id="tel" name="contact" required onChange={handelChnage}/>
                </div>
                <div className={style["form-group"]}>
                    <label htmlFor="Add">Address</label>
                   <textarea name="address" id={style["address"]} onChange={handelChnage}></textarea>
                </div>
                <Link to="/login"><button type="submit">Sign Up</button></Link>
                
            </form>
        </div>
    )
}

export default SignUp;