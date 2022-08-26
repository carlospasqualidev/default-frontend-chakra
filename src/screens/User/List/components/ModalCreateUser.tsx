//LIBS
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

//UI
import {
  Avatar,
  Flex,
  HStack,
  VStack,
  Text,
  Tag,
  Stack,
} from "@chakra-ui/react";
import { RiBallPenLine, RiDeleteBin6Line } from "react-icons/ri";

//COMPONENTS
import { ButtonIcon } from "../../../../components/Layout/Buttons/ButtonIcon";
import { Button } from "../../../../components/Layout/Buttons/Button";
import { Modal } from "../../../../components/Layout/Modal/Modal";
import { Input } from "../../../../components/Form/Input";

//TYPES
import { ModalCreateUserProps } from "../List";
import { FormData } from "../List";
import { Api } from "../../../../services/api";

export const ModalCreateUser = ({
  isOpen,
  onClose,
  usersList,
}: ModalCreateUserProps) => {
  const [onQuery, setOnQuery] = useState<boolean>(false);

  //YUP VALIDATION
  const schema = yup
    .object({
      name: yup.string().required("O Nome deve ser inserido"),
      email: yup
        .string()
        .email("Formato de Email invalido")
        .required("O Email deve ser inserido"),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  //SUBMIT
  const onSubmit = handleSubmit(async (data) => {
    setOnQuery(true);
    await Api.post("/collab/create", data)
      .then(() => {
        setOnQuery(false);
        usersList();
        reset();
      })
      .catch(() => {
        setOnQuery(false);
      });
  });

  return (
    <Modal
      title="Cadastrar colaborador"
      isOpen={isOpen}
      onClose={onClose}
      size="sm"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth="360px"
        bg="white"
        borderRadius="8px"
        flexDir="column"
        onSubmit={onSubmit}
      >
        <Stack spacing="4">
          <Input
            placeholder="Digite o nome do colaborador"
            label="Nome"
            error={errors.name}
            {...register("name")}
          />

          <Input
            placeholder="Digite o email do colaborador"
            label="Email"
            error={errors.email}
            {...register("email")}
          />
        </Stack>

        <Flex w="100%" align="center" justify="center">
          <Button
            text="Cadastrar"
            type="submit"
            mt="6"
            colorScheme="blue"
            disabled={onQuery}
          />
        </Flex>
      </Flex>
    </Modal>
  );
};
