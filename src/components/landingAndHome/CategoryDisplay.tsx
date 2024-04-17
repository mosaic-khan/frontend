import { Image, LinkOverlay, LinkBox } from "@chakra-ui/react";

interface Props {
  image: string;
}

const CategoryDisplay = ({ image }: Props) => {
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
        <Image
          boxSize="130px"
          objectFit="cover"
          src={image}
          alt="Image1"
          borderRadius="25%"
          boxShadow="lg"
        />
      </LinkOverlay>
    </LinkBox>
  );
};

export default CategoryDisplay;
