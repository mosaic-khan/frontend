import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Spacer, HStack } from "@chakra-ui/react";

import HomeIcon from "../Icons/HomeIcon";

import SettingsIcon from "../Icons/SettingIcon";
import UserSideBar from "./UserSideBar";
import { useNavigate } from "react-router-dom";
import { Profile } from "../../api/clients/user";
interface Props {
  isTrue: Boolean;
  userProfile: Profile | undefined;
}
const UserNavigation = ({ userProfile, isTrue }: Props) => {
  console.debug(isTrue);
  const navigate = useNavigate();
  return (
    <Box position="fixed" w="100%" zIndex="10">
      <HStack bg="white" color="black" p={4} boxShadow="sm" borderRadius="lg">
        <Box>
          <HomeIcon />

          <SettingsIcon />

          <Button
            boxSize="30px"
            bgGradient="linear(to-bl, brand.400, brand.500, brand.700)"
            borderRadius="50px"
            borderColor="gray.200"
            boxShadow="xl"
            fontWeight="bold"
            onClick={() => navigate("/newpost")}
            _hover={{
              transition: "background-color 0.4s ease-in-out",
              fontWeight: "bold",
              boxShadow: "lg",
              bgGradient: "linear(to-bl, brand.400, brand.500, brand.700)",
              transform: "scale(1.08)",
            }}
          >
            <AddIcon boxSize={3} color="black" />
          </Button>
        </Box>
        {isTrue && <UserSideBar userProfile={userProfile} />}
        <Spacer />
      </HStack>
    </Box>
  );
};

export default UserNavigation;
