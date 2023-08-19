import React,{useEffect,useState} from "react";
import axios from "axios";
import Navber from "../conpoment/navber";

const Data =() =>{
    const [list,setList] = useState([])

  useEffect(()=>{
    const fecthAllShop= async()=>{
        try{
            const res = await axios.get("http://localhost:8080/pcs/comment/getcomment")
            setList(res.data)
        }catch(err){
            console.log(err)
        }
    }
    fecthAllShop()
  },[])
  const handleDelete = async (comment_id) =>{
    try{
        console.log(comment_id)
        await axios.delete("http://localhost:8080/pcs/comment/deleteComment/"+comment_id)
        //refrest page
        window.location.reload()

    }catch(err){
        console.log(err)
    }
  }

    return(
        <div className="Data">
            <div className="benner">
                <Navber/>
                <h1>Comment</h1>
            </div>
            {list.map(item=>(
                    <div className="comment">
                        <div key={item.comment_id} className="commentinfo">
                            <p>{item.comment_id} . {item.title}</p>
                            <button onClick={()=>handleDelete(item.comment_id)}>delete</button>
                            
                        </div>

                        
                    </div>
                ))}
            
        </div>
    )
}
export default Data;