import { HStack, Heading, Spinner, VStack } from "@chakra-ui/react";
import Image1 from "../../assets/1.jpg";
import Image2 from "../../assets/2.webp";
import Image3 from "../../assets/3.webp";
import Image4 from "../../assets/4.webp";
import Image5 from "../../assets/5.jpg";
import Image6 from "../../assets/6.jpg";
import Image7 from "../../assets/7.jpg";
import CategoryDisplay from "./CategoryDisplay";
import searchClient from "../../api/services/search-service";
import { useEffect, useState } from "react";
import { Categories } from "../../api/clients/search";

interface Props {
  marginTop?: string;
}

const CategoryList = ({ marginTop }: Props) => {
  const [categories, setCategories] = useState<Categories[]>();

  useEffect(() => {
    searchClient
      .getAllCategories(
        {},
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        console.log("getAllCategories response: ", res);
        setCategories(
          res.response.categories.filter((c) => c.level == 0).slice(0, 6)
        );
      })
      .catch((err) => {
        console.log("getAllCategories error: ", err);
      });
  }, []);

  return (
    <VStack spacing="40px" marginTop={marginTop ? marginTop : "0px"}>
      <Heading fontSize="26px" fontWeight="bold">
        دسته بندی ها
      </Heading>
      <HStack spacing="70px">
        {categories && categories.length >= 6
          ? categories.map((c) => (
              <CategoryDisplay
                image={`http://back.khanmedia.ir:9290/KhanAPI.MediaAPI/images/category-${c.id}.jpg`}
                name={c.name}
                key={c.id}
              ></CategoryDisplay>
            ))
          : [1, 2, 3, 4, 5, 6].map((x) => (
              <Spinner key={x} boxSize="100px" marginBottom="63px" />
            ))}
      </HStack>
    </VStack>
  );
};

export default CategoryList;
