import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import { WhiteButton } from "../Buttons";
interface Props {
  toggle: () => void;
}

const LoginInfo = ({ toggle }: Props) => {
  return (
    <VStack
      textAlign="center"
      textColor="white"
      justifyContent="space-between"
      h="76%"
    >
      <Center h="100px" w="100%"></Center>
      <VStack>
        <Heading>!سلام</Heading>
        <Text width="80%">
          اگر اولین بار است که وارد این سایت می‌شوید،با وارد کردن اطلاعات خود به
          ما بپیوندید
        </Text>
      </VStack>
      <Center h="100px" w="100%">
        <WhiteButton onClick={toggle}>ثبت‌نام</WhiteButton>
      </Center>
    </VStack>
  );
};

export default LoginInfo;
