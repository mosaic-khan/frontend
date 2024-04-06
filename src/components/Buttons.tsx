import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends ButtonProps {
  children: ReactNode;
}

export const RedButton = ({ children, ...rest }: Props) => {
  return (
    <Button
      width="200px"
      colorScheme="red"
      color="brand.500"
      variant="outline"
      borderRadius="100px"
      _hover={{
        fontWeight: "bold",
        boxShadow: "lg",
        bg: "red.50",
        transform: "translateY(-2px)",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export const WhiteButton = ({ children, ...rest }: Props) => {
  return (
    <Button
      color="white"
      colorScheme="white"
      variant="outline"
      borderRadius="100px"
      width="200px"
      _hover={{
        fontWeight: "bold",
        boxShadow: "lg",
        transform: "translateY(-2px)",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
