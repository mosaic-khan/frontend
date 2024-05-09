import { SearchIcon, BellIcon, SettingsIcon } from "@chakra-ui/icons";
import { Box, HStack, VStack, Text, Image } from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";

const UserSideBar = () => {
  return (
    <Box
      w="15%"
      h="100%"
      boxShadow="2xl"
      position="fixed"
      borderLeftRadius="md"
      bgGradient="linear(to-t, brand.700, brand.500, brand.300)"
      right="0"
      top="0"
    >
      <VStack padding={20}>
        <VStack
          borderRadius="full"
          w="150px"
          h="150px"
          display="flex"
          justifyContent="center"
          marginBottom={10}
        >
          <Image
            src="https://bit.ly/dan-abramov"
            alt="Profile Image"
            fallbackSrc="https://via.placeholder.com/150"
            boxSize="80px"
            borderRadius="full"
          />
          <Text fontSize="md" fontWeight="bold" color="gray.800">
            {" "}
            نام کاربری
          </Text>
          <Text fontSize="sm" color="gray.600">
            {" "}
            لوکیشن
          </Text>
        </VStack>
        <VStack
          justifyContent="space-between"
          boxSize="120px"
          dir="rtl"
          color="gray.700"
        >
          <HStack
            width="100%"
            cursor="pointer"
            _hover={{ color: "white" }}
            marginBottom={5}
          >
            <BiUser />
            <Text>پروفایل</Text>
          </HStack>

          <HStack
            width="100%"
            cursor="pointer"
            _hover={{ color: "white" }}
            marginBottom={5}
          >
            <SearchIcon />
            <Text>صفحه اصلی</Text>
          </HStack>
          <HStack
            width="100%"
            cursor="pointer"
            _hover={{ color: "white" }}
            marginBottom={5}
          >
            <BellIcon />
            <Text>پیام‌ها</Text>
          </HStack>
          <HStack
            width="100%"
            cursor="pointer"
            _hover={{ color: "white" }}
            marginBottom={5}
          >
            <SettingsIcon />
            <Text>تنظیمات</Text>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default UserSideBar;
