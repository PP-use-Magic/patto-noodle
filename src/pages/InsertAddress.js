import * as Gi from "react-icons/gi";
import {useState} from 'react';
import axios from '../axios';

const InsertAddress = () => {
    const [house_number, sethouse_number] = useState("");
    const [road, setroad] = useState("");
    const [country, setcountry] = useState("");
    const [district, setdistrict] = useState("");
    const [province, setprovince] = useState("");
    const [postal_code, setpostal_code] = useState("");

    const submitinsertaddress = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("house_number", house_number);
        formData.append("road", road);
        formData.append("country", country);
        formData.append("district", district);
        formData.append("province", province);
        formData.append("postal_code", postal_code);
        
        axios.post("/AddressServlet",formData).then((res) => {
        window.location.href = "/home";
        }).catch((error) =>{
        alert(error)
        });
    };

    return ( 
        <div className="login">
            <form action="" className="register-form">
                <h1>Address</h1>
                    <p>house number</p>
                    <input
                    type="text"
                    value={house_number}
                    onChange={(e) => sethouse_number(e.target.value)}
                    placeholder="house_number"
                    />
                    <br />
                    <p>road</p>
                    <input
                    type="text"
                    value={road}
                    onChange={(e) => setroad(e.target.value)}
                    placeholder="road"
                    />
                    <br />
                    <p>country</p>
                    <input
                    type="text"
                    value={country}
                    onChange={(e) => setcountry(e.target.value)}
                    placeholder="country"
                    />
                    <br />
                    <p>district</p>
                    <input
                    type="text"
                    value={district}
                    onChange={(e) => setdistrict(e.target.value)}
                    placeholder="district"
                    />
                    <br />
                    <p>province</p>
                    <input
                    type="text"
                    value={province}
                    onChange={(e) => setprovince(e.target.value)}
                    placeholder="province"
                    />
                    <br />
                    <p>postal-code</p>
                    <input
                    type="number"
                    value={postal_code}
                    onChange={(e) => setpostal_code(e.target.value)}
                    placeholder="postal_code"
                    />
                    <button className="login-button" onClick={submitinsertaddress}><Gi.GiEntryDoor/></button>
                    <br />
            </form>
        </div>
     );
}
 
export default InsertAddress;