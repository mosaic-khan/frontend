import { HStack, Heading } from "@chakra-ui/react";
import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.webp";
import Image3 from "../assets/3.webp";
import Image4 from "../assets/4.webp";
import Image5 from "../assets/5.jpg";
import Image6 from "../assets/6.jpg";
import Image7 from "../assets/7.jpg";
import LandingCategoriesImage from "./LandingCategoriesImage";
const LandingCategories = () => {
  return (
    <>
      <Heading as="h4" fontSize="20px">
        دسته بندی ها
      </Heading>
      <HStack marginTop="60px" spacing="50px">
        <LandingCategoriesImage image={Image1}></LandingCategoriesImage>
        <LandingCategoriesImage image={Image2}></LandingCategoriesImage>
        <LandingCategoriesImage image={Image3}></LandingCategoriesImage>
        <LandingCategoriesImage image={Image4}></LandingCategoriesImage>
        <LandingCategoriesImage image={Image5}></LandingCategoriesImage>
        <LandingCategoriesImage image={Image6}></LandingCategoriesImage>
        <LandingCategoriesImage image={Image7}></LandingCategoriesImage>
      </HStack>
    </>
  );
};

export default LandingCategories;
