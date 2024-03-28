import { Box, Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";

const LoginInfo = () => {
  return (
    <>
    <Box position='absolute' top='20%'>
      <VStack
        textAlign="center"
        textColor="white"
        justifyContent="space-between"
      >
        <Heading paddingY={10}>!سلام</Heading>
        <Text>
        {'اگر اولین بار است که وارد این سایت می‌شوید، با ثبت اطلاعات خود به ما بپیوندید'}
        </Text>
      </VStack>
      </Box>
      <Box position='absolute' bottom='11%' >
        <Button color="white" variant="outline" borderRadius={50} width="300px">
          ثبت‌نام
        </Button>
      </Box>
    </>
  );
};

export default LoginInfo;
