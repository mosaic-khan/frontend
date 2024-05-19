import { Image, Box, Button, VStack } from "@chakra-ui/react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
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
    <VStack pos="relative" h="80%" w="50%" borderRadius="md">
      <Image
        h="100%"
        w="100%"
        src={"http://back.khanmedia.ir:9290" + images[imageIndex]}
      />
      <Box pos="absolute" bottom={0}>
        <Button onClick={showPrevImage} left={0} top={0}>
          <ArrowBigLeft />
        </Button>
        {images?.map((_, index) => (
          <Button onClick={() => setImageIndex(index)}>
            {index === imageIndex ? <CircleDot /> : <Circle />}
          </Button>
        ))}
        <Button onClick={showNextImage} style={{ right: 0 }}>
          <ArrowBigRight />
        </Button>
      </Box>

      <div />
    </VStack>
  );
};

export default ImageSection;
