import React, { ReactNode } from "react";

import {
  VStack,
  Heading,
  Grid,
  GridItem,
  Box,
  Text,
  LinkOverlay,
  Image,
  LinkBox,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Image1 from "../../assets/ForgotPass_tomato.png";
import Image2 from "../../assets/Burger_2_with_icons.png";
import Image3 from "../../assets/Fruits.png";
import postClient from "../../api/services/post-service";
type Post = {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
};

const Post = () => {
  const [posts, setPosts] = useState<Post[]>([
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
      imageUrl: Image2,
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
    <VStack spacing={8} alignItems="flex-start" padding={4}>
      <Grid templateColumns="repeat(3, 1fr)" gap={4} width="100%">
        {posts.map((post) => (
          <GridItem key={post.id}>
            <LinkBox
              p={4}
              borderWidth="1px"
              borderRadius="md"
              height="200px"
              width="200px"
            >
              <LinkOverlay href="#">
                <Image
                  width="100%"
                  height="100%"
                  src={post.imageUrl}
                  alt={post.title}
                  mb={4}
                />
              </LinkOverlay>
            </LinkBox>
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
};

export default Post;
