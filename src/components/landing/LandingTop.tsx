import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { SearchBar } from "./SearchBar";
import LoginSignUpButton from "./LoginSignupButton";
import logo from "../../assets/Logo_0_2_1.svg";
import fruits from "../../assets/Fruits.png";

const LandingTop = () => {
  return (
    <Box w="100%" h="680px">
      <HStack h="100%" justifyContent="space-between">
        <Box w="900px" h="900px" marginLeft="-160px" marginTop="200px">
          <Image src={fruits} boxSize="900px" />
        </Box>
        <VStack h="100%" alignItems="end" marginRight="50px" marginTop="100px">
          <Image src={logo} boxSize="60px" />
          <Heading
            color="black"
            textAlign="right"
            fontSize="100px"
            fontWeight="bold"
            marginTop="120px"
          >
            خوان
          </Heading>
          <Text textAlign="right" color="black" fontWeight="bold">
            اشتراک گذاری دستورهای آشپزی
          </Text>
          <SearchBar></SearchBar>
          <LoginSignUpButton></LoginSignUpButton>
        </VStack>
      </HStack>
    </Box>
  );
};

export default LandingTop;
