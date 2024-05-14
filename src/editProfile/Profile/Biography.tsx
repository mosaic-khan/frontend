import { Dispatch, SetStateAction } from "react";
import { Box, Text, Input, useToast } from "@chakra-ui/react";
import { UserEditInfo } from "../../pages/EditProfile";

interface Props {
  userEditInfo: UserEditInfo;
  setUserEditInfo: Dispatch<SetStateAction<UserEditInfo>>;
}

const BiographyBox = ({ userEditInfo, setUserEditInfo }: Props) => {
  const toast = useToast();

  const handleBioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputBio = e.target.value;
    if (inputBio.split(" ").length > 50) {
      toast({
        title: "Error",
        description: "توضیحات نمی‌تواند بیشتر از ۵۰ کلمه باشد",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      setUserEditInfo({
        ...userEditInfo,
        user: { ...userEditInfo.user, bio: inputBio },
      });
    }
  };

  return (
    <Box
      bg="gray.100"
      p={3}
      borderRadius="lg"
      boxShadow="lg"
      maxW="200px"
      h="200px"
      mx="auto"
      position="absolute"
      top="50%"
      border="1px solid"
      borderColor={
        userEditInfo.user.bio.split(" ").length > 50 ? "red.500" : "gray.200"
      }
      dir="rtl"
    >
      <Text fontSize="md" color="gray.600" mb={1}>
        بیوگرافی:
      </Text>
      <Input
        variant="filled"
        value={userEditInfo.user.bio}
        onChange={handleBioChange}
        placeholder="توضیحی کوتاه درباره خود.."
        fontSize="xs"
        color="gray.600"
        h="80%"
        w="100%"
        whiteSpace="nowrap"
      />
    </Box>
  );
};

export default BiographyBox;
