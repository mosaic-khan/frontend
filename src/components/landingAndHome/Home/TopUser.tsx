import { Box, Circle, HStack, Heading, VStack } from "@chakra-ui/react";
import UserOfTopUsers from "./UserOfTopUsers";
import Image1 from "../../../assets/Userpic3.png";
const TopUser = () => {
  return (
    <Box h="600px" w="100%">
      <HStack h="100%" justifyContent="space-between">
        <Box h="600px" w="600px">
          <VStack spacing="0px">
            <Circle
              bg="gray.400"
              size="100px"
              marginLeft="300px"
              marginTop="40px"
            >
              Image1
            </Circle>
            <Circle bg="gray.400" size="320px" marginRight="10px">
              Image1
            </Circle>
            <Circle bg="gray.400" size="100px" marginLeft="300px">
              Image1
            </Circle>
          </VStack>
        </Box>
        <VStack h="100%" w="600px" spacing="10px">
          <Box h="60px" w="500px" marginTop={"60px"}>
            <Heading textAlign="right" fontSize="32">
              آشپزهای برتر هفته
            </Heading>
          </Box>
          <UserOfTopUsers Username="مهدی" image={Image1}></UserOfTopUsers>
          <UserOfTopUsers Username="علی" image={Image1}></UserOfTopUsers>
          <UserOfTopUsers Username="نادر" image={Image1}></UserOfTopUsers>
          <UserOfTopUsers Username="محمد" image={Image1}></UserOfTopUsers>
        </VStack>
      </HStack>
    </Box>
  );
};

export default TopUser;
