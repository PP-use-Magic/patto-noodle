import * as Gi from "react-icons/gi";

const OrderlistInfo = (data) => {
    return ( 
        <div>
         <div className="order-list">
                  <img src={data.data.imageUrl} alt="" className="order-list-pic"/>
                  <div className="order-list-name">{data.data.title}</div>
                  <div className="order-list-price">{data.data.price}</div>
                  <div className="order-list-button">
                      <Gi.GiShoppingCart/>
                      <div className="order-button-text">add</div>
                </div>

                </div>
                <div className="order-list">
                  <p>{data.data.description}</p>
                </div>
        </div>
     );
}
 
export default OrderlistInfo;