
import './App.css'
import ShoppingCartProvider from './Component/ConText/ShoppingCart';
import Footer from "./Component/Footer/Footer"
import Fram from "./Component/Fram/Fram";
import TopNav from "./Component/TopNav/TopNav";

function App() {

  return (
    <>
    <ShoppingCartProvider>
     <TopNav></TopNav>

     <Fram></Fram> 
     <Footer></Footer>

    </ShoppingCartProvider>
    
    </>
  )
}

export default App;
