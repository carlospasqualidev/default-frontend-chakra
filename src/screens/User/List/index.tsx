//LIBS
import { useEffect, useState } from "react";

//UI
import { Flex, Heading, useDisclosure, Text } from "@chakra-ui/react";
import { RiAddCircleLine } from "react-icons/ri";

//COMPONENTS
import { UserTable } from "./components/UserTable";

//TYPES
import { UserData } from "../User";
import { Spinner } from "../../../components/Layout/Spinner/Spinner";

// EXCLUIR
import { ButtonIcon } from "../../../components/Layout/Buttons/ButtonIcon";
import { Api } from "../../../services/api";
import { ModalCreateUser } from "./components/ModalCreateUser";

export const UsersList = () => {
  const [usersData, setUsersData] = useState<UserData[]>();
  const [loading, setLoading] = useState<boolean>(true);
  //MODAIS
  const {
    isOpen: isCreatetUserOpen,
    onOpen: onCreateUserOpen,
    onClose: onCreateUserClose,
  } = useDisclosure();

  async function usersList() {
    await Api.get("/collab/list ").then((res) => {
      setUsersData(res.data);
      setLoading(false);
    });
  }

  useEffect(() => {
    usersList();
  }, []);

  return (
    <>
      <ModalCreateUser
        isOpen={isCreatetUserOpen}
        onClose={onCreateUserClose}
        usersList={usersList}
      />

      {loading ? (
        <Spinner />
      ) : (
        <Flex
          w="100%"
          h="100vh"
          maxWidth={1480}
          mx="auto"
          direction="column"
          p={4}
        >
          <Flex>
            <Heading size="xl" marginBottom="24px">
              Colaboradores
            </Heading>
            <ButtonIcon
              icon={RiAddCircleLine}
              text="Cadastrar usuario"
              onClick={() => {
                onCreateUserOpen();
              }}
            />
          </Flex>

          <Flex w="100%" h="100%" overflowY="auto" maxWidth={1480} mx="auto">
            {usersData?.length ? (
              <UserTable users={usersData!} usersList={usersList} />
            ) : (
              <Flex w="100%" align="center" justify="center">
                <Text fontSize="2xl">Nenhum colaborador cadastrado.</Text>
              </Flex>
            )}
          </Flex>
        </Flex>
      )}
    </>
  );
};
