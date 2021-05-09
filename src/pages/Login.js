import * as Gi from "react-icons/gi";
import {Link} from "react-router-dom";
import Popup from "../components/Popup";
import {useState} from 'react';
import axios from '../axios';

const Login = () => {
    
    const [buttonPopup, setButtonPopup] = useState(false);
    const [login_username, setlogin_username] = useState("");
    const [login_password, setlogin_password] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setfirstname] = useState("");
    const [surname, setsurname] = useState("");
    const [gender, setgender] = useState("");
    const [birthdate, setbirthdate] = useState("");
    const [telephonenumber, settelephonenumber] = useState("");
    
    const submitSignin = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("username", login_username);
        formData.append("password", login_password);
        axios.post("/SignInServlet",formData).then((res) => {
        window.location.href = "/home";
        }).catch((error) =>{
        alert(error);
        });
    };

    const submitSignUp = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("email", username);
        formData.append("password", password);
        formData.append("firstname", firstname);
        formData.append("surname", surname);
        formData.append("gender", gender);
        formData.append("birthdate", birthdate);
        formData.append("telephoneNumber", telephonenumber);
        axios.post("/SignUpServlet",formData).then((res) => {
        window.location.href = "/home";
        }).catch((error) =>{
        alert(error)
        });
    };

    return ( 
        <div className="login">
            <form action="" className="login-form">
                <h1>Log-in</h1>
                <p>Email-address</p>
                <input
                type="text"
                value={login_username}
                onChange={(e) => setlogin_username(e.target.value)}
                placeholder="email"
                />
                <p>password</p>
                <input
                type="password"
                value={login_password}
                onChange={(e) => setlogin_password(e.target.value)}
                placeholder="Password"
                />
                
                <button className="login-button" onClick={submitSignin}><Gi.GiEntryDoor/></button>
                
            </form>

            <button className="register-button" onClick={()=>setButtonPopup(true)}>register</button>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <form action="" className="register-form">
                    <h1>Register</h1>
                    <p>Email-address</p>
                    <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="email"
                    />
                    <br />
                    <p>password</p>
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    />
                    <br />
                    <p>firstname</p>
                    <input
                    type="text"
                    value={firstname}
                    onChange={(e) => setfirstname(e.target.value)}
                    placeholder="firstname"
                    />
                    <br />
                    <p>surname</p>
                    <input
                    type="text"
                    value={surname}
                    onChange={(e) => setsurname(e.target.value)}
                    placeholder="surname"
                    />
                    <br />
                    <p>gender</p>
                    <input
                    type="text"
                    value={gender}
                    onChange={(e) => setgender(e.target.value)}
                    placeholder="gender"
                    />
                    <br />
                    <p>birth-date</p>
                    <input
                    type="text"
                    value={birthdate}
                    onChange={(e) => setbirthdate(e.target.value)}
                    placeholder="birth-date"
                    />
                    <br />
                    <p>telephone-number</p>
                    <input
                    type="text"
                    value={telephonenumber}
                    onChange={(e) => settelephonenumber(e.target.value)}
                    placeholder="telephone-number"
                    />
                    <br />
                    <button onClick={submitSignUp}>register</button>
                    <br />
                </form>
            </Popup>
        </div>
     );
}
 
export default Login;