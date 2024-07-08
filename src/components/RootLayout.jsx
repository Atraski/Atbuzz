import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Fragment } from "react";

const RootLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
