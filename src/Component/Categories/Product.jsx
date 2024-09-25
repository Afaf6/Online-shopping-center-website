import { useParams, } from "react-router-dom";
import { useEffect, useState } from "react";
import CurrencyuseStore from "../Container/Currency";
import fecebook from "../../../public/Images/akar-icons_facebook-fill.png";
import linked from "../../../public/Images/linkedin.png";
import tweeter from "../../../public/Images/tweeter.png";
import Description from "./Description";
import IconPlus from "../../../public/Images/pluse.png";
import IconMinus from "../../../public/Images/minus.png";
import { useContext } from "react";
import {ShoppingCartContext} from "../ConText/ShoppingCart";
import "./Product.css";


function Product() {
    
    // const AddToCart = useContext(ShoppingCartContext)
   
    // console.log(AddToCart)
   
    const {id} = useParams();
    console.log(id); 
    
    const { addItemAtCart, increaseQuantityItem,decreaseQuantityItem} =  useContext(ShoppingCartContext)
    const quantity = addItemAtCart(id)

    const [ArrayofItem, setArrayofItem] = useState ([]);
    const [localQuantity, setLocalQuantity] = useState(quantity);
   
    
    useEffect(() => {
        function CallApi (){
            fetch('https://fakestoreapi.com/products')
            .then((response) => {return response.json(); })
            .catch((error) => console.error('Error fetching data:', error))
            .then((jewelery) => {
                setArrayofItem(jewelery);
            });
        } CallApi(); } , [] ) ;

        const Item = ArrayofItem.filter(
            (item) => item.id === parseInt(id));

            const handleIncrease = () => {
                setLocalQuantity(prev => prev + 1);
                increaseQuantityItem(parseInt(id));
            };
        
            const handleDecrease = () => {
                if (localQuantity > 1) {
                    setLocalQuantity(prev => prev - 1);
                    decreaseQuantityItem(parseInt(id));
                }
            };
                
        
    return (
        <>
        <div >
            
            {Item.map((item) => (
                <>
                <div id="headerproduct">
                    <p>Home</p>
                    <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="m6 15l5-5l-5-5l1-2l7 7l-7 7z"></path></svg> </span>
                    <p>Shop</p>
                    <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="m6 15l5-5l-5-5l1-2l7 7l-7 7z"></path></svg> </span>
                    <p className="titlename">{item.title}</p>

                </div>
                <>
                <div className="main" key={item.id}>
                <div className="imgproduct" ><img src={item.image} /></div>
                
                <div className="details">
                <h2>{item.title}</h2>
                <span>{CurrencyuseStore(item.price)}</span>
                <p>{item.description}</p> 

                <br></br>

                
                {item.category !== "jewelery" && item.category !== "electronics" && (
                    <>
                <span>Size</span>
                <div className="sizebtn">
                    <button> L </button>
                    <button> XL </button>
                    <button> XS </button>
                </div>
            

                <br></br>

                <span>Color</span>
                <div className="colorbtn">
                    <button><span className="dot1"></span></button>
                    <button><span className="dot2"></span></button>
                    <button><span className="dot3"></span></button>
                </div> </>
                )}
               

                <div className="counter">
                <div className="btn">
                    <button onClick={handleIncrease}><img src={IconPlus} alt="Increase" /></button>
                    <label>{localQuantity}</label>
                    <button onClick={handleDecrease}><img src={IconMinus} alt="Decrease" /></button>
                  </div>
                  <div className="addbtn">
                  <button onClick={handleIncrease}>Add to Cart</button>
                  </div>
                </div>

                

                <div className="supdata">
                    <p> SKU : SS001 </p>
                    <p> Category  :  {item.category}</p>
                    <p> Tags  :  {item.category}, Home, Shop </p>
                    <p className="share">
                        Share  :
                            <img src={fecebook}/>
                            <img src={linked}/>
                            <img src={tweeter}/>
                        
                    </p>
                </div>
                </div>
                </div>

                
                <div>
                    <Description></Description>
                </div>
                </>
                </>
            ) )}
        </div>
        </>
    );
};
export default Product