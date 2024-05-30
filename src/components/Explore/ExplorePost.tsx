import {
  Box,
  Image,
  Text,
  Flex,
  Avatar,
  HStack,
  VStack,
} from "@chakra-ui/react";
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
      overflow="hidden"
      w="md"
      shadow="md"
    >
      <Flex align="center" p="2">
        <Avatar size="sm" src={userImage} />
        <Text fontWeight="bold" ml="2">
          {username}
        </Text>
      </Flex>
      <Image src={postImage} alt="Post image" />

      <Box p={2}>
        <HStack dir="rtl" justifyContent="space-between">
          <Text
            marginRight={2}
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
            <CommentsIcon boxSize={6} />
          </HStack>
        </HStack>
        <Text
          p={2}
          dir="rtl"
          onClick={() => setIsExpanded(!isExpanded)}
          _hover={{
            cursor: "pointer",
            textEmphasis: true,
          }}
        >
          {filterCaption(caption)}
        </Text>
      </Box>
    </VStack>
  );
};

export default Post;
