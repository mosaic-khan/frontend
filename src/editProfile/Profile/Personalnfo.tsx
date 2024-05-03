import { ChevronDownIcon } from "@chakra-ui/icons";
import { FormControl, FormLabel, Input, Select, Box, Popover, PopoverBody, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import { ShamsiCalendarButton } from "../../components/Buttons";

import userClient from "../../api/services/user-service";
import { useState } from "react";
type City = {
  id: number;
  name: string;
};

const PerosonalInfo = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const fetchCities = (input: string) => {
    if (!input) {
      setIsOpen(false);
      return;
    }
    userClient
      .getCities(
        { cityPattern: input },
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        setCities(res.response.cities);
      })
      .catch((err) => {
        console.error("GetCities error: ", err);
      });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    fetchCities(value);
  };

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
        <Input
          value={user.fName}
          onChange={(e) => {
            setUser({ ...user, fName: e.target.value });
          }}
          variant="filled"
          _placeholder={{ color: "gray.200" }}
        />
      </FormControl>

      <FormControl id="FullName" marginBottom="10px">
        <FormLabel paddingRight="10px">نام خانوادگی</FormLabel>
        <Input
          value={user.lName}
          onChange={(e) => {
            setUser({ ...user, lName: e.target.value });
          }}
          variant="filled"
          _placeholder={{ color: "gray.200" }}
        />
      </FormControl>
      <FormControl id="sex" marginBottom="10px">
        <FormLabel paddingRight="10px">جنسیت</FormLabel>

        <Select
          value={user.gender}
          onChange={(e) => {
            setUser({ ...user, gender: e.target.value });
          }}
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
      <Popover
        isOpen={isOpen && cities.length > 0}
        onClose={() => setIsOpen(false)}
      >
        <PopoverTrigger>
          <Input
            value={inputValue}
            onChange={handleInputChange}
            variant="filled"
          />
        </PopoverTrigger>
        <PopoverContent width="auto">
          <PopoverBody>
            {cities.map((city) => (
              <div key={city.id} tabIndex={0}>
                {city.name}
              </div>
            ))}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </FormControl>
    </Box>
  );
};

export default PerosonalInfo;
