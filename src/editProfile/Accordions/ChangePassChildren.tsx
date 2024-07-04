import { Box, Center } from "@chakra-ui/react";
import { PasswordField } from "../../components/register/PassWordField";
import { useState, useEffect } from "react";
import { GradientRedButton } from "../../components/Buttons";
import { useToast, Text } from "@chakra-ui/react";
import userClient from "../../api/services/user-service";

const ChangePassChildren = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  let [oldPasswordError, setOldPasswordError] = useState(false);
  let [passwordError, setPasswordError] = useState(false);
  let [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const [result, setResult] = useState("");
  const toast = useToast();

  useEffect(() => {
    if (result === "error") {
      toast({
        description: <Text dir="rtl">خطا از سمت سرور</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } else if (result == "ok") {
      toast({
        description: <Text dir="rtl">رمز شما با موفقیت عوض شد.</Text>,
        status: "success",
        isClosable: true,
        duration: 4000,
        position: "bottom-left",
      });
    } else if (result === "password") {
      toast({
        description: <Text dir="rtl">رمز عبور وارد شده مورد قبول نیست.</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } else if (result === "confirm") {
      toast({
        description: <Text dir="rtl">رمز عبور تطابق ندارد.</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    }

    setResult("");
  }, [result]);

  const evaluateSignUp = (
    oldPass: string,
    password: string,
    passwordConfirm: string
  ): boolean => {
    // Define regex patterns
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_]).{8,72}$/;

    if (!oldPass.match(passwordPattern)) {
      setOldPasswordError(true);
      setResult("password");
      return false;
    } else {
      setOldPasswordError(false);
    }

    // Validate password
    if (!password.match(passwordPattern)) {
      setPasswordError(true);
      setResult("password");
      return false;
    } else {
      setPasswordError(false);
    }

    if (password !== passwordConfirm) {
      setPasswordConfirmError(true);
      setResult("confirm");
      return false;
    } else if (passwordConfirm) {
      setPasswordConfirmError(false);
    } else;

    return true;
  };

  function HandleChangePassword(
    oldPass: string,
    newPass: string,
    passwordConfirm: string
  ) {
    const valid = evaluateSignUp(oldPass, newPass, passwordConfirm);

    if (valid) {
      userClient
        .changePassword(
          {
            oldPassword: oldPass,
            newPassword: newPass,
          },
          {
            meta: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        )
        .then((res) => {
          console.log("signUp response: ", res);
          setResult("ok");
        })
        .catch((err) => {
          console.log("changePass error: ", err);
          setResult("error");
        });
    }
  }

  return (
    <Center>
      <Box width="60%" padding="0px 30px 30px 30px">
        <PasswordField
          id="oldPass"
          value={oldPassword}
          variant="filled"
          _placeholder={{ color: "gray.200" }}
          onChange={(value) => {
            setOldPassword(value), setOldPasswordError(false);
          }}
          borderColor={oldPasswordError ? "red.500" : "gray.200"}
        >
          رمز عبور فعلی
        </PasswordField>
        <PasswordField
          id="password"
          value={password}
          variant="filled"
          _placeholder={{ color: "gray.200" }}
          onChange={(value) => {
            setPassword(value), setPasswordError(false);
          }}
          borderColor={passwordError ? "red.500" : "gray.200"}
        >
          رمز عبور جدید
        </PasswordField>
        <PasswordField
          id="confirmPass"
          value={passwordConfirm}
          variant="filled"
          _placeholder={{ color: "gray.200" }}
          onChange={(value) => {
            setPasswordConfirm(value), setPasswordConfirmError(false);
          }}
          borderColor={passwordConfirmError ? "red.500" : "gray.200"}
        >
          تکرار رمز عبور
        </PasswordField>
        <GradientRedButton
          height="50px"
          marginTop="20px"
          borderRadius="40px"
          width="100%"
          onClick={() =>
            HandleChangePassword(oldPassword, password, passwordConfirm)
          }
        >
          تایید
        </GradientRedButton>
      </Box>
    </Center>
  );
};
export default ChangePassChildren;
