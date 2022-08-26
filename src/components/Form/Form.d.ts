import { InputProps as ChakraInputProps } from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

export interface InputProps extends ChakraInputProps {
  name: firstName;
  label?: string;
  error?: FieldError;
}

export interface InputUnstyledProps extends ChakraInputProps {
  name: firstName;
  editing: boolean;
  label: string | undefined;
  error?: FieldError;
}
