//LIBS
import { useEffect, useState } from "react";
import { RiBallPenLine } from "react-icons/ri";

//UI
import { Flex, Heading } from "@chakra-ui/react";

//COMPONENTS
import { ButtonIcon } from "../../../components/Layout/Buttons/ButtonIcon";
import { DetailsCard } from "./components/DetailsCard";
import { Spinner } from "../../../components/Layout/Spinner/Spinner";

//TYPES
import { AdminData } from "../User";
import { Api } from "../../../services/api";

export const Profile = () => {
  const [editing, setEditing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const [userData, setUserData] = useState<AdminData | null>();

  async function userInfo() {
    await Api.get("/auth/userinfo").then((res) => {
      setUserData(res.data);
      setLoading(false);
    });
  }

  useEffect(() => {
    userInfo();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Flex w="100%" maxWidth={1480} mx="auto" direction="column" p={4}>
          <Flex>
            <Heading size="xl" marginBottom="24px">
              Perfil
            </Heading>
            <ButtonIcon
              icon={RiBallPenLine}
              text="Editar"
              onClick={() => {
                setEditing(!editing);
              }}
            />
          </Flex>

          <Flex h="100%" gap={4} direction={["column", "row"]}>
            <DetailsCard
              editing={editing}
              setEditing={setEditing}
              userData={userData!}
              setUserData={setUserData}
            />
          </Flex>
        </Flex>
      )}
    </>
  );
};
