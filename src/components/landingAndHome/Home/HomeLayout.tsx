import { VStack } from "@chakra-ui/react";
import MainPanel from "../MainPanel";
import CategoryList from "../CategoryList";
import WebsiteDescription from "../WebsiteDescription";
import Footer from "../Footer/Footer";
import TopPosts from "./TopPosts";
import TopUser from "./TopUser";

const HomeLayout = () => {
  return (
    <VStack marginTop="100px" spacing="120px" w="100%">
      <CategoryList />
      <MainPanel bgColor="gray.50">
        <TopPosts />
      </MainPanel>
      <MainPanel bgColor="gray.50">
        <TopUser />
      </MainPanel>
      <MainPanel bgColor="brand.50">
        <WebsiteDescription />
      </MainPanel>
      <Footer />
    </VStack>
  );
};

export default HomeLayout;
