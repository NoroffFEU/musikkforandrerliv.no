import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTopBtn from "../components/buttons/BackToTopButton"; 

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet /> 
        </main>
        <Footer />
      </div>
      {/* Include the BackToTopButton to be visible on all pages */}
      <BackToTopBtn />
    </>
  );
};

export default MainLayout;
