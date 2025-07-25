import { NavLink } from "react-router-dom";
import { Transactions } from "@pages/Transactions/Transactions";

import type { LayoutProps } from "./Layout.interface";

export const Layout = ({ children, className, ...attributes }: LayoutProps): JSX.Element => {
	return (
		<div className={className} {...attributes}>
			<div>{children}</div>
			<nav>
				<NavLink to="/">
					<Transactions />
				</NavLink>
			</nav>
		</div>
	);
};
