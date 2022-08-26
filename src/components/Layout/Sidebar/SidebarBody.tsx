//UI
import { Flex } from "@chakra-ui/react";
//COMPONENTS
import { SidebarContent } from "./SidebarContent";
import { SidebarProps } from "../../../types/Sidebar";

export const SidebarBody = ({ bg }: SidebarProps) => {
  return (
    <Flex position="fixed" h="100vh" w="96px">
      <SidebarContent bg={bg} />
    </Flex>
  );
};
