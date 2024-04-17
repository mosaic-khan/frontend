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
    <Box h="400px" w="300px" bg="gray.500" borderRadius="10%" bg="brand.50">
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
              borderRadius="15%"
              marginTop="10px"
            />
          </LinkOverlay>
        </LinkBox>
        <Link href="#" _hover={{ opacity: "0.85" }}>
          <Heading as="h3" fontSize="24px">
            {title}
          </Heading>
        </Link>
        <Text textAlign="right" paddingRight="15px" paddingLeft="15px">
          {text}
        </Text>
      </VStack>
    </Box>
  );
};

export default Post;
