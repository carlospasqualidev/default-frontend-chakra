//LIBS
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

//UI
import { Flex, HStack } from "@chakra-ui/react";

//COMPONENTS
import { Field } from "./Field";
import { DetailsProps } from "../Profile";
import { EditingInput } from "../../../../components/Form/EditingInput";
import { Button } from "../../../../components/Layout/Buttons/Button";

//TYPES
import { FormData } from "../Profile";
import { AdminData } from "../../User";
import { Api } from "../../../../services/api";

export const DetailsCard = ({
  editing,
  userData,
  setUserData,
  setEditing,
}: DetailsProps) => {
  const [tempUserData, setTempUserData] = useState<AdminData>(userData);

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
    await Api.put("/auth/updateinfo", data).then((res) => {
      setUserData(tempUserData);
    });

    setEditing(false);
  });

  return (
    <>
      <Flex
        as="form"
        id="UserInformations"
        w="100%"
        borderRadius="10px"
        direction="column"
        onSubmit={onSubmit}
      >
        <Field title="Nome">
          <EditingInput
            editing={editing}
            // type="nome"
            value={tempUserData.name}
            label={userData.name}
            error={errors.name}
            {...register("name")}
            onChange={(evt) => {
              setTempUserData({ ...tempUserData, name: evt.target.value });
            }}
          />
        </Field>

        <Field title="E-mail">
          <EditingInput
            editing={editing}
            // type="email"
            value={tempUserData.email}
            label={userData.email}
            error={errors.email}
            {...register("email")}
            onChange={(evt) => {
              setTempUserData({ ...tempUserData, email: evt.target.value });
            }}
          />
        </Field>

        <Flex justify="flex-end" style={{ display: editing ? "flex" : "none" }}>
          <HStack>
            <Button
              text="Cancelar"
              onClick={() => {
                setEditing(false);
              }}
            />
            <Button text="Salvar" type="submit" />
          </HStack>
        </Flex>
      </Flex>
    </>
  );
};
