import Navigation from "../components/Navigation";
import MenuNavigation from "../components/MenuNavigation";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FooterOne from "../components/FooterOne";


const RootLayout = () => {
  return (<>
    <>
      <Navigation />
    </>
    <Outlet />
    <Footer />
    <FooterOne />

  </>);
}

export default RootLayout;