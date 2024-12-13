/* eslint-disable */

import React, { useContext, useEffect } from "react";
import { globalVar } from "../globalContext/GlobalContext";
import Card from "../Card";
import style from "../styleCSS/Medical.module.css"; 

const Medical = () => {
  let { products, fetchProducts, refreshId } = useContext(globalVar);

  useEffect(() => {
    fetchProducts("http://localhost:4500/Medical");
  }, [refreshId]); 

  console.log("Medical Products:", products); 

  
    return<section className={style["ele"]}>
            {products.map((ele,i)=>{
                return <Card product={ele} key={i+1}/>
            })}
         </section>
  
};

export default Medical;
