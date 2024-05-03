import { AddIcon } from "@chakra-ui/icons";
<<<<<<< HEAD
import { Box, Button, Spacer, HStack } from "@chakra-ui/react";
=======
import { Box, Button, Spacer } from "@chakra-ui/react";
>>>>>>> cca109f402ac90db8b37ee755e00bc1eec585b65
import HeartIcon from "../Icons/HeartIcon";
import HomeIcon from "../Icons/HomeIcon";
import QuestionIcon from "../Icons/QuestionMark";
import SettingsIcon from "../Icons/SettingIcon";

const UserNavigation = () => {
  return (
<<<<<<< HEAD
    <Box>
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
      </HStack>
=======
    <Box bg="white" color="black" p={4} boxShadow="sm" borderRadius="lg">
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
>>>>>>> cca109f402ac90db8b37ee755e00bc1eec585b65
    </Box>
  );
};

export default UserNavigation;
