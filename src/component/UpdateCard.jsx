/* eslint-disable */
import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const UpdateCard = () => {
    let data=useLocation();
    let navigate=useNavigate()
   console.log(data)

     let [updateCard,setUpdateCard]=useState({
        item:data.state.product.name,
        warranty:data.state.product.brand,
        warranty_Id:data.state.product.id
     });


    const handleChange=(e)=>{
            let {name,value}=e.target;
            setUpdateCard({...updateCard, [name]:value})
    }

let handleSubmit=async (e)=>{
   e.preventDefault();
       let response=await axios.put(`http://localhost:4500/${data.state.product_Type}/${data.state.product.id}`,updateCard);
       console.log(response);
       navigate("/homePage")

}

  return (
    <div className='updateCard'>
      
        <h1>Update Product</h1>
        <form action="" onSubmit={handleSubmit}>
            <div className="form-content">
                <label htmlFor="item">item:</label>
                <input type="text" id="item" name="item"  placeholder="Enter your item" onChange={handleChange} value={updateCard.item}/>
                
            </div>

            <div className="form-content">
                <label htmlFor="warranty" >warranty:</label>
                <input  type="warranty" id="warranty" name="warranty"  placeholder="Enter your warranty" onChange={handleChange}  value={updateCard.warranty}/>
               
            </div>
            <div className="form-content">
                <label htmlFor="warranty" >warranty id:</label>
                <input  type="warranty" id="warranty" name="warrantyagain" className='warrantyId' readOnly placeholder="Enter your warranty"  value={updateCard.warranty_Id}/>
               
            </div>
       

            <div className="form-content">
                <button >update product</button>
            </div>


        </form>
    </div>
  )
}

export default UpdateCard