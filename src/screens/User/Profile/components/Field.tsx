//UI
import { Flex, Text } from "@chakra-ui/react";

//COMPONENTS
import { FieldProps } from "../Profile";

export const Field = ({ title, children }: FieldProps) => {
  return (
    <Flex
      w="100%"
      display="flex"
      align="center"
      h="fit-content"
      bg="white"
      borderRadius="10px"
      p={2}
      mb={2}
      direction={["column", "row"]}
    >
      <Text w="100%" minW="250px" fontSize={["1xl", "2xl"]}>
        {title}
      </Text>
      <Flex w="100%" minW="250px" fontSize={["md", "mx"]}>
        {children}
      </Flex>
    </Flex>
  );
};
