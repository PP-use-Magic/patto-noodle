import * as Gi from "react-icons/gi";
import { Link } from "react-router-dom";
import axios from "../axios"

const Menubar = () => {

        const logout = () =>{
                axios
                .get("/SignOutServlet")
                .then(()=>{
                        window.location.href = "/login"
                })
                .catch((error)=>{
                        alert(error);
                });
        }

    return ( 
        <div className="menubar">

            <Link to="/home" className="menubar-button">
                    <Gi.GiMushroomHouse/>
                    <div className="menubar-button-text">HOME</div>
            </Link>

            <Link to="/profile" className="menubar-button">
                    <Gi.GiNinjaHead/>
                    <div className="menubar-button-text">PROFILE</div>
            </Link>

            <Link to="/order" className="menubar-button">
                    <Gi.GiNoodles/>
                    <div className="menubar-button-text">ORDER</div>
            </Link>

            <Link to="/about" className="menubar-button">
                    <Gi.GiHood/>
                    <div className="menubar-button-text">ABOUT</div>
            </Link>

            <div onClick={logout} to="/login" className="menubar-button">
                    <Gi.GiExitDoor/>
                    <div className="menubar-button-text">LOG-OUT</div>
            </div>
        </div>
     );
}
 
export default Menubar;