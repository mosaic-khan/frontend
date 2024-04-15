import { Avatar, Divider, HStack, VStack } from "@chakra-ui/react";
import LogoWithText from "../logo/LogoWithText";
import { SearchBar } from "../landingAndHome/SearchBar";
import HeaderMenu from "./HeaderMenu";
import HeaderProfileIcon from "./HeaderProfileIcon";

const Header = () => {
  return (
    <VStack w="100%" spacing="0px">
      <HStack h="70px" w="100%" justifyContent="space-between">
        <HStack marginLeft="6px">
          <HeaderMenu itemTexts={["خروج"]} />
          <HeaderProfileIcon />
        </HStack>
        <SearchBar />
        <LogoWithText />
      </HStack>
      <Divider borderWidth="1px" borderColor="red.200" boxShadow="lg" />
    </VStack>
  );
};

export default Header;
