import { VStack } from "@chakra-ui/react";
import MainPanel from "../MainPanel";
import CategoryList from "../CategoryList";
import WebsiteDescription from "../WebsiteDescription";
import Footer from "../Footer";
import TopPosts from "./TopPosts";
import TopUser from "./TopUser";

const HomeLayout = () => {
  return (
    <VStack>
      <CategoryList
        Headingmargintopsize="15px"
        Imagemargintopsize="30px"
      ></CategoryList>
      <MainPanel bgColor="gray.100">
        <TopPosts />
      </MainPanel>
      <MainPanel bgColor="gray.100">
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
