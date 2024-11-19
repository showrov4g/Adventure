import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const AuthLayout = () => {
  return (
    <div>
        <header>
            <NavBar></NavBar>
        </header>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
};

export default AuthLayout;
