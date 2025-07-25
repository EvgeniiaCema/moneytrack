import type { NavbarProps } from "./Navbar.interface";

import styles from "./Navbar.module.scss";

export const Navbar = ({ options, onRenderOption }: NavbarProps) => {
  return <div>{options.map(onRenderOption)}</div>;
};
