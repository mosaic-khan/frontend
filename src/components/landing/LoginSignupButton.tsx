import { Button } from "@chakra-ui/react";

const LoginSignUpButton = () => {
  return (
    <Button
      bgColor="brand.500"
      float="right"
      color="white"
      borderRadius="50px"
      width="250px"
      _hover={{ bg: "brand.600" }}
    >
      ورود / ثبت نام
    </Button>
  );
};

export default LoginSignUpButton;
