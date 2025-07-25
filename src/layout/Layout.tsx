import { Outlet } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import { NavbarItem } from "./components/NavbarItem/NavbarItem";

import { OPTIONS } from "./Layout.configuration";

import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
      <Navbar options={OPTIONS} onRenderOption={(option) => <NavbarItem key={option.path} {...option} />} />
    </div>
  );
};
