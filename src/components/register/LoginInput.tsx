import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { PasswordField } from "../PassWordField";

const LoginInput = () => {
  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack paddingTop= '20px' spacing={{ base: "10px", md: "3" }} textAlign="center">
          <Heading  size={{ base: "10px", md: "sm" }}>
            ورود به حساب کاربری
          </Heading>
          <Text>
            حساب ندارید؟ {"  "}
            <Link color="blue" href="#">
              ثبت نام
            </Link>
          </Text>
        </Stack>
      </Stack>
      <Box
        py={{ base: "0", sm: "8" }}
        px={{ base: "4", sm: "10" }}
        boxShadow={{ base: "none", sm: "md" }}
        borderRadius={{ base: "none", sm: "xl" }}
      >
        <Stack padding="6">
          <FormControl>
            <FormLabel htmlFor="phone#" dir="rtl">
              شماره تلفن
            </FormLabel>
            <Input id="phone#" type="phone#" />
          </FormControl>
          <PasswordField />
        </Stack>
        <HStack justifyContent="space-between" paddingLeft="1px">
          <Checkbox defaultChecked></Checkbox>
          <Text fontSize="12px" whiteSpace="nowrap" as='u'>
            {" "}
            !مرا به‌خاطر بسپار
          </Text>
          <Button variant="text" size="sm" onClick={() => console.log("TODO")}>
            رمز خود را فراموش کردید؟
          </Button>
        </HStack>
        <Stack paddingBlockStart="5">
          <Button colorScheme="blue">ورود</Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default LoginInput;
