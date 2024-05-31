import { Image, Box, Button, VStack, HStack } from "@chakra-ui/react";
import {
  ArrowBigLeft,
  ArrowBigRight,
  Circle,
  CircleDotIcon,
} from "lucide-react";
import { useState } from "react";

type ImageSliderProps = {
  images: string[];
};

const ImageSection = ({ images }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images?.length - 1) return index;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return index;
      return index - 1;
    });
  }

  return (
    <VStack pos="relative" h="90%" w="60%" borderRadius="md" spacing={4}>
      <Box position="relative" w="full" h="full" overflow="hidden">
        <HStack
          position="absolute"
          top="50%"
          left={4}
          transform="translateY(-50%)"
          onClick={showPrevImage}
          cursor="pointer"
        >
          <ArrowBigLeft />
        </HStack>
        <HStack
          position="absolute"
          top="50%"
          right={4}
          transform="translateY(-50%)"
          onClick={showNextImage}
          cursor="pointer"
        >
          <ArrowBigRight />
        </HStack>
        <Image
          width="100%"
          height="93%"
          objectFit="cover"
          objectPosition="center"
          src={"http://back.khanmedia.ir:9290" + images[imageIndex]}
          borderRadius="md"
        />
      </Box>
      <HStack pos="absolute" bottom={0} borderRadius="md">
        {images?.map((_, index) => (
          <Button
            key={index}
            onClick={() => setImageIndex(index)}
            variant="transparent"
            size="sm"
            colorScheme="whiteAlpha"
          >
            {index === imageIndex ? <CircleDotIcon /> : <Circle />}
          </Button>
        ))}
      </HStack>
    </VStack>
  );
};

export default ImageSection;
