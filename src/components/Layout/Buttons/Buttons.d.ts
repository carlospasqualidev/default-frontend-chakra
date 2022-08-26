import { ButtonProps } from "@chakra-ui/react";

export interface ButtonIconProps extends ButtonProps {
  text?: string;
  icon: any;
}

export interface ButtonProps extends ButtonProps {
  text: string;
}
