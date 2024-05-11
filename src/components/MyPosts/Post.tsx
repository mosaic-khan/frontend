import {
  Grid,
  GridItem,
  Image,
  Box,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Image1 from "../../assets/Home1.jpg";
import Image2 from "../../assets/3.webp";
import Image3 from "../../assets/Home4.jpg";
import Image4 from "../../assets/Home3.jpg";
import postClient from "../../api/services/post-service";
type Post = {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
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
            <Image
              width="100%"
              boxShadow="md"
              height="100%"
              src={post.imageUrl}
              alt={post.title}
              mb={4}
            />
            {/* </LinkOverlay>
            </LinkBox> */}
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Post;