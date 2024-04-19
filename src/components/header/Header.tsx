import { Divider, Flex, HStack, VStack } from "@chakra-ui/react";
import LogoWithText from "../logo/LogoWithText";
import { SearchBar } from "../landingAndHome/SearchBar";
import HeaderMenu from "./HeaderMenu";
import HeaderProfileIcon from "./HeaderProfileIcon";

const Header = () => {
  return (
    <Flex position="fixed" w="100%" zIndex="10" bg="white">
      <VStack w="100%" spacing="0px">
        <HStack
          h="70px"
          w="100%"
          justifyContent="space-between"
          paddingLeft="20px"
          paddingRight="20px"
        >
          <HStack>
            <HeaderMenu
              itemTexts={[
                "ایجاد پست",
                "ذخیره ها",
                "دعوت از دوستان",
                "تنظیمات",
                "خروج",
              ]}
            />
            <HeaderProfileIcon />
          </HStack>
          <SearchBar width="680px" />
          <LogoWithText />
        </HStack>
        <Divider borderWidth="1px" borderColor="red.200" />
      </VStack>
    </Flex>
  );
};

export default Header;
