/* eslint-disable */

import React, { useContext, useEffect } from "react";
import { globalVar } from "../globalContext/GlobalContext";
import Card from "../Card"; 
import style from "../styleCSS/HouseHold.module.css"; 

const HouseHold = () => {
  let { products, fetchProducts, refreshId } = useContext(globalVar);
  useEffect(() => {
    fetchProducts("http://localhost:4500/HouseHold");
  }, [refreshId]);

  console.log("Household Products:", products); 

  return<section className={style["ele"]}>
            {products.map((ele,i)=>{
                return <Card product={ele} key={i+1}/>
            })}
         </section>
};

export default HouseHold;
