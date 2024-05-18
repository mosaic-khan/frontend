import { Grid, GridItem, Image, Box, HStack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import postClient from "../../api/services/post-service";
import LikeIcon from "../Icons/LikeIcon";
import CommentsIcon from "../Icons/CommentsIcon";
import { PostPreview } from "../../api/clients/post";
import PostApi from "../../api/services/post-service";
import { getProfileId } from "../userProfile/ProfileIdStorage";
import { Link } from "react-router-dom";

const Post = () => {
  const profileId = getProfileId();
  const [posts, setPosts] = useState<PostPreview[] | null>();

  useEffect(() => {
    PostApi.getProfilePosts(
      {
        profileID: BigInt(profileId),
      },
      { meta: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }
    ).then((res) => {
      setPosts(res.response.postPreview);
    });
  }, []);

  useEffect(() => {
    postClient
      .getProfilePosts(
        { profileID: BigInt(1) },
        { meta: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }
      )
      .then((res) => {
        console.log("some", res.response.postPreview);
      })
      .catch((err) => {
        console.log("error fetching post: ", err);
      });
  }, []);
  return (
    <Box bg="white" w="85%" boxShadow="md" borderRadius="lg" marginTop="10px">
      <Grid
        templateColumns="repeat(3, 1fr)"
        justifyItems="center"
        rowGap={10}
        paddingTop={10}
        paddingBottom={10}
      >
        {posts?.map((post) => (
          <GridItem
            key={post.id}
            height="300px"
            width="300px"
            borderRadius="xl"
            overflow="hidden"
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
                  width="100%"
                  boxShadow="md"
                  height="100%"
                  src={"http://back.khanmedia.ir:9290/" + post.image}
                  alt={post.title}
                  mb={4}
                />
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
    </Box>
  );
};

export default Post;
