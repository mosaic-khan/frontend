import { Box, Center } from "@chakra-ui/react";
import { PasswordField } from "../../components/register/PassWordField";
import { useState } from "react";
import { GradientRedButton } from "../../components/Buttons";

const ChangePassChildren = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  let [oldPasswordError, setOldPasswordError] = useState(false);
  let [passwordError, setPasswordError] = useState(false);
  let [passwordConfirmError, setPasswordConfirmError] = useState(false);

  return (
    <Center>
      <Box width="60%" boxShadow="sm" p={10}>
        <PasswordField
          id="password"
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
          id="password"
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
        <GradientRedButton height="50px" marginTop="20px" width="100%">
          تایید
        </GradientRedButton>
      </Box>
    </Center>
  );
};
export default ChangePassChildren;
