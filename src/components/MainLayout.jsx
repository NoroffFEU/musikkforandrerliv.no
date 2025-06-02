import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import { Outlet } from "react-router-dom";
import BackToTopButton from "./buttons/BackToTop";

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
      <BackToTopButton />
    </>
  );
}
export default MainLayout;