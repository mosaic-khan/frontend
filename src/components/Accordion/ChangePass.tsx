import { Box } from "@chakra-ui/react";
import { PasswordField } from "../register/PassWordField";
import { useState } from "react";

const ChangePass = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  let [oldPasswordError, setOldPasswordError] = useState(false);
  let [passwordError, setPasswordError] = useState(false);
  let [passwordConfirmError, setPasswordConfirmError] = useState(false);

  return (
    <Box>
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
    </Box>
  );
};
export default ChangePass;
