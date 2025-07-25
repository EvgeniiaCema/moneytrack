import { Link } from "react-router-dom";

import type { NavbarItemProps } from "./NavbarItem.interface";

export const NavbarItem = ({ path, Icon }: NavbarItemProps) => {
  return (
    <Link to={path}>
      <Icon />
    </Link>
  );
};
