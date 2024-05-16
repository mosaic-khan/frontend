import { Grid, GridItem, Image, Box, HStack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Image1 from "../../assets/Home1.jpg";
import Image2 from "../../assets/3.webp";
import Image3 from "../../assets/Home4.jpg";
import Image4 from "../../assets/Home3.jpg";
import postClient from "../../api/services/post-service";
import userClient from "../../api/services/user-service";
import LikeIcon from "../Icons/LikeIcon";
import CommentsIcon from "../Icons/CommensIcon";
type Post = {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  // id: bigint;
  // title: string;
  // ingredients: { [key: string]: string };
  // description: string;
  // numImages: number;
  // numLikes: number;
  // like: boolean;
  // imageUrls: string[];
  // username: string;
  // profilePicUrl: string;
  // category: string;
};

const Post = () => {
  const [posts] = useState<Post[]>([
    {
      id: 1,
      title: "Post 1",
      content: "This is the content of Post 1",
      imageUrl: Image1,
    },
    {
      id: 2,
      title: "Post 2",
      content: "This is the content of Post 2",
      imageUrl: Image2,
    },
    {
      id: 3,
      title: "Post 3",
      content: "This is the content of Post 2",
      imageUrl: Image3,
    },
    {
      id: 4,
      title: "Post 4",
      content: "This is the content of Post 2",
      imageUrl: Image4,
    },
  ]);

  useEffect(() => {
    postClient
      .getProfilePosts(
        { profileID: BigInt(1) },
        { meta: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }
      )
      .then((res) => {
        console.log(res.response.post);
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
        {posts.map((post) => (
          <GridItem
            key={post.id}
            height="300px"
            width="300px"
            borderRadius="xl"
            overflow="hidden"
          >
            {/* <LinkBoxheight="300px" width="300px" bg="black">
              <LinkOverlay href="#"> */}
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
                src={post.imageUrl}
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
                  <LikeIcon isHoveredColor="white" color="white" boxSize={8} />
                  <Text fontSize="14" textColor="white">
                    hello
                  </Text>

                  <CommentsIcon
                    isHoveredColor="white"
                    color="white"
                    boxSize={8}
                  />
                  <Text fontSize="14" textColor="white">
                    hello
                  </Text>
                </HStack>
              </Box>
            </Box>

            {/* </LinkOverlay>
            </LinkBox> */}
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Post;
