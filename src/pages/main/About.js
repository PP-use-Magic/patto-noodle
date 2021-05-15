import Menubar from "../../components/Menubar"
import Narvbar from "../../components/Narvbar"
import * as Gi from "react-icons/gi";

const About = () => {
    return ( 
        <>
            <Narvbar/>
            <div className="About">
              Contact Admin!
            </div>
            <div className="About">
            <Gi.GiGooeyDaemon/>
            </div>
            <div className="About-text">
            Thanapat Manachaimongkol
            </div>
            <div className="About-text">
            <Gi.GiIdCard/> 63130500209
            </div>
            <div className="About-text">
            <Gi.GiPhone/> 091-883-7416
            </div>
            <br />
            <div className="About">
            <Gi.GiDatabase/>
            </div>
            <div className="About-text">
            About site <br />
            </div>
            <div className="About-text">
            frontend use react <br />
            backend use servlet <br />
            </div>
            <Menubar/>
        </>
     );
}
 
export default About;