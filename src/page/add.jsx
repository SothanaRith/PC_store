import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import axios from 'axios';

const Add = () => {
    const [name, setName] = useState("");
    const [values, setvalue] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [kind_product, setKind_product] = useState("");
    const [image, setImage] = useState("");
    const [code, setCode] = useState("");

    //set item by default
    // const [item, setItem] = useState({
    //     name: "",
    //     description: "" ,
    //     price: "",
    //     code: "",
    //     image: ""

    // });

    //make for Add function item in button add
    const navigate = useNavigate()

    //make function for add data
    // const handleChange = (e) => {
    //     setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // };

    // console.log(item)

    //make function for post data to database
    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8080/pcs/product/addProduct", { name, description: values,kind_product,brand, price, image, code })
            navigate("/center")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="add">
            <div className="text_add"><h1>Add new item</h1></div>

            <form>
                <input type="text" placeholder="name" onChange={e => setName(e.target.value)} name="name" />

                <ReactQuill placeholder="description" theme="snow" value={values} onChange={setvalue} />
                <input type="text" placeholder="price" onChange={e => setPrice(e.target.value)} name="price" />
                <input type="text" placeholder="kind of product" onChange={e => setKind_product(e.target.value)} name="kind_product" />
                <input type="text" placeholder="brand" onChange={e => setBrand(e.target.value)} name="brand" />
                <input type="text" placeholder="Post Code" onChange={e => setCode(e.target.value)} name="code" />
                <input type="text" placeholder="image" onChange={e => setImage(e.target.value)} name="image" />
                <button onClick={handleClick}>Add</button>
            </form>

        </div>
    )
}
export default Add;