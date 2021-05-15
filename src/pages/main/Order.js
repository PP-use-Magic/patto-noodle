import Menubar from "../../components/Menubar"
import Narvbar from "../../components/Narvbar"
import * as Gi from "react-icons/gi";
import {useEffect, useState} from 'react';
import Popup from "../../components/Popup";
import axios from "../../axios";
import Orderlist from "../../components/Orderlist";
import MyOrderList from "../../components/MyOrderList"
import { from } from "form-data";

const Order = () => {
    
    const [buttonPopupCheckout, setButtonPopupCheckout] = useState(false);
    const [buttonPopupAddproduct, setButtonPopupAddproduct] = useState(false);

    const [data, setdata]=useState([]);
    const [displaydata, setdisplaydata]=useState([]);
    const [myorder, setmyorder]=useState([]);
    const [ID, setID]=useState([]);

    const getAddress = ()=>{
        axios
        .get("/AddressServlet")
        .then((res)=>{
          console.log(res.data.id)
          setID(res.data.id)
        })
        .catch((error)=>console.log(error))
      }

    const onNoodle = () => {
        const newData = data.filter(data => data.product_type==1);
        setdisplaydata(newData);
        console.log(newData)
    };

    const onDrink = () => {
        const newData = data.filter(data => data.product_type==2);
        setdisplaydata(newData);
        console.log(newData)
    };

    const onSnacks = () => {
        const newData = data.filter(data => data.product_type==3);
        setdisplaydata(newData);
        console.log(newData)
    };

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
        getAddress();
    },[]);

    const fetchProducts = ()=>{
        axios
        .get("/ProductServlet")
        .then((res)=>{
            setdata(res.data);
            setdisplaydata(res.data.filter(data => data.product_type==1));
        })
        .catch((error)=>console.log(error))
    }
    
    const [title, settitle]=useState([]);
    const [imageUrl, setimageUrl]=useState([]);
    const [price, setprice]=useState([]);
    const [product_type, setproduct_type]=useState([]);
    const [description, setdescription]=useState([]);

    const OnAddProduct = (event) => {
        console.log()
        event.preventDefault();
        const formData = new FormData();
        formData.append("title",title);
        formData.append("imageUrl",imageUrl);
        formData.append("price",price);
        formData.append("product_type",product_type);
        formData.append("description",description);
        axios.post("/AddProductServlet",formData).then((res) => {
        window.location.href = "/order";
        }).catch((error) =>{
        alert(error)
        });
      }


    const OnConfirmbuy = (event) => {
        console.log(myorder)
        event.preventDefault();
        const formData = new FormData();
        formData.append("myorder",myorder);
        axios.post("/OrderServlet",formData).then((res) => {
        window.location.href = "/order";
        alert("Success transaction! Collect money at destination enjoy your food :)")
        }).catch((error) =>{
        alert(error)
        });
      }
    
    if (ID == 23) {
        return ( 
            <>
                <Narvbar/>
                <div className="order">
                <div className="order-menu">
                      <div className="order-button" onClick={onNoodle}>
                          <Gi.GiNoodles/>
                          <div className="order-button-text">Noodle</div>
                      </div>
    
                      <div className="order-button" onClick={onDrink}>
                          <Gi.GiTeapotLeaves/>
                          <div className="order-button-text">Drink</div>
                      </div>
    
                      <div className="order-button" onClick={onSnacks}>
                          <Gi.GiIceCreamCone/>
                          <div className="order-button-text">Snacks</div>
                      </div>
                    
                      <div className="order-button" onClick={()=>setButtonPopupAddproduct(true)}>
                          <Gi.GiSpellBook/>
                          <div className="order-button-text">Add-Product</div>
                      </div>
    
                  </div>
    
                  <div className="order-container">
                    {displaydata.map(el => {
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
                        {myorder.map(el => {
                            const myorderinfo = data.find(ele => ele.id == el)
                            console.log(myorderinfo)
                            return(
                                <MyOrderList data={myorderinfo} OnRemove={OnRemove}/>
                            )
                        })}
                        <button className="order-checkout-button" onClick={OnConfirmbuy}>Confirm-buy</button>
                    </div>
                </Popup>
    
                <Popup trigger={buttonPopupAddproduct} setTrigger={setButtonPopupAddproduct}>
                    <div className="order-checkout">Confirmed Check-out</div>
                    <div className="order-container">
                    <form className="addproductform">
                        <h1>Add Product</h1>
                            <p>title</p>
                            <input
                            type="text"
                            value={title}
                            onChange={(e) => settitle(e.target.value)}
                            placeholder="title"
                            />
                            <br />
                            <p>image-Url</p>
                            <input
                            type="text"
                            value={imageUrl}
                            onChange={(e) => setimageUrl(e.target.value)}
                            placeholder="image-Url"
                            />
                            <br />
                            <p>price</p>
                            <input
                            type="number"
                            value={price}
                            onChange={(e) => setprice(e.target.value)}
                            placeholder="price"
                            />
                            <br />
                            <p>product-type</p>
                            <input
                            type="number"
                            value={product_type}
                            onChange={(e) => setproduct_type(e.target.value)}
                            placeholder="1=noodle,2=drink,3=snacks"
                            />
                            <br />
                            <p>description</p>
                            <input
                            type="text"
                            value={description}
                            onChange={(e) => setdescription(e.target.value)}
                            placeholder="description"
                            />
                            <br />
                            <button className="order-checkout-button" onClick={OnAddProduct}>Confirm-Add</button>
                        </form>
                    </div>
                </Popup>
            </>
         );
    }else
    return ( 
        <>
            <Narvbar/>
            <div className="order">
            <div className="order-menu">
                  <div className="order-button" onClick={onNoodle}>
                      <Gi.GiNoodles/>
                      <div className="order-button-text">Noodle</div>
                  </div>

                  <div className="order-button" onClick={onDrink}>
                      <Gi.GiTeapotLeaves/>
                      <div className="order-button-text">Drink</div>
                  </div>

                  <div className="order-button" onClick={onSnacks}>
                      <Gi.GiIceCreamCone/>
                      <div className="order-button-text">Snacks</div>
                  </div>
                
                  {/* <div className="order-button" onClick={()=>setButtonPopupAddproduct(true)}>
                      <Gi.GiSpellBook/>
                      <div className="order-button-text">Add-Product</div>
                  </div> */}

              </div>

              <div className="order-container">
                {displaydata.map(el => {
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
                    {myorder.map(el => {
                        const myorderinfo = data.find(ele => ele.id == el)
                        console.log(myorderinfo)
                        return(
                            <MyOrderList data={myorderinfo} OnRemove={OnRemove}/>
                        )
                    })}
                    <button className="order-checkout-button" onClick={OnConfirmbuy}>Confirm-buy</button>
                </div>
            </Popup>

            <Popup trigger={buttonPopupAddproduct} setTrigger={setButtonPopupAddproduct}>
                <div className="order-checkout">Confirmed Check-out</div>
                <div className="order-container">
                <form className="addproductform">
                    <h1>Add Product</h1>
                        <p>title</p>
                        <input
                        type="text"
                        value={title}
                        onChange={(e) => settitle(e.target.value)}
                        placeholder="title"
                        />
                        <br />
                        <p>image-Url</p>
                        <input
                        type="text"
                        value={imageUrl}
                        onChange={(e) => setimageUrl(e.target.value)}
                        placeholder="image-Url"
                        />
                        <br />
                        <p>price</p>
                        <input
                        type="number"
                        value={price}
                        onChange={(e) => setprice(e.target.value)}
                        placeholder="price"
                        />
                        <br />
                        <p>product-type</p>
                        <input
                        type="number"
                        value={product_type}
                        onChange={(e) => setproduct_type(e.target.value)}
                        placeholder="1=noodle,2=drink,3=cake"
                        />
                        <br />
                        <p>description</p>
                        <input
                        type="text"
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                        placeholder="description"
                        />
                        <br />
                        <button className="order-checkout-button" onClick={OnAddProduct}>Confirm-Add</button>
                    </form>
                </div>
            </Popup>
        </>
     );
}
 
export default Order;