import { Box, HStack, Avatar, VStack, Heading, Text } from "@chakra-ui/react";

const UserHeader = () => {
  return (
    <HStack
      bg="white"
      w="85%"
      boxShadow="md"
      borderRadius="lg"
      marginTop="50px"
      padding={1}
    >
      <Avatar
        margin="50px"
        boxSize="150px"
        name="Bruno Maltor"
        bgColor="brand.400"
        src="https://bit.ly/dan-abramov"
        boxShadow="md"
      />
      <HStack alignItems="start" spacing={"50px"}>
        <VStack dir="rtl">
          <Heading fontWeight="bold" dir="rtl">
            نام کاربری
          </Heading>
          <Text fontSize="sm" color="gray.300">
            {" "}
            لوکیشن
          </Text>
          <Text color="gray.500">بیو بیو بیو بیو بیو بیو این یک بیو است</Text>
          <HStack spacing={5} fontSize="sm">
            <Text>
              <b>۷۷۵</b> پست
            </Text>
            <Text>
              <b>۱۶۵k</b> دنبال کننده
            </Text>
            <Text>
              <b>۶۰۶</b> دنبال شونده
            </Text>
          </HStack>
        </VStack>
        <HStack margin={5}>
          <Box boxSize={"100px"} bgColor={"gray.200"} borderRadius={"md"}></Box>
          <Box boxSize={"100px"} bgColor={"gray.200"} borderRadius={"md"}></Box>
          <Box boxSize={"100px"} bgColor={"gray.200"} borderRadius={"md"}></Box>
        </HStack>
      </HStack>
    </HStack>
  );
};

export default UserHeader;
