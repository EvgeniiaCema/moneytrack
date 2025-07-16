import { Outlet } from "react-router-dom";

import { Input } from "./shared/ui/custom/Input/Input";
import { Button } from "./shared/ui/custom/Button/Button";

export function App() {
	return (
		<div>
			<Outlet />
			<Input placeholder="Amount" type="number" />
			<Button variant="transparent" size="big">
				test
			</Button>
		</div>
	);
}
