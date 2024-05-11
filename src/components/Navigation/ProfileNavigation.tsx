import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Spacer, HStack } from "@chakra-ui/react";
import HeartIcon from "../Icons/HeartIcon";
import HomeIcon from "../Icons/HomeIcon";
import QuestionIcon from "../Icons/QuestionMark";
import SettingsIcon from "../Icons/SettingIcon";
import UserSideBar from "./UserSideBar";
import { useNavigate } from "react-router-dom";
interface Props {
  isTrue: Boolean;
}
const UserNavigation = (isTrue: Props) => {
  const navigate = useNavigate();
  return (
    <Box position="fixed" w="100%" zIndex="10">
      <HStack bg="white" color="black" p={4} boxShadow="sm" borderRadius="lg">
        <Box>
          <HomeIcon />
          <QuestionIcon />
          <SettingsIcon />
          <HeartIcon />
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
        <Spacer />

        {isTrue ? <UserSideBar /> : <></>}
      </HStack>
    </Box>
  );
};

export default UserNavigation;
