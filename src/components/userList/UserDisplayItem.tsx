import { Box, HStack } from "@chakra-ui/react";

const UserDisplayItem = () => {
  return (
    <HStack w="450px" justifyContent="space-between" bg="red.200" dir="rtl">
      <Box w="80px" h="80px" bg="red" />
      <Box w="80px" h="50px" bg="red" />
      <Box w="80px" h="50px" bg="red" />
      <Box w="80px" h="50px" bg="red" />
    </HStack>
  );
};

export default UserDisplayItem;
