import {
  Avatar,
  Box,
  Center,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CrossButton } from "../Buttons";
import CommentsIcon from "../Icons/CommensIcon";
import LikeIcon from "../Icons/LikeIcon";
import UserNavigation from "../Navigation/ProfileNavigation";
import CaptionDetails from "./CaptionSection";
import CommentSection from "./CommentSection";
import ImageSection from "./ImageSection";

const H = 500;
const W = 1000;
type Post = {
  id: bigint;
  title: string;
  ingredients: { [key: string]: string };
  description: string;
  numImages: number;
  numLikes: number;
  like: boolean;
  imageUrls: string[];
  username: string;
  profilePicUrl: string;
  category: string;
};
type PostPageUiProps = {
    post: Post | null;
  };

const PostPageUi = ( {post} : PostPageUiProps) => {
  return (
    <Box h="100vh" bgColor="gray.100">
      <Box w="full" h="10%" position="fixed" zIndex={10}>
        {/* navbar */}
        <UserNavigation />
      </Box>
      <Center position="relative">
        <CrossButton
          position="absolute"
          left="200px"
          top="20%"
          onClick={() => console.log("todo")}
        />
        <HStack
          h={`${H}px`}
          w={`${W}px`}
          marginTop="10%"
          borderRadius="md"
          overflow="hidden"
          bg="gray.50"
          shadow="2xl"
        >
          {/*Image section*/}
          <ImageSection />
          {/*Caption section*/}
          <VStack h="full" w="400px" alignItems="right" padding={4}>
            {/*User Info*/}
            <HStack dir="rtl" spacing="20px">
              <Avatar src={post?.profilePicUrl} />
              <Heading fontSize="30px" textColor="gray.700">
                {post?.username}
              </Heading>
            </HStack>

            {/*Post Detail*/}
            <HStack h="400px" w="full" dir="rtl" padding={2}>
              <CaptionDetails
                ingredients={post?.ingredients ? post.ingredients : {}}
                description={post?.description ? post.description : ""}
              />
            </HStack>
            <HStack dir="rtl" justifyContent="space-between">
              <Text
                marginRight={2}
                onClick={() => console.log("todo")}
                _hover={{
                  cursor: "pointer",
                  color: "brand.900",
                }}
              >
                <b>{post?.numLikes}</b> لایک
              </Text>
              <HStack marginLeft={2}>
                <LikeIcon
                  postId={post?.id ? post.id : BigInt(0)}
                  like={post?.like ? post.like : false}
                />
                <CommentsIcon />
              </HStack>
            </HStack>
            {/*Comment section*/}
            <CommentSection />
          </VStack>
        </HStack>
      </Center>
    </Box>
  );
};

export default PostPageUi;
