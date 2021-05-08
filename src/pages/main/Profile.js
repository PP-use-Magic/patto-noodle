import Menubar from "../../components/Menubar"
import Narvbar from "../../components/Narvbar"
import * as Gi from "react-icons/gi";
import Popup from "../../components/Popup";
import {useState} from 'react';

const Profile = () => {
    const [buttonPopupEditProfile, setButtonPopupEditProfile] = useState(false);
    const [buttonPopupEditAddress, setButtonPopupEditAddress] = useState(false);
    return ( 
        <>
            <Narvbar/>
            <div className="profile">

              <div className="profile-card">
              <h1>Activity</h1>
              <div className="profile-icon"><Gi.GiMouthWatering/></div>
                <div className="profile-activity">
                  buy noodle x2 for 500$
                </div>
              </div>
              <div className="profile-card">
                <img src="https://cdnb.artstation.com/p/assets/images/images/007/367/401/large/z-w-gu-dsassd2.jpg?1505659743" alt="" className="profile-pic"/>
                <div className="profile-name">Girl Cute</div>
                <div className="profile-text">gender:female</div>
                <div className="profile-text">birth-date:7/7/2000</div>
                <div className="profile-text">E-mail:cutegir@mail.com</div>
                <div className="profile-text">Tel:0AB-123-4587</div>
                <button className="profile-button-edit" onClick={()=>setButtonPopupEditProfile(true)}>Edit</button>
                <div className="profile-status">Status:Admin</div>
              </div>

              <div className="profile-card">
                  <h1>Address</h1>
                  <div className="profile-icon"><Gi.GiHouse/></div>
                  <form action="">
                    <div className="profile-text">house number: 12/35</div>
                    <div className="profile-text">road:</div>
                    <div className="profile-text">county:</div>
                    <div className="profile-text">district:</div>
                    <div className="profile-text">province:</div>
                    <div className="profile-text">postal code:</div>
                  </form>
                  <h1></h1>
                  <button className="profile-button-edit" onClick={()=>setButtonPopupEditAddress(true)}>Edit</button>
              </div>
            </div>
            <Menubar/>

            <Popup trigger={buttonPopupEditProfile} setTrigger={setButtonPopupEditProfile}>
                <form action="" className="profile-card-edit-tel">
                    <h1>Telephone-number</h1>
                    <div className="profile-icon"><Gi.GiPhone/></div>
                    <form action="">
                    <div className="profile-text">Tel: <input type="text"/></div>
                    </form>
                    <h1></h1>
                    <button className="profile-button-edit">Confirm-Change</button>
                </form>
            </Popup>

            <Popup trigger={buttonPopupEditAddress} setTrigger={setButtonPopupEditAddress}>
                <form action="" className="profile-card-edit">
                    <h1>Address</h1>
                    <div className="profile-icon"><Gi.GiHouse/></div>
                    <form action="">
                    <div className="profile-text">house number: <input type="text"/></div>
                    <div className="profile-text">road: <input type="password"/></div>
                    <div className="profile-text">county: <input type="text"/></div>
                    <div className="profile-text">district: <input type="text"/></div>
                    <div className="profile-text">province: <input type="text"/></div>
                    <div className="profile-text">postal code: <input type="text"/></div>
                    </form>
                    <h1></h1>
                    <button className="profile-button-edit">Change Address</button>
                </form>
            </Popup>

        </>
     );
}
 
export default Profile;