import { Image, LinkOverlay, LinkBox, Text, VStack } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  image: string;
  name: string;
  categoryId: Number;
}

const CategoryDisplay = ({ image, name, categoryId }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSelectCategory = () => {
    if (categoryId) {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set("categoryId", categoryId.toString());
      const newUrl = `/search?${searchParams.toString()}`;
      navigate(newUrl);
    }
  };

  return (
    <LinkBox
      as="image"
      maxW="sm"
      p="0"
      borderWidth="none"
      transition="transform 0.3s ease-in-out"
      _hover={{ opacity: "0.85", transform: "scale(1.5)" }}
    >
      <LinkOverlay onClick={handleSelectCategory}>
        <VStack>
          <Image
            boxSize="130px"
            objectFit="cover"
            src={image}
            alt="Image1"
            borderRadius="25%"
            boxShadow="lg"
          />
          <Text textAlign="center" as="b">
            {name}
          </Text>
        </VStack>
      </LinkOverlay>
    </LinkBox>
  );
};

export default CategoryDisplay;
