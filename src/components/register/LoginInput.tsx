import { useState } from "react";
import {
  Button,
  Center,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { PasswordField } from "./PassWordField";
import { RedButton } from "../Buttons";

const LoginInput = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [emailError, setEmailError] = useState(false);
  let [passwordError, setPasswordError] = useState(false);
  const evaluateSignIn = (email: string, password: string): string => {
    // Define regex patterns
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern =
      /^(?=\w{8,})([\w]*[a-z][\w]*[A-Z][\w]*[0-9][\w]*|[\w]*[A-Z][\w]*[a-z][\w]*[0-9][\w]*|[\w]*[0-9][\w]*[A-Z][\w]*[a-z][\w]*|[\w]*[a-z][\w]*[0-9][\w]*[A-Z][\w]*|[\w]*[A-Z][\w]*[0-9][\w]*[a-z][\w]*|[\w]*[0-9][\w]*[a-z][\w]*[A-Z][\w]*)$/;

    // Validate email
    if (!email.match(emailPattern)) {
      setEmailError(true);
      return "email";
    } else {
      setEmailError(false);
    }
    // Validate password
    if (!password.match(passwordPattern)) {
      setPasswordError(true);
      return "password";
    } else {
      setPasswordError(false);
    }
    return "ok";
  };

  const handleSignIn = (email: string, password: string) => {
    const error = evaluateSignIn(email, password);
    if (error === "email") {
      toast({
        description: <Text dir="rtl">فرمت ایمیل درست نیست.</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } else if (error === "password") {
      toast({
        description: <Text dir="rtl">رمز عبور وارد شده مورد قبول نیست.</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } else if (error === "username") {
      toast({
        description: <Text dir="rtl">نام کاربری انتخاب شده مجاز نیست.</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } else if (error === "confirm") {
      toast({
        description: <Text dir="rtl">رمز عبور تطابق ندارد.</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } else {
      toast({
        description: <Text dir="rtl">خوش آمدید!</Text>,
        status: "success",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    }
  };
  return (
    <VStack spacing="4px">
      <Center marginBottom="20px">
        <Heading size="md">ورود به حساب کاربری</Heading>
      </Center>
      <FormControl>
        <FormLabel htmlFor="email" dir="rtl" marginBottom="0px">
          ایمیل
        </FormLabel>
        <Input
          id="email"
          type="email"
          marginTop="0px"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value), setEmailError(false);
          }}
          borderColor={emailError ? "red.500" : "gray.200"}
        />
      </FormControl>
      <PasswordField
        id="password"
        value={password}
        onChange={(value) => {
          setPassword(value), setPasswordError(false);
        }}
        borderColor={passwordError ? "red.500" : "gray.200"}
      >
        رمز
      </PasswordField>
      <HStack justifyContent="space-between" marginTop="4px">
        <Checkbox defaultChecked colorScheme="red"></Checkbox>
        <Text color="gray.500" fontSize="12px">
          !مرا به‌خاطر بسپار
        </Text>
        <Button
          color="gray.500"
          variant="text"
          fontSize="12px"
          onClick={() => console.log("TODO")}
          paddingRight={0}
        >
          رمز خود را فراموش کردید؟
        </Button>
      </HStack>
      <Center>
        <RedButton
          marginTop="35px"
          onClick={() => handleSignIn(email, password)}
        >
          ورود
        </RedButton>
      </Center>
    </VStack>
  );
};

export default LoginInput;
