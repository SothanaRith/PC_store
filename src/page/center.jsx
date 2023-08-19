import React, { useState, useEffect } from "react";
import Navber from "../conpoment/navber";
import axios from "axios";
import { Link } from "react-router-dom";
import ItemP from "../conpoment/itemP";


const Center = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const fecthAllShop = async () => {
      try {
        const res = await axios.get("http://localhost:8080/pcs/product/getProductAll")
        setList(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fecthAllShop()
  }, [])



  const [query, setQuery] = useState("");
  const search = (data) => {
    return data.filter((item) => item.name.toLowerCase().includes(query) || 
    item.brand.toLowerCase().includes(query) || item.kind_product.toLowerCase().includes(query) );
  }


  return (
    <div className="center">
      <Navber/>
      <div className="search">
        <input type="text" id="search" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
        
      </div>
      <ItemP data={search(list)} />

    </div>




  )
}
export default Center;