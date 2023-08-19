import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";



    
const Login = ()=>{
    const [inputs,setInput] = useState({
        admin_name:"",
        admin_password:"",
    })
    const [err, setErr] = useState(null)

    const navigate = useNavigate();
    const handleChange = (e) =>{
        setInput((prev)=>({...prev,[e.target.name]: e.target.value}));
    }

    // console.log(inputs)

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:8080/pcs/admin/login",inputs)
            navigate("/center")
        }catch(err){
            setErr(err.response.data) //to show err want user click login
        }

    }
    return(
        <div className="login">
            
                
            
            <div className="card_login">
              <h1>Admin Login</h1>
                <form>
                    <input required type="text" placeholder="username" name="admin_name"   onChange={handleChange}/>
                    <input required type="password" placeholder="password" name="admin_password" onChange={handleChange}/>
                    <button onClick={handleSubmit}>Login</button>
                    {err && <p>{err}</p>}
                </form>
            </div>
         
        </div>
    )
}

export default Login;