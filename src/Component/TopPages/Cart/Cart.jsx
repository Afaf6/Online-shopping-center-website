import { useContext } from "react";
import { ShoppingCartContext } from "../../ConText/ShoppingCart";
import { useEffect, useState } from "react";
import RemovIcon from "../../../../public/Images/Remove.png";
import CurrencyuseStore from "../../Container/Currency";
import logo from "../../../../public/Images/Meubel House_Logos-05.png";
import background from "../../../../public/Images/background-1.png";

import './Cart.css';


function Cart () {
    
    const {cartItems, removeItem, getTotalPrice} = useContext(ShoppingCartContext);

    const [ArrayofItems, setArrayofItems] = useState ([]);

    useEffect(() =>{
        function CallApi (){
            fetch('https://fakestoreapi.com/products')
            .then((response) => {return response.json(); })
            
            .catch((error) => console.error('Error fetching data:', error))
            .then((finalResult) =>{
              setArrayofItems(finalResult);
            });
        } CallApi();}, [] ) ;


    return (
        <>
        
        <div id="background" >
            <img src={background}/>
            <div className="overflow">
            <img className="logo" src={logo}/>
                <h1>Contact</h1>
                <div className="pagestitle">
                    <h5>Home</h5>
                    <span> </span>
                    <h6>Contact</h6>
                </div>
            </div>
        </div>
        <div id="tableshap">
        <table>
            <thead id="headertable">
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody id="bodytable">
                {cartItems.length === 0 ? (
                    <tr>
                        <td colSpan="5">No Items Added</td>
                    </tr>
                ) : (
                    cartItems.map((item) => {
                        const product = ArrayofItems.find((i) => i.id === item.id);
                        if (product) {
                            return (
                                <tr key={item.id}>
                                    <td >
                                        <div className="itemimg">
                                            <img src={product.image} alt={product.title} />
                                            <p>{product.title}</p>
                                        </div>
                                    </td>
                                    <td>{CurrencyuseStore(product.price)}</td>
                                    <td><p>
                                        {item.quantity}
                                        </p></td>
                                    <td>
                                        <div className="btnremove">
                                            <h4>{CurrencyuseStore(product.price * item.quantity)}</h4>
                                            <button onClick={() => removeItem(item.id)}>
                                                <img src={RemovIcon}  alt="Remove" />
                                            </button>
                                            
                                        </div>
                                    </td>
                                </tr>
                            );
                        }
                        return null;
                    })
                )}
            </tbody>
        </table>

        {cartItems.length > 0 && (
            <div id="pricedetails">
                <h2>Card Totals</h2>
                <div className="checkprice">
                    <div className="totalprice">
                        <h4>Subtotal</h4>
                        <p>{CurrencyuseStore(getTotalPrice(ArrayofItems))}</p>
                    </div>
                    <div className="totalprice">
                        <h4>Total</h4>
                        <p className="gold">{CurrencyuseStore(getTotalPrice(ArrayofItems))}</p>
                    </div>
                </div>
                <button className="checkbtn">Check Out</button>
            </div>
        )}
    </div>
    </>
    )
};
export default Cart ;
