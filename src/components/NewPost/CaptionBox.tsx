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
    <Box
      width="70%"
      border="1px solid #ccc"
      borderRadius="25px"
      bgGradient="linear(to-l, #f00000,brand.300)"
    >
      <Heading
        padding="10px"
        textAlign="right"
        fontSize="20px"
        textColor="white"
        borderBottom="1px"
      >
        توضیحات غذا
      </Heading>
      <Textarea
        bgGradient="linear(to-l, brand.900,brand.400)"
        placeholder="متن خود را وارد كنيد"
        rows={7}
        resize="none"
        style={{ direction: detectLanguage(caption) }}
        value={caption}
        onChange={handleChange}
        width="80%"
        marginTop="2%"
        marginLeft="5%"
        marginBottom="5%"
        textColor="white"
        border="1px solid #ccc"
        _placeholder={{ color: "white" }}
      />
    </Box>
  );
};

export default CaptionBox;
