import React, { useEffect, useState } from "react";
import Navber from "../conpoment/navber";
import axios from "axios";
import { Link } from "react-router-dom";
import ItemU from "../conpoment/itemU";

const User = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        const fecthAllShop = async () => {
            try {
                const res = await axios.get("http://localhost:8080/pcs/admin/getAdmin")
                setList(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fecthAllShop()
    }, [])


    const [query, setQuery] = useState("");
    const search = (data) => {
        return data.filter((item) => item.admin_name.toLowerCase().includes(query) || item.admin_email.toLowerCase().includes(query));
    }



    return (
        <div className="User">
            <Navber />

            <div className="search">
                <input type="text" id="search" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
            </div>
            <ItemU data={search(list)} />
        </div>

    )
}
export default User;