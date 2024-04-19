import { useState } from "react";
import {
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { PasswordField } from "./PassWordField";
import { RedButton } from "../Buttons";

interface Props {
  onSubmit: () => void;
}

const SignUpInput = ({ onSubmit }: Props) => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  let [emailError, setEmailError] = useState(false);
  let [usernameError, setUsernameError] = useState(false);
  let [passwordError, setPasswordError] = useState(false);
  let [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const evaluateSignUp = (
    email: string,
    password: string,
    username: string,
    passwordConfirm: string
  ): string => {
    // Define regex patterns
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const usernamePattern = /^[a-zA-Z0-9_-]{3,20}$/;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_]).{8,72}$/;

    // Validate email
    if (!email.match(emailPattern)) {
      setEmailError(true);
      return "email";
    } else {
      setEmailError(false);
    }

    // Validate username
    if (!username.match(usernamePattern)) {
      setUsernameError(true);
      return "username";
    } else if (username) {
      setUsernameError(false);
    } else;

    // Validate password
    if (!password.match(passwordPattern)) {
      setPasswordError(true);
      return "password";
    } else {
      setPasswordError(false);
    }

    if (password !== passwordConfirm) {
      setPasswordConfirmError(true);
      return "confirm";
    } else if (passwordConfirm) {
      setPasswordConfirmError(false);
    } else;
    //Add backend support here

    // All validations passed
    return "ok";
  };

  const handleSignUp = (
    email: string,
    password: string,

    username: string,
    passwordconfirm: string
  ) => {
    const error = evaluateSignUp(email, password, username, passwordconfirm);
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
        description: (
          <Text dir="rtl">
            ثبت نام با موفقیت انجام شد. کد تایید برای شما ارسال خواهد شد.
          </Text>
        ),
        status: "success",
        isClosable: true,
        duration: 4000,
        position: "bottom-left",
      });
      onSubmit();
    }
  };
  return (
    <VStack spacing="4px">
      <Center marginBottom="20px">
        <Heading size="md">ایجاد حساب کاربری</Heading>
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
      <FormControl>
        <FormLabel htmlFor="username" dir="rtl" marginBottom="0px">
          نام کاربری
        </FormLabel>
        <Input
          id="username"
          type="username"
          marginTop="0px"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value), setUsernameError(false);
          }}
          borderColor={usernameError ? "red.500" : "gray.200"}
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
        رمز عبور
      </PasswordField>
      <PasswordField
        id="password"
        value={passwordConfirm}
        onChange={(value) => {
          setPasswordConfirm(value), setPasswordConfirmError(false);
        }}
        borderColor={passwordConfirmError ? "red.500" : "gray.200"}
      >
        تکرار رمز عبور
      </PasswordField>
      <Center>
        {/* <RedButton marginTop="30px" onClick={onSubmit}>
          ثبت‌نام{" "}
        </RedButton> */}
        <RedButton
          marginTop="30px"
          onClick={() =>
            handleSignUp(email, password, username, passwordConfirm)
          }
        >
          ثبت‌نام
        </RedButton>
      </Center>
    </VStack>
  );
};

export default SignUpInput;
