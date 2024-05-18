import { Image, Box } from "@chakra-ui/react";
interface Props {
  src: string | undefined;
}
const ImageSection = ({ src }: Props) => {
  return (
    <Box h="full" width="600px" shadow="md">
      <Image src={"http://back.khanmedia.ir:9290/"+ src} boxSize="full"></Image>
    </Box>
  );
};

export default ImageSection;
