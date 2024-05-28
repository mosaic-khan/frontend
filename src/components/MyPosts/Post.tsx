import {
  Grid,
  GridItem,
  Image,
  Box,
  HStack,
  Text,
  Center,
  Icon,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import LikeIcon from "../Icons/LikeIcon";
import CommentsIcon from "../Icons/CommentsIcon";
import { PostPreview } from "../../api/clients/post";
import PostApi from "../../api/services/post-service";
import { Link } from "react-router-dom";
import { FaCameraRetro } from "react-icons/fa";

interface Props {
  profileId: bigint;
}

const Post = ({ profileId }: Props) => {
  const [posts, setPosts] = useState<PostPreview[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (profileId !== BigInt(0)) {
      setIsLoading(true); 
      PostApi.getProfilePosts(
        {
          profileID: profileId,
        },
        { meta: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }
      )
        .then((res) => {
          setPosts(res.response.postPreview);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("!!Error fetching posts:", err);
          setIsLoading(false);
        });
    } else {
      console.log("error", isLoading);
    }
  }, [profileId]); 

  return (
    <Box
      bg="white"
      maxH="100vh"
      w="85%"
      boxShadow="md"
      borderRadius="lg"
      marginTop="10px"
      overflowY="auto"
    >
      {isLoading ? (
        <Center w="100%" minH="50vh">
          <Spinner size="xl" color="brand.500" />
        </Center>
      ) : posts && posts.length > 0 ? (
        <Grid
          columnGap={10}
          templateColumns="repeat(3, 1fr)"
          justifyItems="center"
          rowGap={10}
          padding={10}
          minH="50vh"
        >
          {posts?.map((post) => (
            <GridItem
              key={post.id}
              height="300px"
              width="300px"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="0 4px 8px 0 rgba(0,0,0,0.2)"
            >
              <Link to={`/Post/${post.id}`}>
                <Box
                  position="relative"
                  _hover={{
                    cursor: "pointer",
                    "& > img": {
                      transform: "scale(1.04)",
                      transition: "transform 0.2s ease-in-out",
                      filter: "auto",
                      brightness: "40%",
                    },
                    "& > div": {
                      display: "block",
                    },
                  }}
                >
                  <Image
                    width="400px"
                    height="250px"
                    src={"http://back.khanmedia.ir:9290/" + post.image}
                    alt={post.title}
                    mb={4}
                    fallbackSrc="path/to/default/image"
                  />
                  <Text
                    dir="rtl"
                    noOfLines={2}
                    fontSize="sm"
                    paddingRight={4}
                    color="gray.600"
                  >
                    {post.shortDescription.slice(0, 15)}
                  </Text>
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    display="none"
                  >
                    <HStack spacing={4}>
                      <LikeIcon
                        isHoveredColor="white"
                        color="white"
                        boxSize={8}
                        like={true}
                        onclick={() => {}}
                      />
                      <Text fontSize="14" textColor="white"></Text>

                      <CommentsIcon
                        isHoveredColor="white"
                        color="white"
                        boxSize={8}
                      />
                      <Text fontSize="14" textColor="white"></Text>
                    </HStack>
                  </Box>
                </Box>
              </Link>
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Center w="100%" minH="50vh">
          <VStack spacing={4}>
            <Icon as={FaCameraRetro} w={12} h={12} color="gray.400" />
            <Text fontSize="xl" color="gray.600" dir="rtl">
              این کاربر هنوز پستی ندارد!
            </Text>
          </VStack>
        </Center>
      )}
    </Box>
  );
};

export default Post;
