import * as Gi from "react-icons/gi";
import {Link} from "react-router-dom";
import Popup from "../components/Popup";
import {useState} from 'react';
import axios from '../axios';

const Login = () => {
    
    const [buttonPopup, setButtonPopup] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitSignin = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        axios.post("/SignInServlet",formData).then((res) => {
        window.location.href = "/home";
        }).catch((error) =>{
        alert(error);
        });
    };

    return ( 
        <div className="login">
            <form action="" className="login-form">
                <h1>Log-in</h1>
                <p>Email-address</p>
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="email"
                />
                <p>password</p>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                />
                
                <button className="login-button" onClick={submitSignin}><Gi.GiEntryDoor/></button>
                
                <br />
                <button onClick={()=>setButtonPopup(true)}>register</button>
            </form>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <form action="" className="register-form">
                    <h1>Register</h1>
                    <p>Email-address</p>
                    <input type="text"/>
                    <br />
                    <p>password</p>
                    <input type="password"/>
                    <br />
                    <p>firstname</p>
                    <input type="text"/>
                    <br />
                    <p>surname</p>
                    <input type="text"/>
                    <br />
                    <p>gender</p>
                    <input type="text"/>
                    <br />
                    <p>birth-date</p>
                    <input type="text"/>
                    <br />
                    <p>telephone-number</p>
                    <input type="text"/>
                    <br />
                    <button>register</button>
                    <br />
                </form>
            </Popup>
        </div>
     );
}
 
export default Login;