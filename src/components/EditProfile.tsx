import { ChevronDownIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Image,
  Input,
  Select,
} from "@chakra-ui/react";
import { ShamsiCalendarButton, GradientRedButton } from "./Buttons";
import tomato from "../assets/tomato-logo.png";

export const EditProfile = () => {
  return (
    <Box
    position="relative"
      w="100%"
      h="100vh"
      bgColor="#ffd2c8"
    >
      <Image boxSize="250px" position="absolute" right='0' bottom="0" src={tomato} borderColor="#ffd2c8"></Image>
      <Box position="absolute" width="800px" left="25%" top="25%">
        <Box
          boxShadow="2xl"
          bg="gray.50"
          h="400px"
          w="600px"
          color="white"
          borderRadius="10px"
          position="relative"
          marginLeft="5%"
          top="20px"
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
                <ShamsiCalendarButton></ShamsiCalendarButton>
              </FormControl>
            </Box>
            <Box
              position="absolute"
              width="170px"
              height="170px"
              left="5%"
              top="15%"
            >
              <Box
                width="100%"
                height="100%"
                borderRadius="full"
                overflow="hidden"
              >
                <Image
                  src="https://bit.ly/dan-abramov"
                  alt="Profile Image"
                  fallbackSrc="https://via.placeholder.com/150"
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

        <GradientRedButton position="relative" bottom="10px">
          ذخیره
        </GradientRedButton>
      </Box>
    </Box>
  );
};
