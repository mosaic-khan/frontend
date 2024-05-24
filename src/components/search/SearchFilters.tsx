import { Box, HStack, VStack } from "@chakra-ui/react";

const SearchFilters = () => {
  return (
    <VStack padding="20px">
      <Box w="100%" height="40px" bg="gray.400" />
      <Box w="100%" height="60px" bg="gray.400" />
      <Box w="100%" height="10px" bg="gray.300" />
      <Box w="100%" height="40px" bg="gray.400" />
      <Box w="100%" height="100px" bg="gray.400" />
      <Box w="100%" height="10px" bg="gray.300" />
      <HStack w="100%" justifyContent="space-between">
        <Box w="100px" height="40px" bg="gray.500" borderRadius="100px" />
        <Box w="130px" height="40px" bg="gray.500" borderRadius="100px" />
        <Box w="100px" height="40px" bg="gray.500" borderRadius="100px" />
      </HStack>
      <HStack w="100%" justifyContent="space-between">
        <Box w="90px" height="40px" bg="gray.500" borderRadius="100px" />
        <Box w="100px" height="40px" bg="gray.500" borderRadius="100px" />
        <Box w="140px" height="40px" bg="gray.500" borderRadius="100px" />
      </HStack>
      <Box w="100%" height="10px" bg="gray.300" />
      <Box w="100%" height="100px" bg="gray.400" />
      <Box w="100%" height="100px" bg="gray.400" />
    </VStack>
  );
};

export default SearchFilters;
