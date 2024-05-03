import { Heading, Text, VStack } from "@chakra-ui/react";
import { WhiteButton } from "../Buttons";
interface Props {
  toggle: () => void;
}

const LoginInfo = ({ toggle }: Props) => {
  return (
    <VStack
      textAlign="center"
      textColor="white"
      spacing="50px"
      marginTop="80px"
    >
      <VStack>
        <Heading>تازه واردی؟؟ </Heading>
        <Text width="80%" dir="rtl">
          همین الان حساب خودتو بساز!
        </Text>
      </VStack>
      <WhiteButton onClick={toggle}>ثبت‌نام</WhiteButton>
    </VStack>
  );
};

export default LoginInfo;
