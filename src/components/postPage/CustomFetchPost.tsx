import { useState, useEffect } from "react";
import HandlePostRequest from "./HandlePost";

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

const usePostData = () => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    HandlePostRequest()
      .then((post) => {
        if (post) {
          setPost(post as Post);
        } else {
          console.error("Received undefined post data");
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return {post, setPost};
};

export default usePostData;