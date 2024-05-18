import { HStack, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { BsSend } from "react-icons/bs";

const CommentSection = () => {
  return (
    <HStack h="50px" w="full" dir="rtl">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<BsSend color="gray.300" />}
        />
        <Input
          placeholder="ثبت نظر..."
          boxShadow="md"
          borderRadius="2xl"
          focusBorderColor="green.600"
        ></Input>
      </InputGroup>
    </HStack>
  );
};

export default CommentSection;
