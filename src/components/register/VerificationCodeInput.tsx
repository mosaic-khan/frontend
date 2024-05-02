import {
  Button,
  Center,
  HStack,
  Heading,
  PinInput,
  PinInputField,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { WhiteButton } from "../Buttons";
import { useEffect, useState } from "react";
import userClient from "../../api/services/user-service";

interface Props {
  token: string;
  onSubmit: () => void;
  onCancel: () => void;
}
const VerificationCodeInput = ({ token, onSubmit, onCancel }: Props) => {
  const toast = useToast();
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    if (code.length != 6) {
      return;
    }
    console.log("code: ", code);
    userClient
      .codeVerification({
        code: code,
        signUpToken: token,
      })
      .then((res) => {
        console.log("codeVerification response: ", res);
        setResult("ok");
      })
      .catch((err) => {
        console.log("codeVerification error: ", err);
        setResult("request");
      });
  };

  useEffect(() => {
    if (result === "request") {
      toast({
        description: <Text dir="rtl">خطا از سمت سرور</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } else if (result == "ok") {
      toast({
        description: <Text dir="rtl">ثبت نام شما با موفقیت تایید شد</Text>,
        status: "success",
        isClosable: true,
        duration: 4000,
        position: "bottom-left",
      });
      onSubmit();
    }
    setResult("");
  }, [result]);

  return (
    <VStack spacing="30px" textColor="white">
      <Center>
        <Heading size="md">کد تایید</Heading>
      </Center>
      <VStack spacing="0px">
        <Text fontSize="16px">ایمیل حاوی کد تایید برای شما ارسال شد</Text>
        <Button
          color="brand.50"
          variant="text"
          fontSize="12px"
          onClick={onCancel}
          paddingRight={0}
        >
          ادرس ایمیل خود را اشتباه وارد کردید؟
        </Button>
      </VStack>
      <HStack>
        <PinInput
          type="alphanumeric"
          onChange={(c) => {
            setCode(c);
          }}
        >
          <PinInputField borderColor={"brand.100"} />
          <PinInputField borderColor={"brand.100"} />
          <PinInputField borderColor={"brand.100"} />
          <PinInputField borderColor={"brand.100"} />
          <PinInputField borderColor={"brand.100"} />
          <PinInputField borderColor={"brand.100"} />
        </PinInput>
      </HStack>
      <Center>
        <WhiteButton onClick={handleSubmit}>تایید</WhiteButton>
      </Center>
    </VStack>
  );
};

export default VerificationCodeInput;
