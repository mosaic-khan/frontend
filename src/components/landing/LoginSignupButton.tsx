import { Button } from "@chakra-ui/react";

interface Props {
  onClick: () => void;
}

const LoginSignUpButton = ({ onClick }: Props) => {
  return (
    <Button
      bgColor="brand.500"
      float="right"
      color="white"
      borderRadius="50px"
      width="250px"
      _hover={{ bg: "brand.600" }}
      onClick={onClick}
    >
      ورود / ثبت نام
    </Button>
  );
};

export default LoginSignUpButton;
