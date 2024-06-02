import { useState, useEffect } from "react";
import {
  Box,
  Image,
  Flex,
  Text,
  Heading,
  HStack,
  Avatar,
  Center,
} from "@chakra-ui/react";
import userClient from "../../api/services/user-service";
import { User } from "../../api/clients/user";
interface PostPreviewProps {
  images: Blob[];
}

const PostPreview = ({ images }: PostPreviewProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [user, setUser] = useState<User | undefined>();

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    userClient
      .getUserInfo(
        {},
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        console.log("getProfile response: ", res.response.user);
        if (res.response.user) {
          setUser(res.response.user);
        }
      })
      .catch((err) => {
        console.log("getProfile error: ", err);
      });
  }, []);

  if (images.length > 0)
    return (
      <Box pos="relative" h="100%" w="100%" bg="white" overflow="hidden">
        <Center h="100%" w="100%" pos="relative" borderBottomRadius="15px">
          <Box h="85%" w="70%" bg="white" pos="relative" borderRadius="15px">
            <Heading
              bg="gray.200"
              w="100%"
              boxShadow="lg"
              borderTopRadius="15px"
              h="15%"
              textColor="black"
              fontSize="20"
              dir="rtl"
              pos="relative"
              borderLeft="1px solid #ccc"
              borderTop="1px solid #ccc"
              borderRight="1px solid #ccc"
            >
              <HStack h="100%" w="100%" pr={2}>
                <Avatar src={user?.profilePicUrl}></Avatar>
                <Text fontWeight="bold">{user?.username}</Text>
              </HStack>
            </Heading>
            <Box
              bg="white"
              h="60%"
              w="100%"
              boxShadow="lg"
              pos="relative"
              borderLeft="1px solid #ccc"
              borderRight="1px solid #ccc"
            >
              <Image
                src={URL.createObjectURL(images[currentImageIndex])}
                h="100%"
                w="100%"
                pos="absolute"
              />
              <Flex
                pos="absolute"
                left="50%"
                transform="translateX(-50%)"
                bottom="0"
              >
                {images.map((image, index) => (
                  <Box
                    key={index}
                    w="3"
                    h="3"
                    bg={currentImageIndex === index ? "brand.100" : "gray.200"}
                    borderRadius="full"
                    cursor="pointer"
                    onClick={() => {
                      handleDotClick(index);
                      console.debug(URL.createObjectURL(image));
                    }}
                  />
                ))}
              </Flex>
            </Box>
            <Box
              bg="gray.200"
              w="100%"
              h="25%"
              borderBottomRadius="15px"
              dir="rtl"
              fontWeight="bold"
              p={2}
              boxShadow="lg"
              borderLeft="1px solid #ccc"
              borderBottom="1px solid #ccc"
              borderRight="1px solid #ccc"
            >
              {user?.username}
            </Box>
          </Box>
        </Center>
      </Box>
    );
  else
    return (
      <Box pos="relative" h="100%" w="100%" bg="white" overflow="hidden">
        <Center h="100%" w="100%" pos="relative" borderBottomRadius="15px">
          <Box h="85%" w="70%" bg="white" pos="relative" borderRadius="15px">
            <Heading
              bg="gray.200"
              borderLeft="1px solid #ccc"
              borderTop="1px solid #ccc"
              borderRight="1px solid #ccc"
              w="100%"
              boxShadow="lg"
              borderTopRadius="15px"
              h="15%"
              textColor="black"
              fontSize="24"
              dir="rtl"
            ></Heading>
            <Box
              bg="white"
              h="60%"
              w="100%"
              boxShadow="lg"
              borderLeft="1px solid #ccc"
              borderRight="1px solid #ccc"
            ></Box>
            <Box
              bg="gray.200"
              w="100%"
              h="25%"
              borderBottomRadius="15px"
              dir="rtl"
              fontWeight="bold"
              p={2}
              boxShadow="lg"
              borderLeft="1px solid #ccc"
              borderBottom="1px solid #ccc"
              borderRight="1px solid #ccc"
            >
              نام کاربری
            </Box>
          </Box>
        </Center>
      </Box>
    );
};

export default PostPreview;
