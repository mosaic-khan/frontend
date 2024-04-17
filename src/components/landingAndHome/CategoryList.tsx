import { HStack, Heading, VStack } from "@chakra-ui/react";
import Image1 from "../../assets/1.jpg";
import Image2 from "../../assets/2.webp";
import Image3 from "../../assets/3.webp";
import Image4 from "../../assets/4.webp";
import Image5 from "../../assets/5.jpg";
import Image6 from "../../assets/6.jpg";
import Image7 from "../../assets/7.jpg";
import CategoryDisplay from "./CategoryDisplay";

interface Props {
  marginTop?: string;
}

const CategoryList = ({ marginTop }: Props) => {
  return (
    <VStack spacing="40px" marginTop={marginTop ? marginTop : "0px"}>
      <Heading fontSize="26px" fontWeight="bold">
        دسته بندی ها
      </Heading>
      <HStack spacing="50px">
        <CategoryDisplay image={Image1}></CategoryDisplay>
        <CategoryDisplay image={Image2}></CategoryDisplay>
        <CategoryDisplay image={Image3}></CategoryDisplay>
        <CategoryDisplay image={Image4}></CategoryDisplay>
        <CategoryDisplay image={Image5}></CategoryDisplay>
        <CategoryDisplay image={Image6}></CategoryDisplay>
        <CategoryDisplay image={Image7}></CategoryDisplay>
      </HStack>
    </VStack>
  );
};

export default CategoryList;
