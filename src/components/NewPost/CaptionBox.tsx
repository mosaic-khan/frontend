import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Box, Center, Input, Textarea } from "@chakra-ui/react";

interface Props {
  caption: string;
  setCaption: Dispatch<SetStateAction<string>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
}

const CaptionBox = ({
  caption,
  setCaption,
  title,
  setTitle,
}: // tag,
// setTag,
Props) => {
  //const [caption, setCaption] = useState<string>("");
  const handleCaptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCaption(event.target.value);
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  // const handleTagChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setTag(event.target.value);
  // };

  return (
    <Box w="40%" h="100%" borderTopRadius="15px" bg="white">
      <Box
        w="100%"
        h="20%"
        bg="gray.200"
        borderTopRadius="15px"
        borderBottomColor="white"
        borderBottom="3px solid white"
        alignContent="center"
        pr={2}
        pos="relative"
      >
        <Input
          borderRadius="100"
          fontWeight="bold"
          w="60%"
          h="70%"
          border="2px solid white"
          placeholder="عنوان پست"
          value={title}
          onChange={handleTitleChange}
        ></Input>
      </Box>

      <Box w="100%" h="80%" bg="gray.200" borderBottomRadius="15px">
        <Center w="100%" h="100%" pos="relative">
          <Textarea
            bg="white"
            placeholder="توضیحات غذا:"
            rows={7}
            dir="rtl"
            value={caption}
            onChange={handleCaptionChange}
            w="90%"
            h="90%"
            textColor="black"
            resize="none"
          />
        </Center>
      </Box>
    </Box>
  );
};

export default CaptionBox;
