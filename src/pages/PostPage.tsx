import { useEffect, useState } from "react";
import HandlePostRequest from "../components/postPage/HandlePost";
import PostApi from "../api/services/post-service";
import {
  Center,
  HStack,
  VStack,
  Avatar,
  Heading,
  Box,
  Text,
} from "@chakra-ui/react";
import { CrossButton } from "../components/Buttons";
import CommentsIcon from "../components/Icons/CommentsIcon";
import LikeIcon from "../components/Icons/LikeIcon";
import UserNavigation from "../components/Navigation/ProfileNavigation";
import CaptionDetails from "../components/postPage/CaptionSection";
import CommentSection from "../components/postPage/CommentSection";
import ImageSection from "../components/postPage/ImageSection";
import { Post } from "../api/clients/post";
const H = 500;
const W = 1000;

const PostPage = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [update, triggerUpdate] = useState(true);
  useEffect(() => {
    if (update) {
      HandlePostRequest()
        .then((fetchedPost) => {
          if (fetchedPost) {
            setPost(fetchedPost as Post);
            triggerUpdate(false);
          } else {
            console.error("Received undefined post data");
          }
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
        });
    }
  }, [update]);

  function sendLikeRequest(postId: bigint, action: string) {
    return new Promise((resolve, reject) => {
      if (action == "LikeAction") {
        PostApi.like(
          { postId: postId },
          {
            meta: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        )
          .then((res) => {
            resolve(res);
            triggerUpdate(true);
          })
          .catch((res) => {
            reject(res);
          });
      } else if (action == "DisLikeAction") {
        PostApi.dislike(
          { postId: postId },
          {
            meta: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        )
          .then((res) => {
            resolve(res);
            triggerUpdate(true);
          })
          .catch((res) => {
            reject(res);
          });
      } else {
        reject("some weird error occured.");
      }
    });
  }
  const handleLikeClick = () => {
    if (post?.like) {
      sendLikeRequest(post?.id, "DisLikeAction");
    } else {
      sendLikeRequest(post?.id ? post.id : BigInt(1), "LikeAction");
    }
  };
  return (
    <Box h="100vh" bgColor="gray.100">
      <Box w="full" h="10%" position="fixed" zIndex={10}>
        {/* navbar */}
        <UserNavigation isTrue={false} />
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
          <ImageSection src={post?.imageUrls[0]} />
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
                  onclick={handleLikeClick}
                  like={post?.like ? post.like : false}
                  boxSize={6}
                />
                <CommentsIcon boxSize={6} />
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

export default PostPage;
