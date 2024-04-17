import { HStack, Text, Image, LinkBox, LinkOverlay } from "@chakra-ui/react";

interface Props {
  Username: string;
  image: string;
}

const UserOfTopUsers = ({ Username, image }: Props) => {
  return (
    <HStack justifyContent="space-between">
      <LinkBox
        as="image"
        maxW="sm"
        p="0"
        borderWidth="none"
        //overflow="hidden"
        _hover={{ opacity: "0.95" }}
      >
        <LinkOverlay href="#">
          <Image
            src={image}
            w="75px"
            h="75px"
            borderRadius="100%"
            marginLeft="10px"
            marginTop="7px"
          />
        </LinkOverlay>
      </LinkBox>

      <Text paddingRight="40px" color="white" marginTop="5px" fontSize="30px">
        {Username}
      </Text>
    </HStack>
  );
};

export default UserOfTopUsers;
