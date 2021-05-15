import Menubar from "../../components/Menubar"
import Narvbar from "../../components/Narvbar"
import * as Gi from "react-icons/gi";
import Popup from "../../components/Popup";
import {useEffect,useState} from 'react';
import axios from "../../axios"

const Profile = () => {
    const [buttonPopupEditProfile, setButtonPopupEditProfile] = useState(false);
    const [buttonPopupEditAddress, setButtonPopupEditAddress] = useState(false);

    const [dataprofile, setdataprofile]=useState([]);
    const [dataAddress, setdataAddress]=useState([]);
    const [dataTrans, setdataTrans]=useState([]);
    const [ID, setID] = useState("");

    useEffect(()=>{
      getProfile();
      getAddress();
      getTransaction();
    },[]);

    const getProfile = ()=>{
        axios
        .get("/ProfileServlet")
        .then((res)=>{
          console.log(res.data[0])
          setdataprofile(res.data[0]);
        })
        .catch((error)=>console.log(error))
    }

    const getAddress = ()=>{
      axios
      .get("/AddressServlet")
      .then((res)=>{
        console.log(res.data)
        setID(res.data.id)
        setdataAddress(res.data)
        setAddressID(res.data.address_number)
      })
      .catch((error)=>console.log(error))
    }

    const getTransaction = ()=>{
      axios
      .get("/OrderServlet")
      .then((res)=>{
        console.log(res.data)
        setdataTrans(res.data)
      })
      .catch((error)=>console.log(error))
    }

    
      const [house_number, sethouse_number] = useState("");
      const [road, setroad] = useState("");
      const [country, setcountry] = useState("");
      const [district, setdistrict] = useState("");
      const [province, setprovince] = useState("");
      const [postal_code, setpostal_code] = useState("");
      const [AddressID, setAddressID] = useState("");

      const submitupdateaddress = (event) => {
          event.preventDefault();
          const formData = new FormData();
          console.log(house_number,road,country,district,province,postal_code,AddressID)
          formData.append("house_number", house_number);
          formData.append("road", road);
          formData.append("country", country);
          formData.append("district", district);
          formData.append("province", province);
          formData.append("postal_code", postal_code);
          formData.append("id",AddressID);
          axios.post("/EditServlet",formData).then((res) => {
          window.location.href = "/profile";
          }).catch((error) =>{
            console.log(error)
          alert(error)
          });
        }

        const [mobile_phone, setmobile_phone] = useState("");

        const submitupdate_tel = (event) => {
          event.preventDefault();
          const formData = new FormData();
          formData.append("telephoneNumber",mobile_phone);
          axios.post("/ChangeServlet",formData).then((res) => {
          window.location.href = "/profile";
          }).catch((error) =>{
          alert(error)
          });
        }

        if (ID == 23) {
          return ( 
            <>
                <Narvbar/>
                <div className="profile">
    
                  <div className="profile-card">
                  <h1>Activity</h1>
                  <div className="profile-icon"><Gi.GiMouthWatering/></div>
                    {dataTrans.map(el => {
                          return(
                      <div className="profile-activity">
                        At {el.timestamp}
                        <br />
                        buy food for {el.amount}$
                      </div>
                      )
                    })}
                  </div>
                  <div className="profile-card">
                    <img src="https://cdnb.artstation.com/p/assets/images/images/007/367/401/large/z-w-gu-dsassd2.jpg?1505659743" alt="" className="profile-pic"/>
                    <div className="profile-name">{dataprofile.firstname} {dataprofile.surname}</div>
                    <div className="profile-text">gender:{dataprofile.gender}</div>
                    <div className="profile-text">birth-date:{dataprofile.birthdate}</div>
                    <div className="profile-text">E-mail:{dataprofile.email}</div>
                    <div className="profile-text">Tel:{dataprofile.telephoneNumber }</div>
                    <button className="profile-button-edit" onClick={()=>setButtonPopupEditProfile(true)}>Edit</button>
                    <div className="profile-status">Status:Admin</div>
                  </div>
    
                  <div className="profile-card">
                      <h1>Address</h1>
                      <div className="profile-icon"><Gi.GiHouse/></div>
                      <form action="">
                        <div className="profile-text">house number: {dataAddress.house_number}</div>
                        <div className="profile-text">road: {dataAddress.road}</div>
                        <div className="profile-text">county: {dataAddress.country}</div>
                        <div className="profile-text">district: {dataAddress.district}</div>
                        <div className="profile-text">province: {dataAddress.province}</div>
                        <div className="profile-text">postal code: {dataAddress.postal_code}</div>
                      </form>
                      <br></br>
                      <button className="profile-button-edit" onClick={()=>setButtonPopupEditAddress(true)}>Edit</button>
                  </div>
                </div>
                <Menubar/>
    
                <Popup trigger={buttonPopupEditProfile} setTrigger={setButtonPopupEditProfile}>
                    <form action="" className="profile-card-edit-tel">
                        <h1>Telephone-number</h1>
                        <div className="profile-icon"><Gi.GiPhone/></div>
                        <form action="">
                        <div className="profile-text">Tel: <input type="text"value={mobile_phone}
                        onChange={(e) => setmobile_phone(e.target.value)}/></div>
                        </form>
                        <h1></h1>
                        <button className="profile-button-edit" onClick={submitupdate_tel}>Confirm-Change</button>
                    </form>
                </Popup>
    
                <Popup trigger={buttonPopupEditAddress} setTrigger={setButtonPopupEditAddress}>
                    <form action="" className="profile-card-edit">
                        <h1>Address</h1>
                        <div className="profile-icon"><Gi.GiHouse/></div>
                        <form action="">
                        <div className="profile-text">house number: <input type="text"value={house_number}
                        onChange={(e) => sethouse_number(e.target.value)}/></div>
                        <div className="profile-text">road: <input type="text" value={road}
                        onChange={(e) => setroad(e.target.value)}/></div>
                        <div className="profile-text">county: <input type="text" value={country}
                        onChange={(e) => setcountry(e.target.value)}/></div>
                        <div className="profile-text">district: <input type="text" value={district}
                        onChange={(e) => setdistrict(e.target.value)}/></div>
                        <div className="profile-text">province: <input type="text" value={province}
                        onChange={(e) => setprovince(e.target.value)}/></div>
                        <div className="profile-text">postal code: <input type="text" value={postal_code}
                        onChange={(e) => setpostal_code(e.target.value)}/></div>
                        </form>
                        <h1></h1>
                        <button className="profile-button-edit" onClick={submitupdateaddress}>Change Address</button>
                    </form>
                </Popup>
    
            </>
          );
        }else
    return ( 
        <>
            <Narvbar/>
            <div className="profile">

              <div className="profile-card">
              <h1>Activity</h1>
              <div className="profile-icon"><Gi.GiMouthWatering/></div>
                {dataTrans.map(el => {
                      return(
                  <div className="profile-activity">
                    At {el.timestamp}
                    <br />
                    buy food for {el.amount}$
                  </div>
                  )
                })}
              </div>
              <div className="profile-card">
                <img src="https://cdnb.artstation.com/p/assets/images/images/007/367/401/large/z-w-gu-dsassd2.jpg?1505659743" alt="" className="profile-pic"/>
                <div className="profile-name">{dataprofile.firstname} {dataprofile.surname}</div>
                <div className="profile-text">gender:{dataprofile.gender}</div>
                <div className="profile-text">birth-date:{dataprofile.birthdate}</div>
                <div className="profile-text">E-mail:{dataprofile.email}</div>
                <div className="profile-text">Tel:{dataprofile.telephoneNumber }</div>
                <button className="profile-button-edit" onClick={()=>setButtonPopupEditProfile(true)}>Edit</button>
                <div className="profile-status">Status:User</div>
              </div>

              <div className="profile-card">
                  <h1>Address</h1>
                  <div className="profile-icon"><Gi.GiHouse/></div>
                  <form action="">
                    <div className="profile-text">house number: {dataAddress.house_number}</div>
                    <div className="profile-text">road: {dataAddress.road}</div>
                    <div className="profile-text">county: {dataAddress.country}</div>
                    <div className="profile-text">district: {dataAddress.district}</div>
                    <div className="profile-text">province: {dataAddress.province}</div>
                    <div className="profile-text">postal code: {dataAddress.postal_code}</div>
                  </form>
                  <br></br>
                  <button className="profile-button-edit" onClick={()=>setButtonPopupEditAddress(true)}>Edit</button>
              </div>
            </div>
            <Menubar/>

            <Popup trigger={buttonPopupEditProfile} setTrigger={setButtonPopupEditProfile}>
                <form action="" className="profile-card-edit-tel">
                    <h1>Telephone-number</h1>
                    <div className="profile-icon"><Gi.GiPhone/></div>
                    <form action="">
                    <div className="profile-text">Tel: <input type="text"value={mobile_phone}
                    onChange={(e) => setmobile_phone(e.target.value)}/></div>
                    </form>
                    <h1></h1>
                    <button className="profile-button-edit" onClick={submitupdate_tel}>Confirm-Change</button>
                </form>
            </Popup>

            <Popup trigger={buttonPopupEditAddress} setTrigger={setButtonPopupEditAddress}>
                <form action="" className="profile-card-edit">
                    <h1>Address</h1>
                    <div className="profile-icon"><Gi.GiHouse/></div>
                    <form action="">
                    <div className="profile-text">house number: <input type="text"value={house_number}
                    onChange={(e) => sethouse_number(e.target.value)}/></div>
                    <div className="profile-text">road: <input type="text" value={road}
                    onChange={(e) => setroad(e.target.value)}/></div>
                    <div className="profile-text">county: <input type="text" value={country}
                    onChange={(e) => setcountry(e.target.value)}/></div>
                    <div className="profile-text">district: <input type="text" value={district}
                    onChange={(e) => setdistrict(e.target.value)}/></div>
                    <div className="profile-text">province: <input type="text" value={province}
                    onChange={(e) => setprovince(e.target.value)}/></div>
                    <div className="profile-text">postal code: <input type="text" value={postal_code}
                    onChange={(e) => setpostal_code(e.target.value)}/></div>
                    </form>
                    <h1></h1>
                    <button className="profile-button-edit" onClick={submitupdateaddress}>Change Address</button>
                </form>
            </Popup>

        </>
      );
}
 
export default Profile;