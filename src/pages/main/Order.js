import Menubar from "../../components/Menubar"
import Narvbar from "../../components/Narvbar"
import * as Gi from "react-icons/gi";
import {useEffect, useState} from 'react';
import Popup from "../../components/Popup";
import axios from "../../axios";
import Orderlist from "../../components/Orderlist";
import MyOrderList from "../../components/MyOrderList"

const Order = () => {
    
    const [buttonPopupCheckout, setButtonPopupCheckout] = useState(false);

    const [data, setdata]=useState([]);
    const [myorder, setmyorder]=useState([]);

    const OnAdd=(id)=>{
        const updateorder=[...myorder,id];
        setmyorder(updateorder);
    }

    const OnRemove=(id)=>{
        const removeorder=[...myorder]
        const removeIndex = removeorder.findIndex(ele => ele == id)
        removeorder.splice(removeIndex, 1)
        setmyorder(removeorder);
    }
    
    useEffect(()=>{
        fetchProducts();
    },[]);

    const fetchProducts = ()=>{
        axios
        .get("/ProductServlet")
        .then((res)=>{
            setdata(res.data);
        })
        .catch((error)=>console.log(error))
    }

    return ( 
        <>
            <Narvbar/>
            <div className="order">
            <div className="order-menu">
                  <div className="order-button">
                      <Gi.GiNoodles/>
                      <div className="order-button-text">Noodle</div>
                  </div>

                  <div className="order-button">
                      <Gi.GiTeapotLeaves/>
                      <div className="order-button-text">Drink</div>
                  </div>

                  <div className="order-button">
                      <Gi.GiIceCreamCone/>
                      <div className="order-button-text">Snacks</div>
                  </div>

                  <div className="order-button">
                      <Gi.GiSpellBook/>
                      <div className="order-button-text">Order</div>
                  </div>
              </div>

              <div className="order-container">
                {data.map(el => {
                    return(
                        <Orderlist key={el.id} data={el} OnAdd={OnAdd}/>
                    )
                })}
              </div>

              <div className="order-myorder">
                  <div className="order-button">
                      <Gi.GiMouthWatering/>
                      <div className="order-button-text">My Order</div>
                  </div>
              </div>
              <div className="order-container">
                {myorder.map(el => {
                    const myorderinfo = data.find(ele => ele.id == el)
                    console.log(myorderinfo)
                    return(
                        <MyOrderList data={myorderinfo} OnRemove={OnRemove}/>
                    )
                })}
                <button className="order-checkout-button" onClick={()=>setButtonPopupCheckout(true)}>check-out</button>
              </div>
            </div>
            <Menubar/>

            

            <Popup trigger={buttonPopupCheckout} setTrigger={setButtonPopupCheckout}>
                <div className="order-checkout">Confirmed Check-out</div>
                <div className="order-container">
                    <div className="order-list">
                        <img src="https://cdnb.artstation.com/p/assets/images/images/021/130/905/large/kenny-vo-ramen-01-v1-kv.jpg?1570506153" alt="" className="order-list-pic"/>
                        <div className="order-list-name">Noodle</div>
                        <div className="order-list-price">50$</div>
                        <div className="order-list-button">
                        </div>
                    </div>
                    <button className="order-checkout-button">Confirm-buy</button>
                </div>
            </Popup>
        </>
     );
}
 
export default Order;