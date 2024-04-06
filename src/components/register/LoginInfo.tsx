import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { WhiteButton } from "../Buttons";

const LoginInfo = () => {
  return (
    <>
      <VStack textAlign="center" textColor="white" spacing="20px">
        <Heading>!سلام</Heading>
        <Text width="80%">
          اگر اولین بار است که وارد این سایت می‌شوید،با وارد کردن اطلاعات خود به
          ما بپیوندید
        </Text>
      </VStack>
      <WhiteButton position="absolute" bottom="89px">
        ثبت‌نام
      </WhiteButton>
    </>
  );
};

export default LoginInfo;
