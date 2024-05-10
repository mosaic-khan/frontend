import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { BackButton, RedButton } from "../Buttons";
import tomato from "../../assets/tomato_with_key.png";
import { useEffect, useState } from "react";
import userClient from "../../api/services/user-service";

interface Props {
  onSubmit: () => void;
  onCancel: () => void;
}

export const ForgotPassword = ({ onSubmit, onCancel }: Props) => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  let [emailError, setEmailError] = useState(false);
  const [result, setResult] = useState("");

  const checkInput = (): boolean => {
    // Define regex patterns
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validate email
    if (!email.match(emailPattern)) {
      setEmailError(true);
      setResult("email");
      return false;
    } else {
      setEmailError(false);
    }

    return true;
  };

  const handleSubmit = () => {
    const valid = checkInput();
    if (valid) {
      userClient
        .forgetPassword({
          userNameOrEmail: email,
        })
        .then((res) => {
          console.log("forgetPassword response: ", res);
          setResult("ok");
        })
        .catch((err) => {
          console.log("forgetPassword error: ", err);
          setResult("request");
        });
    }
  };

  useEffect(() => {
    if (result === "email") {
      toast({
        description: <Text dir="rtl">فرمت ایمیل درست نیست.</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } else if (result === "request") {
      toast({
        description: <Text dir="rtl">خطا از سمت سرور</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } else if (result == "ok") {
      toast({
        description: <Text dir="rtl">درخواست شما با موفقیت ارسال شد.</Text>,
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
    <VStack marginTop="-40px">
      <Box w="460px">
        <BackButton onClick={onCancel} />
      </Box>
      <Image src={tomato} height="100px" marginTop="10px"></Image>
      <VStack>
        <Heading size="md" marginBottom="35px">
          رمزتو فراموش کردی؟
        </Heading>
        <FormControl marginBottom="20px">
          <FormLabel dir="rtl" marginBottom="15px">
            ایمیلتو وارد کن تا رمز جدید بذاری!
          </FormLabel>
          <Input
            id="forgot_email"
            type="email"
            focusBorderColor="green.600"
            marginTop="0px"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            borderColor={emailError ? "red.500" : "gray.200"}
          />
        </FormControl>
        <RedButton onClick={handleSubmit}>تایید</RedButton>
      </VStack>
    </VStack>
  );
};
