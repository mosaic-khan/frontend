import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import { WhiteButton } from "../Buttons";
interface Props {
  toggle: () => void;
}

const SignUpInfo = ({ toggle }: Props) => {
  return (
    <VStack
      textAlign="center"
      textColor="white"
      h="50%"
      justifyContent="space-between"
      marginTop="160px"
    >
      <VStack>
        <Heading>!خوش آمدید</Heading>
        <Text width="80%" whiteSpace="no-wrap">
          اگر حساب دارید، همین حالا وارد شوید
        </Text>
      </VStack>
      <Center h="200px" w="100%"></Center>
      <Center>
        <WhiteButton onClick={toggle}>ورود</WhiteButton>
      </Center>
    </VStack>
  );
};

export default SignUpInfo;
