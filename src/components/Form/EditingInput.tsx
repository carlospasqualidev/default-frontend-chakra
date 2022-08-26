import {
  Text,
  FormControl,
  FormErrorMessage,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

import { InputUnstyledProps } from "./Form";

const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputUnstyledProps
> = ({ name, editing, error, value, label, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {editing ? (
        <>
          <ChakraInput
            name={name}
            id={name}
            w="100%"
            value={value}
            size="lg"
            ref={ref}
            {...rest}
          />
          {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </>
      ) : (
        <Text py="10.5px" px="17px" fontSize="lg">
          {label}
        </Text>
      )}
    </FormControl>
  );
};
export const EditingInput = forwardRef(InputBase);
