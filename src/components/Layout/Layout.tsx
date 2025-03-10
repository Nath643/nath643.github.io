import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
