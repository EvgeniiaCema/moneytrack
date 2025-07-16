import { useRef } from "react";
import { Outlet } from "react-router-dom";

import { Input } from "@ui/custom/Input/Input";

export function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Outlet />
      <Input ref={inputRef} name="amount" placeholder="Amount" type="number" />
    </div>
  );
}
