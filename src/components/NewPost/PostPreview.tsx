import React, { useState, useEffect } from "react";
import {
  Box,
  Image,
  Flex,
  Text,
  VStack,
  Heading,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import Image1 from "../../assets/Userpic3.png";
import PreviewMenu from "./PreviewMenu";
import userClient from "../../api/services/user-service";
import {
  IoPaperPlaneOutline,
  IoChatbubbleOutline,
  IoHeart,
  IoHeartOutline,
  IoBookmarkOutline,
} from "react-icons/io5";
import { BsHeart, BsHeartFill, BsStar } from "react-icons/bs";
import { PiTelegramLogoThin } from "react-icons/pi";
import { color } from "framer-motion";

interface SlideshowProps {
  images: File[];
}

const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [username, setusername] = useState<string>("");
  
  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
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
          setusername(res.response.user.username);
        }
      })
      .catch((err) => {
        console.log("getProfile error: ", err);
      });
  }, []);

  if (images.length === 0) {
    return (
      <VStack height="685px">
        <Box
          borderBottom="50px"
          borderColor="black"
          bg="#ff0000"
          w="100%"
          borderTopRadius="25px"
          h="80px"
        >
          <Heading textAlign="center" marginTop="4%" textColor="white">
            پیش نمایش
          </Heading>
        </Box>
      </VStack>
    );
  }
  return (
    <VStack>
      <Box
        borderBottom="50px"
        borderColor="black"
        bg="#ff0000"
        w="100%"
        borderTopRadius="25px"
        h="80px"
      >
        <Heading textAlign="center" marginTop="4%" textColor="white">
          پیش نمایش
        </Heading>
      </Box>
      <HStack justifyContent="space-between" marginTop="5%">
        <Image borderRadius="100%" width="40px" marginTop="3px" src={Image1} />
        <Text fontWeight="bold" marginRight="100px">
          {username}
        </Text>
        <PreviewMenu  />
      </HStack>

      <Flex
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Box position="relative">
          <Image
            src={URL.createObjectURL(images[currentImageIndex])}
            objectFit="cover"
            width="60%"
            marginLeft="20%"
            height="400px"
            borderRadius="md"
          />

          <Flex
            position="absolute"
            bottom="4"
            left="50%"
            transform="translateX(-50%)"
          >
            {images.map((image, index) => (
              <Box
                key={index}
                w="4"
                h="4"
                bg={currentImageIndex === index ? "brand.600" : "gray.200"}
                borderRadius="full"
                mx="1"
                cursor="pointer"
                onClick={() => handleDotClick(index)}
              />
            ))}
          </Flex>
        </Box>
      </Flex>
      <HStack spacing="15px" marginBottom="15%">
        <IconButton
          aria-label="Like"
          icon={
            liked ? (
              <IoHeart size="35px" color="red" />
            ) : (
              <IoHeartOutline size="35px" />
            )
          }
          bg="none"
          _hover={{ bg: "none" }}
          onClick={handleClick}
        />
        <IconButton
          aria-label="Like"
          icon={<IoChatbubbleOutline size="30px" />}
          bg="none"
          _hover={{ bg: "none" }}
        />
        <IconButton
          aria-label="Like"
          icon={<IoPaperPlaneOutline size="30px" />}
          bg="none"
          _hover={{ bg: "none" }}
        />

        <Box marginLeft="120px">
          <IconButton
            aria-label="Like"
            icon={<IoBookmarkOutline size="30px" />}
            bg="none"
            _hover={{ bg: "none" }}
          />
        </Box>
      </HStack>
    </VStack>
  );
};

export default Slideshow;
