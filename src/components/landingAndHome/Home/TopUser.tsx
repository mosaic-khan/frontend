import { Box, Circle, HStack, Heading, VStack, Image } from "@chakra-ui/react";
import UserOfTopUsers from "./UserOfTopUsers";
import Image1 from "../../../assets/Userpic3.png";
import Image2 from "../../../assets/chef_kitchen.jpg";

const TopUser = () => {
  return (
    <Box h="600px" w="100%">
      <HStack h="100%" justifyContent="space-between">
        <Image src={Image2} />
        <VStack h="100%" w="600px" spacing="10px" marginLeft="-700px">
          <Box h="60px" w="500px" marginTop={"60px"}>
            <Heading textAlign="right" fontSize="32">
              آشپزهای برتر هفته
            </Heading>
          </Box>
          <VStack h="380px" justifyContent="space-between" spacing="0px">
            <UserOfTopUsers Username="مهدی" image={Image1}></UserOfTopUsers>
            <UserOfTopUsers Username="علی" image={Image1}></UserOfTopUsers>
            <UserOfTopUsers Username="نادر" image={Image1}></UserOfTopUsers>
            <UserOfTopUsers Username="محمد" image={Image1}></UserOfTopUsers>
          </VStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default TopUser;
