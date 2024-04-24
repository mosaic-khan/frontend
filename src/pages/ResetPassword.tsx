import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { PasswordField } from "../components/register/PassWordField";
import { RedButton } from "../components/Buttons";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import {NavItem, BasicNavbar} from "../components/Navigation/BasicNavbar"
import HomeIcon from "../components/Icons/HomeIcon";


const BoxH = 550;
const BoxW = 500;
const topM = 120;

const NAV_ITEMS: Array<NavItem> = [
  {
    ItemNumber:1,
    icon:<HomeIcon/>,
    href:"/"
    
  },
  {
    ItemNumber:2,
    icon:<InfoOutlineIcon boxSize="20px"/>,
    children: [
      {
        ItemNumber:1,
        label: 'ارتباط با ما',
        icon:<InfoOutlineIcon color="brand.800" opacity="90%"/>,
        href: '#',
      },
    ],
  },
];
export default function ResetPassNav() {
  return (
    <Box>
      <Flex
        bg={"white"}
        h='60px'
        py="10px"
        px="20px"
        borderBottom={0.4}
        borderStyle="solid"
        borderColor="brand.800"
        align={'center'}>
        
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} p={2}>
            <BasicNavbar Nav_Items={NAV_ITEMS}  />
        </Flex>

        <HStack textColor="brand.900" spacing="20px" justify="right">
         
          <Button
            as='a'
            fontSize='sm'
            variant='link'
            href="register"
            textColor="brand.900">
            ثبت نام
          </Button>
          <Button
            as='a'
            fontSize='sm'
            variant='link'
            href="register"
            textColor="brand.900">
            ورود
          </Button>
        </HStack>
      </Flex>

    </Box>
  );
}

export const ResetPassword = () => {
  return (
    <Box>
      <Center marginTop={`${topM}px`} position="relative">
        <Box
          boxShadow="dark-lg"
          bg="gray.50"
          height={`${BoxH}px`}
          width={`${BoxW}px`}
          borderRadius="10px"
          overflow="hidden"
          >
          <ResetPassNav/>
          <Center>
            <VStack h="400px" w="400px" marginTop={"100px"} spacing="20px">
                <Heading size="md" dir="rtl" >
                 رمز جدیدت رو وارد کن!
                </Heading>
                <FormControl h="500px" w="300px">
                  <PasswordField>رمز جدید</PasswordField>
                  <PasswordField>تکرار رمز جدید</PasswordField>
                </FormControl>
                <RedButton position="absolute" bottom="100px">تایید</RedButton>
            </VStack>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};
