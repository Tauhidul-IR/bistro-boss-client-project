// import Footer from "../pages/Shared/Footer/Footer";
// import NavBar from "../pages/Shared/NavBar/NavBar";

import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  //   const location = useLocation();

  //   const noHeaderFooter =
  //     location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
