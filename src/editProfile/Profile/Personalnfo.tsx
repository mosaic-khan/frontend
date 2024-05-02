import { ChevronDownIcon } from "@chakra-ui/icons";
import { FormControl, FormLabel, Input, Select, Box } from "@chakra-ui/react";
import { ShamsiCalendarButton } from "../../components/Buttons";
import { setCityName } from "./HandleCity";

const PerosonalInfo = () => {
  return (
    <Box
      h="500px"
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
          icon={<ChevronDownIcon marginLeft="30px" paddingRight="10px" />}
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

      <FormControl id="city" marginBottom="10px">
        <FormLabel paddingRight="10px">شهر</FormLabel>
        <Input
          onChange={(e) => setCityName(e.target.value, true)}
          variant="filled"
          _placeholder={{ color: "gray.200" }}
        />
        {/* {Cities.map((city) => (
                    <option key={city.length}>{city}</option>
                  ))} */}
      </FormControl>
    </Box>
  );
};

export default PerosonalInfo;