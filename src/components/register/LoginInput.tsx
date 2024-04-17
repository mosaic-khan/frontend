import {
  Button,
  Center,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { PasswordField } from "./PassWordField";
import { RedButton } from "../Buttons";

const LoginInput = () => {
  return (
    <VStack spacing="4px">
      <Center marginBottom="20px">
        <Heading size="md">ورود به حساب کاربری</Heading>
      </Center>
      <FormControl>
        <FormLabel htmlFor="email" dir="rtl" marginBottom="0px">
          ایمیل
        </FormLabel>
        <Input id="email" type="email" marginTop="0px" focusBorderColor="green.600" />
      </FormControl>
      <PasswordField id="password">رمز</PasswordField>
      <HStack justifyContent="space-between" marginTop="4px">
        <Checkbox defaultChecked colorScheme="red"></Checkbox>
        <Text color="gray.500" fontSize="12px">
          !مرا به‌خاطر بسپار
        </Text>
        <Button
          color="gray.500"
          variant="text"
          fontSize="12px"
          onClick={() => console.log("TODO")}
          paddingRight={0}
        >
          رمز خود را فراموش کردید؟
        </Button>
      </HStack>
      <Center>
        <RedButton marginTop="35px">ورود</RedButton>
      </Center>
    </VStack>
  );
};

export default LoginInput;
