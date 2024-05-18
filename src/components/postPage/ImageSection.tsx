import { Image, Box, Button, VStack, HStack } from "@chakra-ui/react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import { useState } from "react";

// const ImageSection = ({ src }: Props) => {
//   return (
//     <Box h="full" width="600px" shadow="md">
//       <Image src={src} boxSize="full"></Image>
//     </Box>
//   );
// };
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
    // <section
    //   aria-label="Image Slider"
    //   style={{ width: "100%", height: "100%", position: "relative" }}
    // >
    <VStack pos="relative" h="80%" w="50%" bg="black" borderRadius="md">
      <Image
        h="100%"
        w="100%"
        src={"http://back.khanmedia.ir:9290" + images[imageIndex]}
        // style={{ translate: `${imageIndex}%` }}
      />
      {/* </div> */}

      {/* <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      > */}
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

      {/* </div> */}
      <div />
    </VStack>
  );
};

export default ImageSection;
