import { useEffect, useState } from "react";
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
import userClient from "../../api/services/user-service";
import client from "../../api/services/user-service";

interface Props {
  forgotPage: () => void;
}

const LoginInput = ({ forgotPage }: Props) => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  let [emailError, setEmailError] = useState(false);
  let [passwordError, setPasswordError] = useState(false);

  const evaluateSignIn = (email: string): boolean => {
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

  const handleSignIn = (email: string, password: string) => {
    let valid = evaluateSignIn(email);
    if (valid) {
      userClient
        .login({
          password: password,
          userNameOrEmail: email,
        })
        .then((res) => {
          console.log("login response: ", res);
          localStorage.setItem("jwt", res.response.jwtToken);
          setResult("ok");
        })
        .catch((err) => {
          console.log("login error: ", err);
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
        description: <Text dir="rtl">خوش آمدید!</Text>,
        status: "success",
        isClosable: true,
        duration: 4000,
        position: "bottom-left",
      });
    }
    setResult("");
  }, [result]);

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
          focusBorderColor="green.600"
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
        <Text color="gray.500" fontSize="12px" whiteSpace={"nowrap"}>
          !مرا به‌خاطر بسپار
        </Text>
        <Button
          color="gray.500"
          variant="text"
          fontSize="12px"
          onClick={forgotPage}
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
