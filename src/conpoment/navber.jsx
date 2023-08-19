import { Link } from "react-router-dom";
const Navber =()=>{
    return(

        <div className="navber">
            <div className="banner">
                <ul>
                    <li><Link to="/center"> <i className="fa fa-home" aria-hidden="true"></i> Center</Link></li>
                    <li><Link to='/data'><i className="fa fa-table" aria-hidden="true"></i> data </Link></li>
                    <li><Link to='/user'><i className="fa fa-user" aria-hidden="true"></i> Admin </Link></li>
                </ul>

            </div>

        </div>
    )

}
export default Navber;