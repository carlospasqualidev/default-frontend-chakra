//LIBS
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//COMPONENTS
import { useAuth } from "../../../context/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";
import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { Input } from "../../../components/Form/Input";

//TYPES
import { FormData } from "./Login";
import { useEffect } from "react";

export const Login = () => {
  const auth = useAuth();
  let navigate = useNavigate();

  //YUP VALIDATION
  const schema = yup
    .object({
      email: yup
        .string()
        .email("informe um email valido")
        .required("Email obrigatorio"),
      password: yup
        .string()
        .min(8, "A senha deve possuir no minimo 8 caracteres")
        .required("Senha obrigatoria"),
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
    await auth.authenticate(data.email, data.password);
    navigate("/users");
  });

  useEffect(() => {
    auth.logout();
  }, []);

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth="360px"
        bg="white"
        p="8"
        borderRadius="8px"
        flexDir="column"
        onSubmit={onSubmit}
      >
        <Flex justify="center">
          <Text fontSize="5xl">Login </Text>
        </Flex>
        <Stack spacing="4">
          <Input label="Email" error={errors.email} {...register("email")} />
          <Input
            label="Senha"
            type="password"
            error={errors.password}
            {...register("password")}
          />
        </Stack>

        <Button type="submit" mt="6" colorScheme="blue">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};
