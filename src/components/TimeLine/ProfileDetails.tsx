import { Avatar, Box, HStack, VStack, Text } from "@chakra-ui/react";

const ProfileDetails = () => {
  return (
    <Box
      boxSize="250px"
      bgGradient="linear(to-b, white, gray.100)"
      borderRadius="lg"
      shadow="lg"
      borderWidth="1px"
      borderColor="gray.300"
      p={4}
      textAlign="center"
    >
      <VStack spacing={4} h="250px">
        <Avatar size="xl" />
        <Text fontWeight="bold" fontSize="lg">
          نام کامل
        </Text>
        <HStack spacing={10}>
          <VStack spacing={1}>
            <Text fontWeight="bold" fontSize="md">
              ۷۵۰
            </Text>
            <Text fontSize="sm" color="gray.500">
              دنبال کننده
            </Text>
          </VStack>
          <VStack spacing={1}>
            <Text fontWeight="bold" fontSize="md">
              ۴۰۰
            </Text>
            <Text fontSize="sm" color="gray.500">
              دنبال شونده
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProfileDetails;
