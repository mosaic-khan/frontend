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

const SignUpInput = () => {
  return (
    <VStack spacing="10px">
      <Center marginBottom="10px">
        <Heading size="md">ایجاد حساب کاربری</Heading>
      </Center>
      <FormControl>
        <FormLabel htmlFor="email" dir="rtl" marginBottom="0px">
          ایمیل
        </FormLabel>
        <Input id="email" type="email" marginTop="10px" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="username" dir="rtl" marginBottom="0px">
          نام کاربری
        </FormLabel>
        <Input id="username" type="username" marginTop="0px" dir="rtl" />
      </FormControl>
      <PasswordField />
      <FormControl>
        <FormLabel htmlFor="pass2" dir="rtl" marginBottom="0px">
          تکرار رمز عبور
        </FormLabel>
        <Input id="pass2" type="pass2" marginTop="0px" dir="rtl" />
      </FormControl>
      <Center>
        <Button
          width="200px"
          colorScheme="red"
          color="brand.500"
          variant="outline"
          borderRadius="100px"
        >
          ثبت‌نام
        </Button>
      </Center>
    </VStack>
  );
};

export default SignUpInput;
