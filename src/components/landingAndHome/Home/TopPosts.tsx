import { Box, HStack, VStack } from "@chakra-ui/react";

const TopPosts = () => {
  return (
    <VStack h="850px" w="100%" marginTop="40px">
      <HStack w="95%" justifyContent="space-between">
        <Box h="400px" w="700px" bg="gray.500" />
        <Box h="400px" w="500px" bg="gray.700" />
      </HStack>
      <HStack w="95%" justifyContent="space-between">
        <Box h="400px" w="300px" bg="gray.500" />
        <Box h="400px" w="300px" bg="gray.500" />
        <Box h="400px" w="300px" bg="gray.500" />
        <Box h="400px" w="300px" bg="gray.500" />
      </HStack>
    </VStack>
  );
};

export default TopPosts;
