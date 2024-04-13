import { Divider, HStack, VStack } from "@chakra-ui/react";
import LogoWithText from "../logo/LogoWithText";
import { SearchBar } from "../landingAndHome/SearchBar";

const Header = () => {
  return (
    <VStack w="100%" spacing="0px">
      <HStack h="60px" w="100%" justifyContent="space-between">
        <LogoWithText />
        <SearchBar />
        <LogoWithText />
      </HStack>
      <Divider borderWidth="1px" borderColor="red.200" boxShadow="lg" />
    </VStack>
  );
};

export default Header;
