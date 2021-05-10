import * as Gi from "react-icons/gi";

const MyOrderList = (data) => {
    return ( 
        <div>
            <div className="order-list">    
                    <img src={data.data.imageUrl} alt="" className="order-list-pic"/>
                    <div className="order-list-name">{data.data.title}</div>
                    <div className="order-list-price">{data.data.price}</div>
                    <div className="order-list-button" onClick={()=>data.OnRemove(data.data.id)}>
                        <Gi.GiTrashCan/>
                    <div className="order-button-text">remove</div>
                    </div>
            </div>
        </div>
    )
}
 
export default MyOrderList;