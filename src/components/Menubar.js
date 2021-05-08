import * as Gi from "react-icons/gi";
import { Link } from "react-router-dom";

const Menubar = () => {
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

            <Link to="/wallet" className="menubar-button">
                    <Gi.GiWallet/>
                    <div className="menubar-button-text">WALLET</div>
            </Link>

            <Link to="/login" className="menubar-button">
                    <Gi.GiExitDoor/>
                    <div className="menubar-button-text">LOG-OUT</div>
            </Link>
        </div>
     );
}
 
export default Menubar;