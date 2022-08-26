//LIBS
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

//UI
import { Avatar, Flex, HStack, VStack, Text, Tag } from "@chakra-ui/react";
import { RiBallPenLine, RiDeleteBin6Line } from "react-icons/ri";

//COMPONENTS
import { ButtonIcon } from "../../../../components/Layout/Buttons/ButtonIcon";
import { Button } from "../../../../components/Layout/Buttons/Button";
import { Modal } from "../../../../components/Layout/Modal/Modal";
import { EditingInput } from "../../../../components/Form/EditingInput";

//TYPES
import { ModalEditUserProps } from "../List";
import { FormData } from "../List";
import { Api } from "../../../../services/api";

export const ModalEditUser = ({
  isOpen,
  onClose,
  onOpen,
  userEdit,
  setUserEdit,
  usersList,
}: ModalEditUserProps) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [onQuery, setOnQuery] = useState<boolean>(false);

  //YUP VALIDATION
  const schema = yup
    .object({
      name: yup.string().required(),
      email: yup.string().email().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  //SUBMIT
  const onSubmit = handleSubmit(async (data) => {
    setOnQuery(true);
    await Api.put(`/collab/update/${userEdit?.id}`, data)
      .then(() => {
        usersList();
        setEditing(false);
        setOnQuery(false);
        onClose(true);
      })
      .catch(() => {
        setOnQuery(false);
      });
  });

  async function changeUserStatus() {
    setOnQuery(true);
    await Api.put(`/collab/updateStatus/${userEdit?.id}`)
      .then(() => {
        usersList();
        setUserEdit({ ...userEdit, is_active: !userEdit?.is_active });
        setEditing(false);
        setOnQuery(false);
      })
      .catch(() => {
        setOnQuery(false);
      });
  }

  async function deleteUser() {
    setOnQuery(true);
    onClose(true);

    await Api.delete(`/collab/delete/${userEdit?.id}`)
      .then(() => {
        usersList();

        setOnQuery(false);
      })
      .catch(() => {
        setOnQuery(false);
      });
  }

  return (
    <Modal title="Usuário" isOpen={isOpen} onClose={onClose} size="sm">
      <Flex justify="space-between">
        <Flex>
          <ButtonIcon
            text="Editar"
            icon={RiBallPenLine}
            disabled={onQuery}
            onClick={() => {
              setEditing(!editing);
            }}
          />
          <ButtonIcon
            text="Excluir"
            icon={RiDeleteBin6Line}
            disabled={onQuery}
            onClick={() => {
              deleteUser();
            }}
          />
        </Flex>
        <Tag
          p={3}
          opacity="0.7"
          transition="0.25s"
          colorScheme={userEdit?.is_active ? "green" : "red"}
          _hover={{ cursor: "pointer", opacity: "1" }}
          onClick={() => {
            changeUserStatus();
          }}
        >
          {userEdit?.is_active ? "Ativo" : "Bloqueado"}
        </Tag>
      </Flex>
      <Flex direction="column" as="form" onSubmit={onSubmit}>
        <Flex direction="column" w="100%">
          <VStack marginBottom={4} w="100%" marginTop={4}>
            <EditingInput
              editing={editing}
              value={userEdit?.name}
              label={userEdit?.name}
              error={errors.name}
              {...register("name")}
              onChange={(evt) => {
                setUserEdit({
                  ...userEdit,
                  name: evt.target.value,
                });
              }}
            />

            <EditingInput
              editing={editing}
              value={userEdit?.email}
              label={userEdit?.email}
              error={errors.email}
              {...register("email")}
              onChange={(evt) => {
                setUserEdit({
                  ...userEdit,
                  email: evt.target.value,
                });
              }}
            />
          </VStack>
        </Flex>

        <Flex w="100%" justify="center">
          <Button text="Salvar" type="submit" disabled={onQuery} />
        </Flex>
      </Flex>
    </Modal>
  );
};
