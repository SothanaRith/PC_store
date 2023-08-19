import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const RegisterAdmin = ()=>{
    const [inputs,setInput] = useState({
        admin_name:"",
        admin_email:"",
        admin_password:"",
    })
    const [err, setErr] = useState(null)

    const navigate = useNavigate()
    const handleChange = e =>{
        setInput(prev=>({...prev,[e.target.name]: e.target.value}))
    }

    // console.log(inputs)

    const handleSubmit = async e =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8080/pcs/admin/Register",inputs)
            navigate("/user")
        }catch(err){
            setErr(err.response.data) //to show err want user click RegisterAdmin
        }

    }
    return (
        
        <div className="login">
            
                
            
            <div className="card_login">
              <h1>RegisterAdmin</h1>
                <form >
                    <input required type="text" placeholder="Username" name="admin_name" onChange={handleChange} />
                    <input required type="email" placeholder="Email" name="admin_email" onChange={handleChange}/>
                    <input required type="password" placeholder="password" name="admin_password" onChange={handleChange}/>
                    <button onClick={handleSubmit}>RegisterAdmin</button>
                    {err && <p>{err}</p>}
                </form>
            </div>
         
        </div>
        
    )
}

export default RegisterAdmin;