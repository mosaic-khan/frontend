import {
  Button,
  Center,
  HStack,
  Heading,
  PinInput,
  PinInputField,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RedButton } from "../Buttons";

interface Props {
  onSubmit: () => void;
  onCancel: () => void;
}
const VerificationCodeInput = ({ onSubmit, onCancel }: Props) => {
  return (
    <VStack spacing="30px">
      <Center>
        <Heading size="md">کد تایید</Heading>
      </Center>
      <VStack spacing="0px">
        <Text fontSize="16px" color="gray.700">
          ایمیل حاوی کد تایید برای شما ارسال شد
        </Text>
        <Button
          color="gray.500"
          variant="text"
          fontSize="12px"
          onClick={onCancel}
          paddingRight={0}
        >
          ادرس ایمیل خود را اشتباه وارد کردید؟
        </Button>
      </VStack>
      <HStack>
        <PinInput>
          <PinInputField borderColor={"brand.100"} />
          <PinInputField borderColor={"brand.100"} />
          <PinInputField borderColor={"brand.100"} />
          <PinInputField borderColor={"brand.100"} />
        </PinInput>
      </HStack>
      <Center>
        <RedButton onClick={onSubmit}>تایید</RedButton>
      </Center>
    </VStack>
  );
};

export default VerificationCodeInput;
