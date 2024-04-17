import { Box, Circle, HStack, Heading, VStack } from "@chakra-ui/react";
import UserOfTopUsers from "./UserOfTopUsers";
import Image1 from "../../../assets/Userpic3.png";
const TopUser = () => {
  return (
    <Box h="600px" w="100%">
      <HStack justifyContent="space-between">
        <Box h="600px" w="600px" bg="gray.100">
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
          <Box h="60px" w="500px" bg="gray.100">
            <Heading textAlign="right">آشپزهای برتر هفته</Heading>
          </Box>
          <Box h="90px" w="500px" bg="brand.500" borderRadius="40px">
            <UserOfTopUsers Username="مهدی" image={Image1}></UserOfTopUsers>
          </Box>
          <Box h="90px" w="500px" bg="brand.500" borderRadius="40px">
            <UserOfTopUsers Username="علی" image={Image1}></UserOfTopUsers>
          </Box>
          <Box h="90px" w="500px" bg="brand.500" borderRadius="40px">
            <UserOfTopUsers Username="نادر" image={Image1}></UserOfTopUsers>
          </Box>
          <Box h="90px" w="500px" bg="brand.500" borderRadius="40px">
            <UserOfTopUsers Username="محمد" image={Image1}></UserOfTopUsers>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default TopUser;
