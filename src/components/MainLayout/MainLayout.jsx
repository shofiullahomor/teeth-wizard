import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import Modal from "../Modal";

const MainLayout = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Modal></Modal>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
