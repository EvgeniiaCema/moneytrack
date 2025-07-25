import { Layout } from "@layout/Layout";
import { Outlet } from "react-router-dom";

export function App() {
	return (
		<div>
			<Layout>
				<Outlet />
			</Layout>
		</div>
	);
}
