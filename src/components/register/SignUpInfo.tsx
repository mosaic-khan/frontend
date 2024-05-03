import { Heading, Text, VStack } from "@chakra-ui/react";
import { RedButton } from "../Buttons";
interface Props {
  toggle: () => void;
}

const SignUpInfo = ({ toggle }: Props) => {
  return (
    <VStack textAlign="center" spacing="50px" marginTop="80px">
      <VStack>
        <Heading>!خوش اومدی</Heading>
        <Text width="80%" whiteSpace={"break-spaces"} dir="rtl">
          {" می‌شناسیمت؟\n بیا ببریمت تو حسابت!"}
        </Text>
      </VStack>
      <RedButton onClick={toggle}>ورود</RedButton>
    </VStack>
  );
};

export default SignUpInfo;
