import { VStack } from "@chakra-ui/react";
import MainPanel from "../MainPanel";
import LandingTop from "./LandingTop";
import CategoryList from "../CategoryList";
import WebsiteDescription from "../WebsiteDescription";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const LandingLayout = () => {
  const navigate = useNavigate();
  const u = localStorage.getItem("username");
  if (u && u.trim() != "") navigate("/home");
  return (
    <VStack marginTop="50px" spacing="120px">
      <MainPanel bgColor="gray.50">
        <LandingTop />
      </MainPanel>
      <CategoryList marginTop="-60px" />
      <MainPanel bgColor="brand.50">
        <WebsiteDescription />
      </MainPanel>
      <Footer />
    </VStack>
  );
};

export default LandingLayout;
