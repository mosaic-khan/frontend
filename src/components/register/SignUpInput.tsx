import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { PasswordField } from "./PassWordField";

const SignUpInput = () => {
  return (
    <VStack spacing="4px">
      <Center marginBottom="20px">
        <Heading size="md">ایجاد حساب کاربری</Heading>
      </Center>
      <FormControl>
        <FormLabel htmlFor="email" dir="rtl" marginBottom="0px">
          ایمیل
        </FormLabel>
        <Input id="email" type="email" marginTop="0px" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="username" dir="rtl" marginBottom="0px">
          نام کاربری
        </FormLabel>
        <Input id="username" type="username" marginTop="0px" />
      </FormControl>
      <PasswordField id="password">رمز عبور</PasswordField>
      <PasswordField id="password">تکرار رمز عبور</PasswordField>
      <Center>
        <Button
          width="200px"
          colorScheme="red"
          color="brand.500"
          variant="outline"
          borderRadius="100px"
          marginTop="30px"
        >
          ثبت‌نام
        </Button>
      </Center>
    </VStack>
  );
};

export default SignUpInput;
