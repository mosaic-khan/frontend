import {
  Box,
  VStack,
  Text,
  Heading,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

interface Props {
  image: string;
  title: string;
  text: string;
}
const Post = ({ image, title, text }: Props) => {
  return (
    <Box h="400px" w="300px" bg="brand.50" borderRadius="60px">
      <VStack>
        <LinkBox
          as="image"
          maxW="sm"
          p="0"
          borderWidth="none"
          //overflow="hidden"
          _hover={{ opacity: "0.95" }}
        >
          <LinkOverlay href="#">
            <Image
              w="280px"
              src={image}
              alt={image}
              borderRadius="50px"
              marginTop="10px"
            />
          </LinkOverlay>
        </LinkBox>
        <Link href="#" _hover={{ opacity: "0.85" }}>
          <Heading fontSize="24">{title}</Heading>
        </Link>
        <Text
          fontSize="18"
          textAlign="right"
          paddingRight="15px"
          paddingLeft="15px"
        >
          {text}
        </Text>
      </VStack>
    </Box>
  );
};

export default Post;
