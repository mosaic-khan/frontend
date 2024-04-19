import { VStack } from "@chakra-ui/react";
import Header from "../components/header/Header";
import HomeLayout from "../components/landingAndHome/Home/HomeLayout";

const Home = () => {
  return (
    <VStack>
      <Header />
      <HomeLayout />
    </VStack>
  );
};

export default Home;
