import { Box, HStack, VStack } from "@chakra-ui/react";

const TopUser = () => {
  return (
    <Box h="600px" w="100%">
      <HStack justifyContent="space-between">
        <Box h="600px" w="600px" bg="gray.700" />
        <VStack h="100%" w="600px" spacing="10px">
          <Box h="90px" w="500px" bg="gray.500" />
          <Box h="90px" w="500px" bg="gray.500" />
          <Box h="90px" w="500px" bg="gray.500" />
          <Box h="90px" w="500px" bg="gray.500" />
          <Box h="90px" w="500px" bg="gray.500" />
        </VStack>
      </HStack>
    </Box>
  );
};

export default TopUser;
