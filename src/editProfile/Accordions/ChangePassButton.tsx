import { AccordionButton, HStack, Text } from "@chakra-ui/react";
import { IoLockClosed } from "react-icons/io5";

const ChangePassButton = () => {
  return (
    <AccordionButton dir="rtl" paddingRight="30px" borderRadius="lg">
      <HStack h="80px">
        <IoLockClosed color="gray" size="20px" />
        <Text textAlign={"right"} color="gray.600" fontSize="2xl">
          تغییر رمز عبور
        </Text>
      </HStack>
    </AccordionButton>
  );
};

export default ChangePassButton;
