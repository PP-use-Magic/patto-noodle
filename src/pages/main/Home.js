import Menubar from "../../components/Menubar"
import Narvbar from "../../components/Narvbar"
import * as Gi from "react-icons/gi";
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <>
            <Narvbar/>
            <div className="home">
                
                    <Gi.GiNinjaStar className="card-animation1"/>
                    <Gi.GiNinjaStar className="card-animation2"/>
                    <Gi.GiNinjaStar className="card-animation3"/>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <Gi.GiNinjaHeroicStance className="Ninja"/>
                    <h1 className="home-text">Pattonoodle, ready to serve</h1>
                    <Link to="/order" className="ordernow-button">Order Now</Link>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <Gi.GiNinjaStar className="card-animation4"/>
                    <Gi.GiNinjaStar className="card-animation5"/>
                    <Gi.GiNinjaStar className="card-animation6"/>
                
              
              
            </div>
            <Menubar/>
        </>
     );
}
 
export default Home;