import { Flex } from "@chakra-ui/react";

import { Outlet } from "react-router-dom";

import { SidebarBody } from "./SidebarBody";

export const Sidebar = () => {
  return (
    <Flex h="100vh">
      <SidebarBody bg="white" />

      <Flex
        id="App-Content"
        w="100%"
        margin="0px 16px 0px 116px"
        h="fit-content"
      >
        <Outlet />
      </Flex>
    </Flex>
  );
};
