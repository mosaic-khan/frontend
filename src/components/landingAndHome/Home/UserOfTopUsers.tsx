import { HStack, Text, Image, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  Username: string;
  image: string;
}

const UserOfTopUsers = ({ Username, image }: Props) => {
  const [isHover, setHover] = useState(false);

  return (
    <LinkBox
      h={isHover ? "120px" : "80px"}
      w="500px"
      bg="brand.500"
      onMouseEnter={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      //  _hover={{ opacity: "0.85", transform: "scale(1.04)" }}
      // transition="transform 1s ease-in-out"
      borderRadius="40px"
    >
      <HStack justifyContent="space-between">
        <LinkOverlay href="#">
          <Image
            src={image}
            w={isHover ? "110px" : "70px"}
            //_hover={{ opacity: "0.85", transform: "scale(1.5)" }}
            h={isHover ? "110px" : "70px"}
            transition="transform 0.3s ease-in-out"
            borderRadius="35px"
            marginLeft="5px"
            marginTop="5px"
          />
        </LinkOverlay>
        <Text paddingRight="40px" color="white" marginTop="5px" fontSize="30px">
          {Username}
        </Text>
      </HStack>
    </LinkBox>
  );
};

export default UserOfTopUsers;
