import {
  HStack,
  Text,
  Image,
  LinkBox,
  LinkOverlay,
  Box,
} from "@chakra-ui/react";
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
      borderRadius="40px"
    >
      <HStack justifyContent="space-between">
        <LinkOverlay href="#">
          <Image
            src={image}
            w={isHover ? "110px" : "70px"}
            h={isHover ? "110px" : "70px"}
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
