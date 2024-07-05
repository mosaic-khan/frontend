import { Image, LinkOverlay, LinkBox, Text, VStack } from "@chakra-ui/react";

interface Props {
  image: string;
  name: string;
}

const CategoryDisplay = ({ image, name }: Props) => {
  return (
    <LinkBox
      as="image"
      maxW="sm"
      p="0"
      borderWidth="none"
      transition="transform 0.3s ease-in-out"
      _hover={{ opacity: "0.85", transform: "scale(1.5)" }}
    >
      <LinkOverlay href="#">
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
