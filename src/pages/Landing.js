import { from } from "form-data";
import * as Gi from "react-icons/gi";
import { Link } from "react-router-dom";
import pic1 from "../pic/nezuko-profile.jpg"
import video1 from "../pic/ramenshopwallpaper.mp4"

const Landing = () => {
    return ( 
        <div className="landing">
            <video className="landing-wallpaper" autoPlay loop src={video1}></video>
            <div className="landing-container">
            <h1>PATTO - NOODLE</h1>
                <Link to="/login">
                        <button className="landing-button">Log-In</button>
                </Link>
            </div>
            <div className="landing-footer">Create by Thanapat Manachaimongkol ID:63130500209 CS@SIT</div>
        </div>
     );
}
 
export default Landing;