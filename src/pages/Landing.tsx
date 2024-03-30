import { Text, VStack, Heading } from "@chakra-ui/layout";
import LandingBottomArea from "../components/LandingBottomArea";
import LandingPagePanel from "../components/LandingPagePanel";
import { SearchBar } from "../components/SearchBar";
import LoginSignupButton from "../components/LoginSignupButton";
import LandingMainPart from "../components/LandingMainPart";
import LandingCategories from "../components/LandingCategories";

const Landing = () => {
  return (
    <VStack>
      <LandingPagePanel>
        <Heading
          color="black"
          textAlign="right"
          paddingRight="50px"
          fontSize="85px"
          fontWeight="bold"
          paddingTop="150px"
        >
          خوان
        </Heading>
        <Text
          textAlign="right"
          paddingTop="20px"
          paddingRight="50px"
          color="black"
          fontWeight="bold"
        >
          اشتراک گذاری دستورهای آشپزی
        </Text>
        <SearchBar></SearchBar>
        <LoginSignupButton></LoginSignupButton>
      </LandingPagePanel>
      <LandingCategories></LandingCategories>
      <LandingMainPart>
        <Heading
          as="h3"
          textAlign="right"
          paddingRight="50px"
          paddingTop="80px"
        >
          اپلیکیشن خوان
        </Heading>
      </LandingMainPart>
      <LandingBottomArea />
    </VStack>
  );
};

export default Landing;
