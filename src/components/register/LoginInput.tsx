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
        <Input id="email" type="email" marginTop="0px" />
      </FormControl>
      <PasswordField id="password">رمز</PasswordField>
      <HStack justifyContent="space-between" marginTop="4px">
        <Button
          color="gray.500"
          variant="text"
          fontSize="12px"
          onClick={() => console.log("TODO")}
        >
          رمز خود را فراموش کردید؟
        </Button>
        <Checkbox defaultChecked colorScheme="red"></Checkbox>
        <Text color="gray.500" fontSize="12px">
          !مرا به‌خاطر بسپار
        </Text>
      </HStack>
      <Center>
        <Button
          width="200px"
          colorScheme="red"
          color="brand.500"
          variant="outline"
          borderRadius="100px"
          marginTop="20px"
        >
          ورود
        </Button>
      </Center>
    </VStack>
  );
};

export default LoginInput;
