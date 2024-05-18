import { Image, Box } from "@chakra-ui/react";

const ImageSection = () => {
  return (
    <Box h="full" width="600px" shadow="md">
      <Image
        src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574"
        boxSize="full"
      ></Image>
    </Box>
  );
};

export default ImageSection;