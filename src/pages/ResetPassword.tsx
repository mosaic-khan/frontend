import {
  Box,
  Center,
  FormControl,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { PasswordField } from "../components/register/PassWordField";
import BG_bottom_right from "../assets/BG_bottom_right.svg";
import BG_bottom_left from "../assets/BG_top_left.svg";
import Confused_tomato from "../assets/ForgotPass_tomato.png";
import { RedButton } from "../components/Buttons";
import ResetPassNav from "../components/ResetPassword/NavSetting";
import userClient from "../api/services/user-service";
import { useEffect, useState } from "react";

const BoxH = 500;
const BoxW = 800;

export const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [result, setResult] = useState("");
  const toast = useToast();
  const url = window.location.href;
  const token = new URLSearchParams(new URL(url).search).get("token");

  const resetPassReq = (password: string) => {
    if (token != null) {
      userClient
        .newPasswordWithToken({
          resetPasswordToken: token,
          password: password,
        })
        .then((res) => {
          console.log("login response: ", res);
          setResult("ok");
        })
        .catch((err) => {
          console.log("login error: ", err);
          setResult("badRequest");
        });
    } else {
      console.log("invalid token");
      setResult("badRequest");
    }
  };

  useEffect(() => {
    if (result === "ok") {
      toast({
        description: <Text dir="rtl">رمزتون با موفقیت عوض شد!</Text>,
        status: "success",
        isClosable: true,
        duration: 4000,
        position: "bottom-left",
      });
    } else if (result === "badRequest") {
      toast({
        description: <Text dir="rtl">خطا از سمت سرور</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } 
    setResult("");
  }, [result]);

  return (
    <Box position="relative">
      <ResetPassNav />
      <Center minHeight="100vh">
        <Box
          boxShadow="dark-lg"
          bg="gray.50"
          height={`${BoxH}px`}
          width={`${BoxW}px`}
          borderRadius="10px"
          overflow="hidden"
        >
          <HStack>
            <Box w="30%" h={`${BoxH}px`} bg="brand.500">
              <Text></Text>
            </Box>
            <VStack
              h="400px"
              w="350px"
              p="50px"
              marginLeft="50px"
              spacing="20px"
              boxShadow="sm"
              borderRadius={5}
              position="relative"
            >
              <Heading size="md" dir="rtl">
                رمز جدیدت رو وارد کن!
              </Heading>
              <FormControl h="500px" w="300px">
                <PasswordField
                  id="password"
                  value={password}
                  onChange={(value) => setPassword(value)}
                >
                  رمز جدید
                </PasswordField>
                <PasswordField
                  id="confirm"
                  value={passwordConfirm}
                  onChange={(value) => setPasswordConfirm(value)}
                >
                  تکرار رمز جدید
                </PasswordField>
              </FormControl>
              <RedButton
                position="absolute"
                bottom="100px"
                onClick={() => resetPassReq(password)}
              >
                تایید
              </RedButton>
            </VStack>
            <Image src={Confused_tomato} boxSize="250px" />
          </HStack>
        </Box>
        <Image
          src={BG_bottom_right}
          position="fixed"
          bottom="0px"
          right="0px"
        />
        <Image src={BG_bottom_left} position="fixed" top="60px" left="0px" />
      </Center>
    </Box>
  );
};

