import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import { PostPreviewExplore } from "../../api/clients/search";
import { useNavigate } from "react-router-dom";

// const mockPosts: PostPreviewExplore[] = [
//   {
//     id: BigInt(1),
//     title: "Post 1",
//     shortDescription: "This is a short description for post 1.",
//     postImage: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574",
//     username: "user1",
//     profilePicUrl: "https://via.placeholder.com/50"
//   },
//   {
//     id: BigInt(2),
//     title: "Post 2",
//     shortDescription: "This is a short description for post 2.",
//     postImage: "https://i0.wp.com/www.drdavidludwig.com/wp-content/uploads/2017/01/1-RIS_6IbCLYv1X3bzYW1lmA.jpeg?fit=800%2C552&ssl=1",
//     username: "user2",
//     profilePicUrl: "https://via.placeholder.com/50"
//   },
//   {
//     id: BigInt(3),
//     title: "Post 3",
//     shortDescription: "This is a short description for post 3.",
//     postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpa_nbHvdVxELcL5wgzCMFNfXakQ_hrAGi0Q&s",
//     username: "user3",
//     profilePicUrl: "https://via.placeholder.com/50"
//   },
//   {
//     id: BigInt(4),
//     title: "Post 4",
//     shortDescription: "This is a short description for post 4.",
//     postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdb5VvlI7KFkpOOH7dt9ZAKMCd_Iof1p531w&s",
//     username: "user4",
//     profilePicUrl: "https://via.placeholder.com/50"
//   },
//   {
//     id: BigInt(5),
//     title: "Post 5",
//     shortDescription: "This is a short description for post 5.",
//     postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBO4qza0xqzlgXOKSrzffEXYxhRUberg9WQ&s",
//     username: "user5",
//     profilePicUrl: "https://via.placeholder.com/50"
//   },
//   {
//     id: BigInt(6),
//     title: "Post 6",
//     shortDescription: "This is a short description for post 6.",
//     postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmEIutiEl_AEqN2YY34UZFu8ASLbkuBBMR2w&s",
//     username: "user6",
//     profilePicUrl: "https://via.placeholder.com/50"
//   },
//   {
//     id: BigInt(7),
//     title: "Post 7",
//     shortDescription: "This is a short description for post 7.",
//     postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMMMvfqkJnmAUw2ffxy-psKlBVMTMyyyK4g&s",
//     username: "user7",
//     profilePicUrl: "https://via.placeholder.com/50"
//   },
//   {
//     id: BigInt(8),
//     title: "Post 8",
//     shortDescription: "This is a short description for post 8.",
//     postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-lRHZVQdchHOYdrukagBVmNQLPQhCOiUag&s",
//     username: "user8",
//     profilePicUrl: "https://via.placeholder.com/50"
//   },
//   {
//     id: BigInt(9),
//     title: "Post 9",
//     shortDescription: "This is a short description for post 9.",
//     postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzGTIIkhNNhM12zKSGZcUaFMTEwWwMtuZDQ&s",
//     username: "user9",
//     profilePicUrl: "https://via.placeholder.com/50"
//   },
//   {
//     id: BigInt(10),
//     title: "Post 10",
//     shortDescription: "This is a short description for post 10.",
//     postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSIwbGmUKLWt2Rxx9ivjEueQ10IPpKjtS64A&s",
//     username: "user10",
//     profilePicUrl: "https://via.placeholder.com/50"
//   },
//   {
//     id: BigInt(11),
//     title: "Post 11",
//     shortDescription: "This is a short description for post 11.",
//     postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY7__X1l8xvK5PMy6OmihxfesM1QqL4OQ-4Q&s",
//     username: "user11",
//     profilePicUrl: "https://via.placeholder.com/50"
//   },
//   {
//     id: BigInt(12),
//     title: "Post 12",
//     shortDescription: "This is a short description for post 12.",
//     postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJcSfqwsXj2Bf_Kxjl3jUFc4OnLP1emsqA5A&s",
//     username: "user12",
//     profilePicUrl: "https://via.placeholder.com/50"
//   }
// ];

interface Props {
  posts: PostPreviewExplore[];
}
const PostCard = ({
  post,
  onClick,
}: {
  post: PostPreviewExplore;
  onClick: (id: BigInt) => void;
}) => (
  <Box
    key={post.id.toString()}
    w="100%"
    minH="150px"
    borderRadius="xl"
    overflow="hidden"
    transition="all 0.3s ease"
    _hover={{
      transform: "scale(1.05)",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    }}
    p={1}
    onClick={() => onClick(post.id)}
  >
    <Image
      src={"http://back.khanmedia.ir:9290/" + post.postImage}
      w="100%"
      objectFit="cover"
      borderRadius="md"
    />
  </Box>
);

const SearchResult = ({ posts }: Props) => {
  const navigate = useNavigate();

  const splitPosts = (posts: PostPreviewExplore[]) => {
    const partition = Math.ceil(posts.length / 3);
    const first = posts.slice(0, partition);
    const second = posts.slice(partition, partition * 2);
    const thirdPart = posts.slice(partition * 2);
    return [first, second, thirdPart];
  };

  const [firstPart, secondPart, thirdPart] = splitPosts(posts);

  return (
    <HStack
      align="flex-start"
      justifyContent="space-between"
      padding="10px"
      spacing="10px"
    >
      <VStack w="100%" spacing="10px">
        {firstPart.map((post) => (
          <PostCard
            post={post}
            onClick={(id) => {
              navigate(`/Post/${id}`);
            }}
          />
        ))}
      </VStack>
      <VStack w="100%" spacing="10px">
        {secondPart.map((post) => (
          <PostCard
            post={post}
            onClick={(id) => {
              navigate(`/Post/${id}`);
            }}
          />
        ))}
      </VStack>
      <VStack w="100%" spacing="10px">
        {thirdPart.map((post) => (
          <PostCard
            post={post}
            onClick={(id) => {
              navigate(`/Post/${id}`);
            }}
          />
        ))}
      </VStack>
    </HStack>
  );
};

export default SearchResult;
