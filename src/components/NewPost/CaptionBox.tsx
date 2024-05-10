import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Box, Heading, Textarea } from "@chakra-ui/react";

const CaptionBox = ({
  caption,
  setCaption,
}: {
  caption: string;
  setCaption: Dispatch<SetStateAction<string>>;
}) => {
  //const [caption, setCaption] = useState<string>("");
  const detectLanguage = (text: string): "ltr" | "rtl" => {
    if (!text) return "rtl"; // Default to RTL if text is empty
    // Check if the first character is in Persian range
    const persianRegex = /[\u0600-\u06FF\u0750-\u077F]/;
    return persianRegex.test(text.charAt(0)) ? "rtl" : "ltr";
  };
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCaption(event.target.value);
  };
  return (
    <Box width="90%" border="1px solid #ccc" borderRadius="5px">
      <Heading padding="10px" textAlign="right" fontSize="20px" color="white">
        توضیحات غذا
      </Heading>
      <Textarea
        placeholder="متن خود را وارد كنيد"
        style={{ direction: detectLanguage(caption) }}
        value={caption}
        onChange={handleChange}
        width="80%"
        marginLeft="5%"
        marginBottom="5%"
        border="1px solid #ccc"
        textColor="white"
        _placeholder={{ color: "white" }}
      />
    </Box>
  );
};

export default CaptionBox;
