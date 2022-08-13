import React from 'react';
import { Navbar } from "./Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";


function Layout() {
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center p-2 bg-secondary bg-gradient rounded border border-dark mt-2">
        <div className="d-flex ">
          <Outlet />
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Layout;
