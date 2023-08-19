import React,{useState,useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const Update = ()=>{
    //set item by default
    const [item,setItem] = useState({
        username:"",
        email: ""
 
    });

    //make for Update function item in button Update
    const navigate = useNavigate()
    const location = useLocation()
    
    const Id =location.pathname.split("/")[2]

    //make function for Update data
    const handleChange =(e) =>{
        setItem((prev)=>({...prev,[e.target.name]: e.target.value }));
    };
    console.log(item)

    //make function for post data to database
    const handleclick = async e =>{
        e.preventDefault()
        try{
            await axios.put("http://localhost:8080/pcs/admin/updateAdmin/"+Id, item)
            navigate("/center")
     }catch(err){
            console.log(err)
            
        }
    }
    console.log(item)
    return(
        <div className="update">
            <div className="text_update"><h1>Update new item</h1></div>
            
            <from className="card_update" >
                <input type="text" placeholder="name" onChange={handleChange} name="admin_name" required/>
                <input type="text" placeholder="Email" onChange={handleChange} name="admin_email" required/>
                <button onClick={handleclick}>Update</button>
            </from>
        </div>
    )

}
export default Update;