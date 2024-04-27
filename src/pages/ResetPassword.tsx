import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NavItem, BasicNavbar } from "../components/Navigation/BasicNavbar";
import { PasswordField } from "../components/register/PassWordField";
import BG_bottom_right from "../assets/BG_bottom_right.svg";
import BG_bottom_left  from "../assets/BG_top_left.svg"
import Confused_tomato from "../assets/ForgotPass_tomato.png";
import HomeIcon from "../components/Icons/HomeIcon";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { RedButton } from "../components/Buttons";

const BoxH = 500;
const BoxW = 800;

const NAV_ITEMS: Array<NavItem> = [
  {
    ItemNumber: 1,
    icon: <HomeIcon />,
    href: "/",
  },
  {
    ItemNumber: 2,
    icon: <InfoOutlineIcon boxSize="20px" />,
    children: [
      {
        ItemNumber: 1,
        label: "ارتباط با ما",
        icon: <InfoOutlineIcon color="brand.800" opacity="90%" />,
        href: "#",
      },
    ],
  },
];
export default function ResetPassNav() {
  return (
    <Box>
      <Flex
        position="fixed"
        top="0"
        width="100%"
        bg={"white"}
        h="60px"
        py="10px"
        px="20px"
        borderBottom={0.01}
        borderStyle="dotted"
        borderColor="brand.800"
        align={"center"}
      >
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          p={2}
        >
          <BasicNavbar Nav_Items={NAV_ITEMS} />
        </Flex>

        <HStack textColor="brand.900" spacing="20px" justify="right">
          <Button
            as="a"
            fontSize="sm"
            variant="link"
            href="register"
            textColor="brand.900"
          >
            ثبت نام
          </Button>
          <Button
            as="a"
            fontSize="sm"
            variant="link"
            href="register"
            textColor="brand.900"
          >
            ورود
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}

export const ResetPassword = () => {
  return (
    <Box position="relative">
      <ResetPassNav />
      <Center minHeight="100vh">
        <Box
          boxShadow="dark-lg"
          bg="gray.50"
          height={`${BoxH}px`}
          width={`${BoxW}px`}
          borderRadius="10px"
          overflow="hidden"
        >
          <HStack>
            <Box w="30%" h={`${BoxH}px`} bg="brand.500">
              <Text></Text>
            </Box>
            <VStack
              h="400px"
              w="350px"
              p="50px"
              marginLeft="50px"
              spacing="20px"
              boxShadow="sm"
              borderRadius={5}
              position="relative"
            >
              <Heading size="md" dir="rtl">
                رمز جدیدت رو وارد کن!
              </Heading>
              <FormControl h="500px" w="300px">
                <PasswordField>رمز جدید</PasswordField>
                <PasswordField>تکرار رمز جدید</PasswordField>
              </FormControl>
              <RedButton position="absolute" bottom="100px">
                تایید
              </RedButton>
            </VStack>
            <Image src={Confused_tomato} boxSize="250px" />
          </HStack>
        </Box>
          <Image src={BG_bottom_right} position="fixed" bottom="0px" right="0px"/>
          <Image src={BG_bottom_left} position="fixed" top="60px" left="0px" />
      </Center>
    </Box>
  );
};
