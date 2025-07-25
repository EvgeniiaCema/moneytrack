import type { IconType } from "react-icons";
import type { ReactElement } from "react";

interface OptionSchema {
  Icon: IconType;
  path: string;
}

export interface NavbarProps {
  options: OptionSchema[];
  onRenderOption: (option: OptionSchema) => ReactElement;
}
