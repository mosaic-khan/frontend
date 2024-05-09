import React, { useState } from "react";
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
import {
  IoPaperPlaneOutline,
  IoChatbubbleOutline,
  IoHeart,
  IoHeartOutline,
  IoBookmarkOutline,
} from "react-icons/io5";

interface SlideshowProps {
  images: File[];
}

const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked); // Toggle the liked state
  };

  if (images.length === 0) {
    return (
      <VStack>
        <Heading marginTop="5%" textColor="white" marginLeft="6%">
          پیش نمایش
        </Heading>
      </VStack>
    );
  }
  return (
    <VStack>
      <Heading marginTop="5%" textColor="white" marginLeft="6%">
        پیش نمایش
      </Heading>

      <HStack justifyContent="space-between" marginTop="15%">
        <Image borderRadius="100%" width="40px" marginTop="3px" src={Image1} />
        <Text fontWeight="bold" marginRight="200px" textColor="white">
          MAHDI_A
        </Text>
        <PreviewMenu />
      </HStack>

      <Flex
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
      >
        <Box position="relative">
          <Image
            src={URL.createObjectURL(images[currentImageIndex])}
            objectFit="cover"
            width="50%"
            marginLeft="25%"
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
                onClick={() => {
                  handleDotClick(index);
                  console.debug(image);
                }}
              />
            ))}
          </Flex>
        </Box>
      </Flex>
      <HStack spacing="15px">
        <IconButton
          aria-label="Like"
          icon={
            liked ? (
              <IoHeartOutline size="35px" color="white" />
            ) : (
              <IoHeart size="35px" color="red" />
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
          color="white"
          _hover={{ bg: "none" }}
        />
        <IconButton
          aria-label="Like"
          icon={<IoPaperPlaneOutline size="30px" />}
          bg="none"
          color="white"
          _hover={{ bg: "none" }}
        />

        <Box marginLeft="120px">
          <IconButton
            aria-label="Like"
            icon={<IoBookmarkOutline size="30px" />}
            bg="none"
            color="white"
            _hover={{ bg: "none" }}
          />
        </Box>
      </HStack>
    </VStack>
  );
};

export default Slideshow;
