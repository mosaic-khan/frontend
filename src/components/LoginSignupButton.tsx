import { Button } from "@chakra-ui/react";

const LoginSignupButton = () => {
  return (
    <Button
      bgColor="#ff004c"
      float="right"
      marginRight="50px"
      marginTop="20px"
      color="white"
      borderRadius="50px"
      width="250px"
      _hover={{ bg: "#8c002a" }}
    >
      ورود / ثبت نام
    </Button>
  );
};

export default LoginSignupButton;
