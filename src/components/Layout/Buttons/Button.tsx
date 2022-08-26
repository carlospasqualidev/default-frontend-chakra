import { Button as ChakraButton } from "@chakra-ui/react";
import { useState } from "react";

//Types

import { ButtonProps } from "./Buttons";

export const Button = ({ text, ...rest }: ButtonProps) => {
  return (
    <ChakraButton
      opacity={0.7}
      colorScheme="blue"
      width="fit-content"
      _hover={{ opacity: "1", transition: "0.25s" }}
      {...rest}
    >
      {text}
    </ChakraButton>
  );
};
