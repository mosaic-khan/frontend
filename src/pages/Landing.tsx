import { VStack } from "@chakra-ui/layout";
import LandingBottomArea from "../components/landing/LandingBottomArea";
import LandingCategories from "../components/landing/LandingCategories";
import LandingPanels from "../components/landing/LandingPanels";
import LandingTop from "../components/landing/LandingTop";
import LandingMiddle from "../components/landing/LandingMiddle";

const Landing = () => {
  return (
    <VStack>
      <LandingPanels bgColor="gray.50">
        <LandingTop />
      </LandingPanels>
      <LandingCategories></LandingCategories>
      <LandingPanels bgColor="brand.50">
        <LandingMiddle />
      </LandingPanels>
      <LandingBottomArea />
    </VStack>
  );
};

export default Landing;
