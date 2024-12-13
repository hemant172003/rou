/* eslint-disable */

import React, { useContext, useEffect } from "react";
import { globalVar } from "../globalContext/GlobalContext";
import Card from "../Card";
import style from "../styleCSS/Electronics.module.css";
const Electronics =()=>{

    let {products,fetchProducts,setProducts,card, setCard,refreshId}=useContext(globalVar);


  
console.log(products)
 useEffect(()=>{
   fetchProducts("http://localhost:4500/Electronics")

},[refreshId])
    return<section className={style["ele"]}>
            {products.map((ele,i)=>{
                return <Card product={ele} key={i+1}/>
            })}
         </section>
        
}

export default Electronics;