import { VStack } from "@chakra-ui/react";
import MainPanel from "../MainPanel";
import LandingTop from "./LandingTop";
import CategoryList from "../CategoryList";
import WebsiteDescription from "../WebsiteDescription";
import Footer from "../Footer";

const LandingLayout = () => {
  return (
    <VStack>
      <MainPanel bgColor="gray.50">
        <LandingTop />
      </MainPanel>
      <CategoryList></CategoryList>
      <MainPanel bgColor="brand.50">
        <WebsiteDescription />
      </MainPanel>
      <Footer />
    </VStack>
  );
};

export default LandingLayout;
