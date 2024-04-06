import { Button, Heading, Text, VStack } from "@chakra-ui/react";

const LoginInfo = () => {
  return (
    <VStack spacing={30}>
    <VStack textAlign="center" textColor="white" spacing="20px" >
      <Heading>!سلام</Heading>
      <Text width="80%" >
       اگر اولین بار است که وارد این سایت می‌شوید،با وارد کردن اطلاعات خود به ما بپیوندید
      </Text>
    </VStack>
      <Button
        color="white"
        colorScheme="white"
        variant="outline"
        borderRadius="100px"
        width="200px"
        marginTop={115}
      >
        ثبت‌نام
      </Button>
    </VStack>
  );
};

export default LoginInfo;
