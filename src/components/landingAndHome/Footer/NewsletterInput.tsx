import { FormControl, Box, Input, HStack, IconButton } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
const NewsletterInput = () => {
  return (
    <Box>
      <HStack>
        <IconButton
          aria-label="Code Icon"
          borderRadius="20%"
          //icon={<ArrowUpIcon />}
          colorScheme="brand"
          variant="solid"
          icon={<EmailIcon />}
          size="lg"
          isRound={false}
          //onClick={handleButtonClick}
        />
        <FormControl>
          <Input id="email" type="email" marginTop="0px" border="1px" />
        </FormControl>
      </HStack>
    </Box>
  );
};

export default NewsletterInput;
