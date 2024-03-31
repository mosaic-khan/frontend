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
    <VStack spacing="10px">
      <Center marginBottom="10px">
        <Heading size="md">ورود به حساب کاربری</Heading>
      </Center>
      <FormControl>
        <FormLabel htmlFor="email" dir="rtl" marginBottom="0px">
          ایمیل
        </FormLabel>
        <Input id="email" type="email" marginTop="0px" />
      </FormControl>
      <PasswordField />
      <Button
        color="gray.500"
        variant="text"
        fontSize="12px"
        onClick={() => console.log("TODO")}
      >
        رمز خود را فراموش کردید؟
      </Button>
      <HStack justifyContent="space-between" marginTop="-12px">
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
        >
          ورود
        </Button>
      </Center>
    </VStack>
  );
};

export default LoginInput;
