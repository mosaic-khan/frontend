import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { WhiteButton } from "../Buttons";

const SignUpInfo = () => {
  return (
    <>
      <VStack textAlign="center" textColor="white" spacing="20px">
        <Heading>!خوش آمدید</Heading>
        <Text width="80%" whiteSpace="no-wrap">
          اگر حساب دارید، همین حالا وارد شوید
        </Text>
      </VStack>
      <WhiteButton position="absolute" bottom={10}>
        ورود
      </WhiteButton>
    </>
  );
};

export default SignUpInfo;
