
import { Outlet } from "react-router-dom";
import MainNavBar from "../MainNavBar/MainNavBar";


function Layout() {
    return(
        <div>
       <MainNavBar> </MainNavBar>
       <Outlet></Outlet>
         
        </div>
    );
}

export default Layout;