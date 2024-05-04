import { Flex, HStack, Button, Box } from "@chakra-ui/react";
import { BasicNavbar } from "../Navigation/BasicNavbar";
import { NAV_ITEMS } from "./NavItems";

const ResetPassNav = () => {
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
};

export default ResetPassNav;
