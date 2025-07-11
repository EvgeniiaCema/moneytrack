import { Link, Outlet } from "react-router-dom";
import { Input } from "./shared/ui/custom/Input/Input";
import { Button } from "./shared/ui/custom/Button/Button";

export function App() {
	return (
		<div>
			<nav style={{ display: "flex", gap: "1rem" }}>
				<Link to="/">Transactions</Link>
				<Link to="/weekly-summary">Weekly Summary</Link>
				<Link to="/monthly-report">Monthly Report</Link>
				<Link to="/fixed-expenses">Fixed Expenses</Link>
			</nav>
			<hr />
			<Outlet />
			<Input />
			<Button>button</Button>
		</div>
	);
}
