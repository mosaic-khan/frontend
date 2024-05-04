import { Box, HStack, Avatar, VStack, Heading, Text } from "@chakra-ui/react";
import { GradientRedButton } from "../Buttons";

const OtherHeader = () => {
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
      <HStack spacing="50px">
        <VStack dir="rtl" alignItems="flex-start">
          <HStack spacing="50px">
            <Heading fontWeight="bold" dir="rtl">
              نام کاربری
            </Heading>
            <GradientRedButton
              width="90px"
              height="30px"
              color="white"
              fontSize="sm"
              borderRadius="20px"
            >
              دنبال کردن
            </GradientRedButton>
          </HStack>
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

export default OtherHeader;
