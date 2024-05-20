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
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import LikeIcon from "../Icons/LikeIcon";
import CommentsIcon from "../Icons/CommentsIcon";
import { PostPreview } from "../../api/clients/post";
import PostApi from "../../api/services/post-service";
import { getProfileId } from "../userProfile/ProfileIdStorage";
import { Link } from "react-router-dom";
import { FaCameraRetro } from "react-icons/fa";

const Post = () => {
  const profileId = getProfileId();
  const [posts, setPosts] = useState<PostPreview[] | null>();
  //   {
  //     id: BigInt(1),
  //     title: "Sunset Boulevard",
  //     shortDescription:
  //       "Experience the serene beauty of the sunset along the famous boulevard.",
  //     image: "sunset-boulevard.jpg",
  //   },
  //   {
  //     id: BigInt(2),
  //     title: "Gastronomy Adventure",
  //     shortDescription:
  //       "Join us on a journey of taste, exploring the world's best culinary delights.",
  //     image: "gastronomy-adventure.jpg",
  //   },
  //   {
  //     id: BigInt(3),
  //     title: "Tech Innovations",
  //     shortDescription:
  //       "Dive into the latest breakthroughs in technology that are shaping our future.",
  //     image: "tech-innovations.jpg",
  //   },
  //   {
  //     id: BigInt(4),
  //     title: "Artistic Expressions",
  //     shortDescription:
  //       "Discover the stories behind the masterpieces of modern art.",
  //     image: "artistic-expressions.jpg",
  //   },
  //   {
  //     id: BigInt(5),
  //     title: "Wildlife Wonders",
  //     shortDescription:
  //       "Explore the untamed wilderness and the majestic creatures that call it home.",
  //     image: "wildlife-wonders.jpg",
  //   },
  // ]);

  useEffect(() => {
    PostApi.getProfilePosts(
      {
        profileID: BigInt(profileId),
      },
      { meta: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }
    ).then((res) => {
      setPosts(res.response.postPreview);
    });
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
      {posts && posts.length > 0 ? (
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
              height="300px" // Fixed height
              width="300px" // Fixed width
              borderRadius="xl"
              overflow="hidden"
              boxShadow="0 4px 8px 0 rgba(0,0,0,0.2)" // More pronounced shadow
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
                    height="250px" // Adjusted for caption space
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
                        like={true} //toDo
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
