import { useNavigate, useParams } from "react-router-dom";
import { Flex, Heading } from "@chakra-ui/react";

export const UserDetails = () => {
  let navigate = useNavigate();
  let params = useParams();

  return (
    <Flex w="100%" maxWidth={1480} mx="auto">
      <Heading size="xl">DETAILS</Heading>
    </Flex>
  );
};
