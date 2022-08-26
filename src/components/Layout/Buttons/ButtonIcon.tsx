import { Icon, Text, Button, Tooltip } from "@chakra-ui/react";
import { useState } from "react";

//Types

import { ButtonIconProps } from "./Buttons";

export const ButtonIcon = ({ text, icon, ...rest }: ButtonIconProps) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  return (
    <Tooltip
      placement="auto"
      openDelay={500}
      label={text}
      isDisabled={showTooltip}
    >
      <Button
        onMouseEnter={() => {
          setShowTooltip(true);
        }}
        onMouseLeave={() => {
          setShowTooltip(false);
        }}
        variant="unstyled"
        outline="none"
        opacity={0.7}
        _hover={{ opacity: "1", transition: "0.25s" }}
        _focus={{ outline: "none" }}
        {...rest}
      >
        <Icon w={6} h={6} as={icon} color="black" />
      </Button>
    </Tooltip>
  );
};
