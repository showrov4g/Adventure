import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const AuthLayout = () => {
  return (
    <div>
        <header>
            <NavBar></NavBar>
        </header>
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        
    </div>
  )
};

export default AuthLayout;
