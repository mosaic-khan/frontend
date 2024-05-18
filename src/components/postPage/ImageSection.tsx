import { Image, Box } from "@chakra-ui/react";
interface Props {
  src: string | undefined;
}
const ImageSection = ({ src }: Props) => {
  return (
    <Box h="full" width="600px" shadow="md">
      <Image src={src} boxSize="full"></Image>
    </Box>
  );
};

export default ImageSection;
