import { Flex, Spinner as ChakrasSpinner } from "@chakra-ui/react";

export const Spinner = () => {
  return (
    <Flex w="100%" h="100vh" align="center" justify="center">
      <ChakrasSpinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  );
};
