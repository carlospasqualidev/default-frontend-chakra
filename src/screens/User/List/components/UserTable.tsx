//LIBS
import { useState } from "react";
import { UserData } from "../../User";

//UI
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Avatar,
  Tag,
  useDisclosure,
} from "@chakra-ui/react";

// TYPES
import { UserTableProps } from "../List";

//COMPONENTS
import { ModalEditUser } from "./ModalEditUser";

export const UserTable = ({ users, usersList }: UserTableProps) => {
  // const navigate = useNavigate();

  const [userEdit, setUserEdit] = useState<UserData>();

  //MODAIS
  const {
    isOpen: isEditUserOpen,
    onOpen: onEditUserOpen,
    onClose: onEditUserClose,
  } = useDisclosure();

  return (
    <>
      <ModalEditUser
        isOpen={isEditUserOpen}
        onClose={onEditUserClose}
        onOpen={onEditUserOpen}
        userEdit={userEdit}
        setUserEdit={setUserEdit}
        usersList={usersList}
      />

      <TableContainer w="100%">
        <Table variant="simple" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Email</Th>
              <Th>Data</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => {
              return (
                <Tr
                  key={user.id}
                  cursor="pointer"
                  onClick={() => {
                    setUserEdit(user);
                    onEditUserOpen();
                  }}
                >
                  <Td borderRadius="10px 0px 0px 10px">{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>
                    {new Date(user.created_at).toLocaleDateString("pt-br")}
                  </Td>
                  <Td borderRadius="0px 10px 10px 0px">
                    <Tag colorScheme={user.is_active ? "green" : "red"}>
                      {user.is_active ? "Ativo" : "Bloqueado"}
                    </Tag>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
