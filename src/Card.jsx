/* eslint-disable */

import React, { useContext } from 'react'
import style from "./styleCSS/Card.module.css";
import { globalVar } from './globalContext/GlobalContext';
import { useNavigate } from 'react-router-dom';

const Card = ({product}) => {
  let {handleProductDelete}=useContext(globalVar)
  let navigate=useNavigate()

  let handleUpdate=()=>{
    navigate("/updateCard",{state:{product,product_Type:"Electronics"}})
  }
  return (
    
    <div className={style["card"]}>
          <div className={style["img"]}>
            <img src={product.image} alt=""/>
          </div>
          <h1>{product.item}</h1>
          <p>{product.warranty}</p>
          <p>{product.name}</p>
          <button className={style["update"]}onClick={handleUpdate}>Update</button>
          <button className={style["delete"]} onClick={()=>{handleProductDelete("Electronics",product.id)}}>Delete</button>
         </div>
  )
}

export default Card
