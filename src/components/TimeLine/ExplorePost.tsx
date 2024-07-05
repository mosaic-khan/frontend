import { Image, Text, Flex, Avatar, HStack, VStack } from "@chakra-ui/react";
import CommentsIcon from "../Icons/CommentsIcon";
import LikeIcon from "../Icons/LikeIcon";
import { useState } from "react";

interface PostProps {
  username: string;
  userImage: string;
  postImage: string;
  likes: number;
  caption: string;
  isLiked: boolean;
}

const Post = ({
  username,
  userImage,
  postImage,
  likes,
  caption,
  isLiked,
}: PostProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleLikeClick = () => {
    if (isLiked) {
      console.log("todo");
    } else {
      console.log("todo");
    }
  };
  const filterCaption = (caption: string, maxLength = 50) => {
    if (isExpanded) {
      return caption;
    }
    return caption.length > maxLength
      ? caption.substring(0, maxLength) + "...more"
      : caption;
  };
  return (
    <VStack
      borderWidth="1px"
      borderColor="gray.200"
      bg="gray.50"
      borderRadius="lg"
      w="md"
      h="600px"
      shadow="md"
      pb={2}
    >
      <Flex align="flex-end" p="2" w="full">
        <Avatar size="sm" src={userImage} />
        <Text fontWeight="bold" ml="2">
          {username}
        </Text>
      </Flex>
      <Image src={postImage} alt="Post image" />

      <HStack dir="rtl" w="full" justifyContent="space-between">
        <Text
          marginRight={5}
          onClick={() => console.log("todo")}
          _hover={{
            cursor: "pointer",
            color: "brand.900",
          }}
        >
          <b>{likes}</b> لایک
        </Text>
        <HStack marginLeft={2}>
          <LikeIcon
            onclick={handleLikeClick}
            like={isLiked ? isLiked : false}
            boxSize={6}
          />
          <CommentsIcon boxSize={6} postid={0n} />
        </HStack>
      </HStack>
      <Flex mt={1}>
        <Text
          p={2}
          dir="rtl"
          onClick={() => setIsExpanded(!isExpanded)}
          _hover={{
            cursor: "pointer",
          }}
        >
          {filterCaption(caption)}
        </Text>
      </Flex>
    </VStack>
  );
};

export default Post;
