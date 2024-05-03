import { Box, Center, Text, useToast } from "@chakra-ui/react";
import { PasswordField } from "../../components/register/PassWordField";
import { GradientRedButton } from "../../components/Buttons";
import { useEffect, useState } from "react";
import userClient from "../../api/services/user-service";

const DeletPassChildren = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [oldPasswordError, setOldPasswordError] = useState(false);
  const [result, setResult] = useState("");
  const toast = useToast();
  const handleDelete = (password: string) => {
    userClient
      .deleteAccount({
        password: password,
      })
      .then((res) => {
        console.log("delete response: ", res);
        setResult("ok");
      })
      .catch((err) => {
        console.log("error333: ", err);
        setResult("request");
      });
  };
  useEffect(() => {
    if (result == "ok") {
      toast({
        description: <Text dir="rtl">حذف حساب کاربر انجام شد</Text>,
        status: "success",
        isClosable: true,
        duration: 4000,
        position: "bottom-left",
      });
    }
    setResult("");
  }, [result]);

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
        <GradientRedButton
          height="50px"
          marginTop="20px"
          width="100%"
          onClick={() => handleDelete(oldPassword)}
        >
          تایید
        </GradientRedButton>
      </Box>
    </Center>
  );
};

export default DeletPassChildren;
