import { Image, LinkOverlay, LinkBox } from "@chakra-ui/react";

interface Props {
  image: string;
}

const CategoryDisplay = ({ image }: Props) => {
  return (
    <LinkBox as="image" maxW="sm" p="0" borderWidth="none">
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
