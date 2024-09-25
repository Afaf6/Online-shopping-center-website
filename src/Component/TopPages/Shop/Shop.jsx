import "./Shop.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CurrencyuseStore from "../../Container/Currency";
import background from "../../../../public/Images/background-1.png";
import { useContext } from "react";
import { ShoppingCartContext } from "../../ConText/ShoppingCart";


function Shop() {

    const { category } = useParams();


    // const {addItemAtCart} =  useContext(ShoppingCartContext);
    const { increaseQuantityItem } = useContext(ShoppingCartContext);


    const [ArrayofItems, setArrayofItems] = useState([]);


    useEffect(() => {
        function CallApi() {
            fetch('https://fakestoreapi.com/products')
                .then((response) => { return response.json(); })
                .catch((error) => console.error('Error fetching data:', error))
                .then((finalResult) => {
                    setArrayofItems(finalResult);
                });
        } CallApi();
    }, []);


    const filteredItems = category ? ArrayofItems.filter(item => item.category === category) : ArrayofItems;

    return (
        <>
            <div id="background" >
                <img src={background} />
                <div className="overflow">
                    <h1>Shop</h1>
                    <div className="pagestitle">
                        <h5>Home</h5>
                        <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="m6 15l5-5l-5-5l1-2l7 7l-7 7z"></path></svg> </span>
                        <h6>Shop</h6>
                    </div>
                </div>
            </div>

            <div id="boxproduct">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <div id="labelitem" key={item.id}>
                            <>
                                <Link to={`/shop/${item.category}/${item.id}`}>
                                    <div className="product">
                                        <img className="" src={item.image} alt={item.title} />
                                        <div key={item.id} className="showbtn">
                                            <button onClick={(e) => { e.preventDefault(); increaseQuantityItem(item.id) }} className="fullscreen">Add to cart</button>
                                        </div>
                                        <div className="titledetails">
                                            <div className="textproduct">
                                                <h2>{item.title}</h2>
                                                <p>{item.category}</p>
                                                <span>{CurrencyuseStore(item.price)}</span>
                                            </div>
                                        </div>


                                    </div>
                                </Link>

                            </>

                        </div>
                    ))
                ) : (
                    <p>No products available in this category.</p>
                )}
            </div>



        </>
    );
}
export default Shop;