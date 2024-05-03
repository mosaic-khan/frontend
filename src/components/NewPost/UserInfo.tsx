import { Box, HStack, Text, Image } from "@chakra-ui/react";
import Image1 from "../../assets/Userpic3.png";
const UserInfo = () => {
  return (
    <Box
      width="90%"
      height="50px"
      border="1px solid #ccc"
      margin="20px"
      borderRadius="5px"
    >
      <HStack justifyContent="space-between">
        <Box></Box>
        <Box>
          <HStack justifyContent="space-between">
            <Text fontWeight="bold" textColor="white">
              محمدمهدی اقدسی
            </Text>
            <Image
              borderRadius="100%"
              width="40px"
              marginTop="3px"
              marginRight="10px"
              src={Image1}
            />
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default UserInfo;
