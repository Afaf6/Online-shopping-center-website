import { useContext } from "react";
import { ShoppingCartContext } from "../../ConText/ShoppingCart";
import { useEffect, useState } from "react";
import CurrencyuseStore from "../../Container/Currency";
import './MiniCart.css';

function MiniCart () {

     const {cartItems, removeItem} = useContext(ShoppingCartContext);
     console.log(cartItems);


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

        const groupedItems = cartItems.reduce((acc, item) => {
            const existing = acc.find(i => i.id === item.id);
            if (existing) {
                existing.quantity += item.quantity; // زيادة الكمية
            } else {
                acc.push(item); // إضافة العنصر الجديد
            }
            return acc;
        }, []);


    return (
        <>
       
       <div>
                {groupedItems.length === 0 ? (
                    <>
                    <p>No Items Added</p> 
                    </>
                ) : (
                    groupedItems.map((item) => {
                        const product = ArrayofItems.find((i) => i.id === item.id);
                        if (product) {
                            return (
                                <div key={item.id}>
                                   
                                    <div id="detailscart">
                                      <img src={product.image} alt={product.title} />

                                      <div>
                                        <h3>{product.title}</h3>
                                         <div id="subprice">
                                            <span>{item.quantity}</span>
                                            <span>{CurrencyuseStore(product.price * item.quantity)}</span>
                                        </div>
                                     </div>  

                                     {item.quantity > 0 && (
                                        <button onClick= {() => removeItem(item.id)} >
                                            <span>X</span>
                                        </button>
                                     )}
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })
                )}
            </div>
        </>
    )
};
export default MiniCart;

