import { Box, HStack, Text } from "@chakra-ui/layout";

const LandingBottomArea = () => {
  return (
    <HStack
      bg="gray.300"
      h="200px"
      width="100%"
      justifyContent="space-between"
      borderRadius="0px 40px 0px 0px"
      overflow="hidden"
    >
      <Box bgColor="gray.200" width="300px" height="200px" />
      <Text>LandingBottomArea</Text>
      <Box bgColor="gray.200" width="300px" height="200px" />
    </HStack>
  );
};

export default LandingBottomArea;
