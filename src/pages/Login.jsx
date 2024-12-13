/* eslint-disable */
import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import style from "../styleCSS/LoginPage.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:4500/customers");
      const customers = response.data;
      const userData = customers.find((element) => element.password === loginData.password);
      
      if (userData) {
        toast.success("Login Successfully");
        setTimeout(() => {
          navigate("/homePage");
        }, 1500);
      } else {
        toast.error("Invalid username or password");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <div className={style["login-container"]}>
      <h2 className={style["login-title"]}>Login</h2>
      <form className={style["login-form"]} onSubmit={handleSubmit}>
        <div className={style["form-group"]}>
          <label htmlFor="username" className={style["form-label"]}>Username</label>
          <input
            type="text"
            name="userName"
            className={style["form-input"]}
            placeholder="Enter your username"
            onChange={handleChange}
          />
        </div>
        <div className={style["form-group"]}>
          <label htmlFor="password" className={style["form-label"]}>Password</label>
          <input
            type="password"
            name="password"
            className={style["form-input"]}
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={style["login-button"]}>Login</button>
      </form>
    </div>
  );
};

export default Login;
