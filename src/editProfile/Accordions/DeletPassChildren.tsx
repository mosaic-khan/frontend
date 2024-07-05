import { Box, Center, Text, useToast } from "@chakra-ui/react";
import { PasswordField } from "../../components/register/PassWordField";
import { GradientRedButton } from "../../components/Buttons";
import { useEffect, useState } from "react";
import userClient from "../../api/services/user-service";
import { useNavigate } from "react-router-dom";

const DeletPassChildren = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [oldPasswordError, setOldPasswordError] = useState(false);
  const [result, setResult] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const handleDelete = (password: string) => {
    userClient
      .deleteAccount(
        {
          password: password,
        },
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        console.log("delete response: ", res);
        setResult("ok");
      })
      .catch((err) => {
        console.log("error333: ", err);
        setResult("error");
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

      localStorage.removeItem("username");
      localStorage.removeItem("userClient");
      localStorage.removeItem("User");
      localStorage.removeItem("jwt");
      localStorage.removeItem("userClient");
      localStorage.removeItem("refreshToken");
      navigate("/Register");
    }
    if (result == "error") {
      toast({
        description: <Text dir="rtl">رمز وارد شده اشتباه است!</Text>,
        status: "error",
        isClosable: true,
        duration: 4000,
        position: "bottom-left",
      });
    }
    setResult("");
  }, [result]);

  return (
    <Center>
      <Box width="60%" padding="0px 30px 30px 30px">
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
          borderRadius="40px"
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
