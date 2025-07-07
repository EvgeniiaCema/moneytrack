import { Link, Outlet } from "react-router-dom";

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
		</div>
	);
}
