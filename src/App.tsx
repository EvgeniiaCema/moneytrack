import { Outlet } from "react-router-dom";

import { Input } from "./shared/ui/custom/Input/Input";
import { Button } from "./shared/ui/custom/Button/Button";

export function App() {
  return (
    <div>
      <Outlet />
      <Input />
      <Button variant="yellow" size="small">
        test
      </Button>
    </div>
  );
}
