import React,{useState,useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";



    
const Update = ()=>{
    const [list, setList] = useState([])
    //make for Update function item in button Update
const navigate = useNavigate()
const location = useLocation()
const productID = location.pathname.split("/")[2]
    useEffect(() => {
        const fecthAlldetail = async () => {
            try {
                const res = await axios.get("http://localhost:8080/pcs/product/getProductOne/" + productID)
                // {
                //     headers:{Authorization:"Bearer "+ data.accessToken}
                // })
                setList(res.data)

            } catch (err) {
                console.log(err)
            }
        }
        fecthAlldetail()
    }, [])

    //set item by default
    const [item,setItem] = useState({
        name:"",
        description: "",
        kind_product: "",
        brand: "",
        price : "",
        code : "",
        image: ""
        
    });

  

    //make function for Update data
    const handleChange =(e) =>{
        setItem((prev)=>({...prev,[e.target.name]: e.target.value }));
    };

    //make function for post data to database
    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.put("http://localhost:8080/pcs/product/updateProduct/"+ productID, item)
            navigate("/")
     }catch(err){
            console.log(err)
        }
    }
    console.log(item)
    return(
        <div className="update">
            <div className="text_update"><h1>Update new item</h1></div>
            
            <from className="card_update" >
                <input type="text" placeholder="name" onChange={handleChange} name="name" required/>
                <input type="text" placeholder="description" onChange={handleChange} name="description" required/>
                <input type="text"placeholder="price" onChange={handleChange} name="price" required/>
                <input type="text"placeholder="kind of product" onChange={handleChange} name="kind_product" required/>
                <input type="text"placeholder="brand" onChange={handleChange} name="brand" required/>
                <input type="text"placeholder="Post Code" onChange={handleChange} name="code" required/>
                <input type="text" placeholder="image" onChange={handleChange} name="image" required/>
                <button onClick={handleClick}>Update</button>
            </from>
        </div>
    )

}
export default Update;