import { Box, HStack, VStack } from "@chakra-ui/react";

const SearchResult = () => {
  return (
    <HStack align="flex-start" justifyContent="space-between" padding="10px">
      <VStack w="100%">
        <Box w="100%" height="360px" bg="gray.300" borderRadius="20px" />
        <Box w="100%" height="300px" bg="gray.300" borderRadius="20px" />
        <Box w="100%" height="300px" bg="gray.300" borderRadius="20px" />
      </VStack>
      <VStack w="100%">
        <Box w="100%" height="260px" bg="gray.300" borderRadius="20px" />
        <Box w="100%" height="340px" bg="gray.300" borderRadius="20px" />
        <Box w="100%" height="300px" bg="gray.300" borderRadius="20px" />
        <Box w="100%" height="300px" bg="gray.300" borderRadius="20px" />
      </VStack>
      <VStack w="100%">
        <Box w="100%" height="300px" bg="gray.300" borderRadius="20px" />
        <Box w="100%" height="380px" bg="gray.300" borderRadius="20px" />
        <Box w="100%" height="300px" bg="gray.300" borderRadius="20px" />
      </VStack>
    </HStack>
  );
};

export default SearchResult;
