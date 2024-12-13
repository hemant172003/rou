
/* eslint-disable */
import React from "react";
import { Outlet, Link } from "react-router-dom";
import style from "../styleCSS/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={style["home-container"]}>
      <nav className={style["navbar"]}>
        <div className={style["navbar-brand"]}>Welcome</div>
        <ul className={style["nav-links"]}>
          <li>
            <Link to="/homePage/Medical" className={style["nav-link"]}>Medical</Link>
          </li>
          <li>
            <Link to="/homePage" className={style["nav-link"]}>Electronics</Link>
          </li>
          <li>
            <Link to="/homePage/grocerries" className={style["nav-link"]}>Grocerries</Link>
          </li>
          <li>
            <Link to="/homePage/houseHold" className={style["nav-link"]}>HouseHold</Link>
          </li>
          <li>
            <Link to="/homePage/cart" className={style["nav-link"]}>Cart</Link>
          </li>
          
          
        </ul>
      </nav>
      <main className={style["main-content"]}>
        <Outlet />
      </main>
    </div>
  );
};

export default HomePage;
