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
        <Heading>تازه واردی؟؟ </Heading>
        <Text width="80%" dir="rtl">
           همین الان حساب خودتو بساز!
        </Text>
      </VStack>
      <Center h="100px" w="100%">
        <WhiteButton onClick={toggle}>ثبت‌نام</WhiteButton>
      </Center>
    </VStack>
  );
};

export default LoginInfo;
