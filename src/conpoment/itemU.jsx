import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

const ItemU = ({ data }) => {

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8080/pcs/user/deleteUser/" + id)
            //refrest page
            window.location.reload()

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="User">
            <div className="benner">

                <div className="table">
                    <h1>User</h1>
                    <div className="list">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th></th>
                                    <th></th>

                                </tr>
                            </thead>
                            {data.map(item => (

                                <tbody key={item.id}>
                                    <tr>
                                        <td>{item.admin_id}</td>
                                        <td>{item.admin_name}</td>
                                        <td>{item.admin_email}</td>
                                        <td><button id="update"><Link to={`/adminUpdate/${item.admin_id}`}>Update</Link></button></td>
                                        <td><button onClick={() => handleDelete(item.admin_id)} id="delete"> Delete</button></td>

                                    </tr>

                                </tbody>
                            ))}
                        </table>

                    </div>
                </div>

            </div>
            <button><Link to="/RegisterAdmin">Add admin</Link></button>
           
        </div>

    )
}
export default ItemU