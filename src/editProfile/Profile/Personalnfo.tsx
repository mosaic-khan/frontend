import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useBoolean,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import DatePickerInput from "./DatePickerInput";
import { UserEditInfo } from "../../pages/EditProfile";
import CitySuggestion from "./CitySuggestion";

interface Props {
  userEditInfo: UserEditInfo;
  setUserEditInfo: Dispatch<SetStateAction<UserEditInfo>>;
}

const PersonalInfo = ({ userEditInfo, setUserEditInfo }: Props) => {
  const [isEditingCity, setIsEditingCity] = useBoolean(false);
  const [showPopover, setShowPopover] = useBoolean(false);
  const cityRef = useRef(null);

  useEffect(() => {
    if (isEditingCity) {
      setShowPopover.on();
    } else {
      const timeout = setTimeout(() => {
        setShowPopover.off();
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [isEditingCity]);

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
          value={userEditInfo.user.fName}
          onChange={(e) => {
            setUserEditInfo({
              ...userEditInfo,
              user: { ...userEditInfo.user, fName: e.target.value },
            });
          }}
          variant="filled"
          _placeholder={{ color: "gray.200" }}
        />
      </FormControl>

      <FormControl id="FullName" marginBottom="10px">
        <FormLabel paddingRight="10px">نام خانوادگی</FormLabel>
        <Input
          value={userEditInfo.user.lName}
          onChange={(e) => {
            setUserEditInfo({
              ...userEditInfo,
              user: { ...userEditInfo.user, lName: e.target.value },
            });
          }}
          variant="filled"
          _placeholder={{ color: "gray.200" }}
        />
      </FormControl>
      <FormControl id="sex" marginBottom="10px">
        <FormLabel paddingRight="10px">جنسیت</FormLabel>

        <Select
          value={userEditInfo.user.gender}
          onChange={(e) => {
            setUserEditInfo({
              ...userEditInfo,
              user: { ...userEditInfo.user, gender: e.target.value },
            });
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
        <DatePickerInput
          placeHolderDate={
            userEditInfo.user.birthDay.trim() == ""
              ? "0001-01-01"
              : userEditInfo.user.birthDay.substring(0, 10)
          }
          onChange={(dateString) => {
            console.log("dateString: ", dateString);
            setUserEditInfo({
              ...userEditInfo,
              user: { ...userEditInfo.user, birthDay: dateString },
            });
          }}
        />
      </FormControl>

      <FormControl id="city" marginBottom="10px">
        <FormLabel paddingRight="10px">شهر</FormLabel>
        <Popover
          initialFocusRef={cityRef}
          isOpen={showPopover}
          returnFocusOnClose={false}
          placement="bottom-end"
        >
          <PopoverTrigger>
            <Input
              variant="filled"
              ref={cityRef}
              value={userEditInfo.user.city}
              onFocus={() => {
                setIsEditingCity.on();
              }}
              onBlur={() => {
                setIsEditingCity.off();
              }}
              onChange={(e) => {
                setUserEditInfo({
                  ...userEditInfo,
                  user: { ...userEditInfo.user, city: e.target.value },
                });
              }}
            />
          </PopoverTrigger>
          <PopoverContent w="400px">
            <CitySuggestion
              inputText={userEditInfo.user.city}
              onSelect={(id, city) => {
                console.log("city_id: ", id, "city: ", city);
                setUserEditInfo({
                  ...userEditInfo,
                  user: { ...userEditInfo.user, city: city },
                  cityId: id,
                });
                setShowPopover.off();
              }}
            />
          </PopoverContent>
        </Popover>
      </FormControl>
    </Box>
  );
};

export default PersonalInfo;
