import React,{useState,useEffect} from "react";
import Navber from "../conpoment/navber";
import axios from "axios";
import { Link } from "react-router-dom";


const ItemP =({data}) =>{
  
    const handleDelete = async (product_id) =>{
      try{
          await axios.delete("http://localhost:8080/pcs/product/deleteProduct/"+product_id)
          //refrest page
          window.location.reload()
  
      }catch(err){
          console.log(err)
      }
    }
  
    
    const getText =(html) =>{
        const doc = new DOMParser().parseFromString(html,"text/html")
        return  doc.body.textContent
      }
    return(
        <div className="center">
            
            
            <div className="benner">
            <a className="add"><Link to={"/Add"}><button>ADD new</button></Link></a>

            <div className="table">
              
                <table>
                  <thead>
                      <tr>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>description</th>
                        <th>Post Code</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Type</th>
                        <th>Image</th>
                      
                      </tr>
                  </thead>
                  {data.map(item=>(
              
                  <tbody key={item.product_id}>
                      <tr>
                      <td>{item.product_id}</td>
                      <td>{item.name}</td>
                      <td>{getText (item.description)}</td>
                      <td>{item.code}</td>
                      <td>{item.price}</td>
                      <td>{item.brand}</td>
                      <td>{item.kind_product}</td>
                      <td>{item.image}</td>
                      <td><button className="Bupdate"><Link to={`/ProductUpdate/${item.product_id}`}>Update</Link></button></td>
                      <td><button className="Bdelete" onClick={()=>handleDelete(item.product_id)}> Delete</button></td>
                      
                      </tr>
                      
                  </tbody>
                  ))}
                </table>
            </div>
          </div>
            
        </div>
    )
}
export default ItemP