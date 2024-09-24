import {Link} from "react-router-dom";
import './MainNavBar.css' ;
import logo from "../../../public/Images/Meubel House_Logos-05.png";
import vector from "../../../public/Images/Vector.png";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../ConText/ShoppingCart";
import MiniCart from "../TopPages/Cart/MiniCart";


function MainNavBar () {


    const {getTotalQuantity} = useContext(ShoppingCartContext);
    
    // console.log(quantity)
    
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <nav id="navbar">
          <div id="logo">
            <img src={logo}/>
             <h1 id="maintitle"> Furniro </h1>
          </div>
                
               <div id="section">
                
                  <ul className="open">
                           <li>
                             <Link to = "/"> Home </Link>
                           </li>
                           <li>
                             <Link to = "/Shop"> Shop </Link>
                           </li>
                           <li>
                            <br></br>
                           </li>
                           <li>
                             <Link to = "/Contact"> Contact </Link>
                           </li>
                       </ul>
                 
               </div>
               <div id="profil" >
                   <div onClick={() => setIsOpen(!isOpen)}>
                   
                     <img src={vector} />
                     <span className="note">{getTotalQuantity()}</span>
      

                    {isOpen && (
                      <div className="toggelcart">
                        <header id="header">
                         <h1>
                          Shopping Cart 
                        </h1>
                        </header>
                         <MiniCart></MiniCart>

                         <Link to = "/Cart" ><button>Cart</button> </Link>
                      </div>
                       )}
                   </div>
        </div>
       </nav>
        </>
    );
}
export default MainNavBar; 
