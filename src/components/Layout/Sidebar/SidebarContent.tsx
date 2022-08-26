//UI
import { Avatar, Flex, Spacer, Box } from "@chakra-ui/react";
import {
  RiGroupLine,
  RiSettings3Line,
  RiUserReceived2Line,
} from "react-icons/ri";

//NAVEGATION
import { useNavigate } from "react-router-dom";
import { SidebarProps } from "../../../types/Sidebar";

//COMPONENTS
import { ButtonIcon } from "../Buttons/ButtonIcon";

export const SidebarContent = ({ bg }: SidebarProps) => {
  let navigate = useNavigate();

  const Items = [
    { icon: RiGroupLine, text: "Usuários", url: "/users" },
    { icon: RiSettings3Line, text: "Configurações", url: "/profile" },
    { icon: RiUserReceived2Line, text: "Sair", url: "/login" },
  ];

  return (
    <Flex
      id="Sidebar-Content"
      width="100%"
      h="100%"
      bg={bg}
      direction="column"
      align="center"
      borderEndRadius="10px"
      p={4}
    >
      <Avatar
        size="lg"
        borderRadius="10px"
        src="https://media.licdn.cn/dms/image/C560BAQFOz2uk8nPbdw/company-logo_200_200/0/1630525839256?e=2159024400&v=beta&t=I5JFbCRnWFZLFCOGgeDZT3gI2AeHy7mMmoY38nqnQJo"
      />
      {Items.map((element, i: number) => {
        return (
          <>
            {i === Items.length - 1 && <Spacer h="100%" />}
            <ButtonIcon
              key={i}
              icon={element.icon}
              text={element.text}
              mt={3}
              opacity={
                window.location.pathname.startsWith(element.url) ? "1" : "0.7"
              }
              onClick={() => {
                navigate(element.url);
              }}
            />
          </>
        );
      })}
    </Flex>
  );
};
