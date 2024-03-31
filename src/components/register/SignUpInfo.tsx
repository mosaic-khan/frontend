import { Button, Heading, Text, VStack } from "@chakra-ui/react";

const SignUpInfo = () => {
  return (
    <VStack textAlign="center" textColor="white" spacing="20px">
      <Heading>!خوش آمدید</Heading>
      <Text width="80%" whiteSpace="no-wrap">
        اگر حساب دارید، همین حالا وارد شوید
      </Text>
      <Button
        color="white"
        colorScheme="white"
        variant="outline"
        borderRadius="100px"
        width="200px"
      >
        ورود
      </Button>
    </VStack>
  );
};

export default SignUpInfo;
