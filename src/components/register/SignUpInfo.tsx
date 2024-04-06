import { Button, Heading, Text, VStack } from "@chakra-ui/react";

const SignUpInfo = () => {
  return (
    <>
      <VStack textAlign="center" textColor="white" spacing="20px">
        <Heading>!خوش آمدید</Heading>
        <Text width="80%" whiteSpace="no-wrap">
          اگر حساب دارید، همین حالا وارد شوید
        </Text>
      </VStack>
      <Button
        color="white"
        colorScheme="white"
        variant="outline"
        borderRadius="100px"
        width="200px"
        position="absolute"
        bottom={10}

      >
        ورود
      </Button>
   </>
  );
};

export default SignUpInfo;
