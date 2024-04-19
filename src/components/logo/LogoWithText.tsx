import { HStack, Heading } from "@chakra-ui/react";
import Logo from "./Logo";

const LogoWithText = () => {
  return (
    <HStack>
      <Heading size="lg">خوان</Heading>
      <Logo />
    </HStack>
  );
};

export default LogoWithText;
