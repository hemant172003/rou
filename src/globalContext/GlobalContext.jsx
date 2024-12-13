/* eslint-disable */
import axios from 'axios';
import React, { createContext, useState } from 'react'

export const globalVar = createContext();

const GlobalContext = ({children}) => {
    const [products, setProducts] = useState([]);
    const [cards,setCards]=useState("")
    const [refreshId,setRefreshId]=useState(0)
    let fetchProducts = async (url) => {
        let { data } = await axios.get(url);

        setProducts(data)
    }
    let handleProductDelete=async(product,id)=>{
        let response=await axios.delete(`http://localhost:4500/${product}/${id}`);
        console.log(response);
        setRefreshId(refreshId+1)
    }

console.log(products)
    return (
        <globalVar.Provider value={{products,fetchProducts,setProducts,cards,refreshId,setRefreshId,setCards,handleProductDelete}}>
         {children}
        </globalVar.Provider>
    )
}

export default GlobalContext

