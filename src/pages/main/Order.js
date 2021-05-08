import Menubar from "../../components/Menubar"
import Narvbar from "../../components/Narvbar"
import * as Gi from "react-icons/gi";
import {useState} from 'react';
import Popup from "../../components/Popup";

const Order = () => {
    const [buttonPopupList, setButtonPopupList] = useState(false);
    const [buttonPopupCheckout, setButtonPopupCheckout] = useState(false);
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
                
                <div className="order-list" onClick={()=>setButtonPopupList(true)}>
                  <img src="https://cdnb.artstation.com/p/assets/images/images/021/130/905/large/kenny-vo-ramen-01-v1-kv.jpg?1570506153" alt="" className="order-list-pic"/>
                  <div className="order-list-name">Noodle</div>
                  <div className="order-list-price">50$</div>
                  <div className="order-list-button">
                      <Gi.GiShoppingCart/>
                      <div className="order-button-text">add</div>
                  </div>

                </div>

              </div>
              <div className="order-myorder">
                  <div className="order-button">
                      <Gi.GiMouthWatering/>
                      <div className="order-button-text">My Order</div>
                  </div>
              </div>
              <div className="order-container">
                <div className="order-list">
                  <img src="https://cdnb.artstation.com/p/assets/images/images/021/130/905/large/kenny-vo-ramen-01-v1-kv.jpg?1570506153" alt="" className="order-list-pic"/>
                  <div className="order-list-name">Noodle</div>
                  <div className="order-list-price">50$</div>
                  <div className="order-list-button">
                      <Gi.GiTrashCan/>
                      <div className="order-button-text">remove</div>
                  </div>
                </div>
                <button className="order-checkout-button" onClick={()=>setButtonPopupCheckout(true)}>check-out</button>
              </div>
            </div>
            <Menubar/>

            <Popup trigger={buttonPopupList} setTrigger={setButtonPopupList}>
                <div className="order-list">
                  <img src="https://cdnb.artstation.com/p/assets/images/images/021/130/905/large/kenny-vo-ramen-01-v1-kv.jpg?1570506153" alt="" className="order-list-pic"/>
                  <div className="order-list-name">Noodle</div>
                  <div className="order-list-price">50$</div>
                  <div className="order-list-button">
                      <Gi.GiShoppingCart/>
                      <div className="order-button-text">add</div>
                  </div>

                </div>
                <div className="order-list">
                  <p>ราเม็ง เป็นบะหมี่น้ำของญี่ปุ่น ซึ่งมีต้นกำเนิดมาจากประเทศจีน ราเม็งมักจะทานกับเนื้อหมู สาหร่าย คามาโบโกะ ต้นหอม และบางครั้งจะมีข้าวโพด ราเม็งมีการปรุงรสแตกต่างกันตามแต่ละจังหวัดในญี่ปุ่น เช่นในเกาะคีวชู ต้นกำเนิดของราเม็งทงกตสึ หรือในเกาะฮกไกโด ต้นกำเนิดของราเม็งมิโซะ</p>
                </div>
            </Popup>

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