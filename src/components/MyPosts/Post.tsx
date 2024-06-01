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
  const [posts, setPosts] = useState<PostPreview[] | null>();

  // const [posts, setPosts] = useState<PostPreview[] | null>([
  //   {
  //     id: BigInt(1),
  //     title: "Post 1",
  //     shortDescription: "This is the first post",
  //     image: "src/assets/1.jpg",
  //     numLikes: 10,
  //     numComments: 2,
  //     isLiked: true,
  //   },
  //   {
  //     id: BigInt(2),
  //     title: "Post 2",
  //     shortDescription: "This is the second post",
  //     image: "src/assets/Home1.jpg",
  //     numLikes: 5,
  //     numComments: 1,
  //     isLiked: false,
  //   },
  //   {
  //     id: BigInt(3),
  //     title: "Post 3",
  //     shortDescription: "This is the third post",
  //     image: "image3.jpg",
  //     numLikes: 8,
  //     numComments: 3,
  //     isLiked: true,
  //   },
  //   {
  //     id: BigInt(1),
  //     title: "Post 1",
  //     shortDescription: "This is the first post",
  //     image: "src/assets/1.jpg",
  //     numLikes: 10,
  //     numComments: 2,
  //     isLiked: true,
  //   },
  //   {
  //     id: BigInt(2),
  //     title: "Post 2",
  //     shortDescription: "This is the second post",
  //     image: "src/assets/Home1.jpg",
  //     numLikes: 5,
  //     numComments: 1,
  //     isLiked: false,
  //   },
  //   {
  //     id: BigInt(3),
  //     title: "Post 3",
  //     shortDescription: "This is the third post",
  //     image: "image3.jpg",
  //     numLikes: 8,
  //     numComments: 3,
  //     isLiked: true,
  //   },
  // ]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (profileId) {
      setIsLoading(true);
      // setPosts(posts);
      // setIsLoading(false); for test
      console.log(profileId);
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
          columnGap={5}
          templateColumns="repeat(3, 1fr)"
          justifyItems="center"
          rowGap={5}
          padding={10}
          minH="50vh"
        >
          {posts?.map((post) => (
            <GridItem
              key={post.id.toString()}
              width="250px"
              height="250px"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="0 4px 8px 0 rgba(0,0,0,0.2)"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
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
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  }}
                >
                  <Image
                    width="100%"
                    height="200px"
                    objectFit="cover"
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
                    height="40px"
                  >
                    {post.shortDescription}
                  </Text>
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    display="none"
                    bg="rgba(0, 0, 0, 0.5)"
                    padding="10px"
                    borderRadius="md"
                  >
                    <HStack spacing={4} color="white">
                      <LikeIcon
                        isHoveredColor="white"
                        color="white"
                        boxSize={8}
                        like={post.isLiked}
                        onclick={() => {}}
                      />
                      <Text fontSize="14">{post.numLikes}</Text>

                      <CommentsIcon
                        isHoveredColor="white"
                        color="white"
                        boxSize={8}
                      />
                      <Text fontSize="14">{post.numComments}</Text>
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
