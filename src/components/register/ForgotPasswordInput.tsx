import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  VStack,
} from "@chakra-ui/react";

import { BackButton, RedButton } from "../Buttons";
import tomato from "../../assets/tomato_with_key.png";
import { useState } from "react";
interface Props {
  onSubmit: () => void;
  onCancel: () => void;
}

export const ForgotPassword = ({ onSubmit, onCancel }: Props) => {
  const [email, setEmail] = useState("");
  return (
    <VStack position="relative" h="450px" w="350px">
      <Box position="absolute" left="0" top="0">
        <BackButton onClick={onCancel} />
      </Box>
      <Image src={tomato} height="100px" marginTop="50px"></Image>
      <VStack>
        <Heading size="md" marginBottom="35px">
          رمزتو فراموش کردی؟
        </Heading>
        <FormControl marginBottom="20px">
          <FormLabel dir="rtl" marginBottom="15px">
            ایمیلتو وارد کن تا رمز جدید بذاری!
          </FormLabel>

          <Input
            id="forgot_email"
            type="email"
            focusBorderColor="green.600"
            width="250px"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </FormControl>
        <RedButton
          onClick={() => {
            onSubmit;
            console.log(email);
          }}
        >
          تایید
        </RedButton>
      </VStack>
    </VStack>
  );
};
