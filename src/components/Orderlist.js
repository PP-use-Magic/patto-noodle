import * as Gi from "react-icons/gi";
import Popup from "../components/Popup"
import {useEffect, useState} from 'react';
import OrderlistInfo from './OrderlistInfo';

const Orderlist = (data) => {
    console.log(data);
    const [buttonPopupList, setButtonPopupList] = useState(false);
    
    const OnOrderList=(id)=>{
        console.log(id)
        setButtonPopupList(true)
    }
    return ( 
        <>
        <div className="order-list" >
                        <img src={data.data.imageUrl} alt="" className="order-list-pic" onClick={OnOrderList}/>
                        <div className="order-list-name" onClick={OnOrderList}>{data.data.title}</div>
                        <div className="order-list-price">{data.data.price}</div>
                        <div className="order-list-button" onClick={()=>data.OnAdd(data.data.id)}>
                        <Gi.GiShoppingCart/>
                        <div className="order-button-text">add</div>
            </div>
        </div>
        
        <Popup trigger={buttonPopupList} setTrigger={setButtonPopupList} >
            <OrderlistInfo data={data.data}/>
        </Popup>
        </>
     );
}
 
export default Orderlist;
