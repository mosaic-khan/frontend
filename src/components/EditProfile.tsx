import { ChevronDownIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Image,
  Input,
  Select,
} from "@chakra-ui/react";

export const EditProfile = () => {
  return (
    <Box bg="gray.100" w="100%" h="100vh">
      <Center h="100%">
        <Box
          boxShadow="2xl"
          bg="gray.50"
          h="400px"
          w="600px"
          color="white"
          borderRadius="10px"
          position="relative"
        >
          <HStack>
            <Box
              h="400px"
              w="60%"
              dir="rtl"
              position="absolute"
              right="0"
              top="0"
              paddingTop="30px"
              paddingRight="30px"
              textColor="black"
              justifyContent="space-between"
            >
              <FormControl id="name" marginBottom="10px">
                <FormLabel paddingRight="10px">نام</FormLabel>
                <Input variant="filled" _placeholder={{ color: "gray.200" }} />
              </FormControl>

              <FormControl id="FullName" marginBottom="10px">
                <FormLabel paddingRight="10px">نام خانوادگی</FormLabel>
                <Input variant="filled" _placeholder={{ color: "gray.200" }} />
              </FormControl>
              <FormControl id="sex" marginBottom="10px">
                <FormLabel paddingRight="10px">جنسیت</FormLabel>
                <Select
                  variant="filled"
                  _placeholder={{ color: "gray.200" }}
                  icon={
                    <ChevronDownIcon marginLeft="30px" paddingRight="10px" />
                  }
                >
                  <option value="female">خانم</option>
                  <option value="male">آقا</option>
                  <option value="other">ترجیح می‌دهم نگویم</option>
                </Select>
              </FormControl>

              <FormControl id="birthday" marginBottom="10px">
                <FormLabel paddingRight="10px">تاریخ تولد</FormLabel>
                <Input
                  type="date"
                  variant="filled"
                  _placeholder={{ color: "gray.200" }}
                />
              </FormControl>
            </Box>
            <Box
              position="absolute"
              width="150px"
              height="150px"
              left="20px"
              top="20px"
            >
              <Box
                width="100%"
                height="100%"
                borderRadius="full"
                overflow="hidden"
              >
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyH4jpbGF6Sf5wxdUWJ40tciMwqpZsWWRzkw&s"
                  alt="Profile Image"
                  fallbackSrc='https://via.placeholder.com/150'
                  width="100%"
                  height="100%"
                />
              </Box>
              <Box
                position="absolute"
                bottom="0"
                right="0"
                width="40px"
                height="40px"
                borderRadius="full"
                bg="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxShadow="0 2px 4px rgba(0,0,0,0.1)"
              >
                <Icon
                  as={EditIcon}
                  color="gray.600"
                  onClick={() => console.log("TODO")}
                  cursor="pointer"
                />
              </Box>
            </Box>
          </HStack>
        </Box>
      </Center>
    </Box>
  );
};
