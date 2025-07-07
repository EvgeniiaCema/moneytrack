import { createBrowserRouter } from "react-router-dom";

import { App } from "../App";
import { Transactions } from "../pages/Transactions/Transactions";
import { WeeklySummary } from "../pages/WeeklySummary/WeeklySummary";
import { MonthlyReport } from "../pages/MonthlyReport/MonthlyReport";
import { FixedExpenses } from "../pages/FixedExpenses/FixedExpenses";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <Transactions /> },
			{ path: "weekly-summary", element: <WeeklySummary /> },
			{ path: "monthly-report", element: <MonthlyReport /> },
			{ path: "fixed-expenses", element: <FixedExpenses /> },
		],
	},
]);
