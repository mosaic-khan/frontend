import { Avatar, HStack, Text } from "@chakra-ui/react";
import { GradientRedButton } from "../Buttons";
import { ProfilePreview } from "../../api/clients/user";

interface Props {
  profilePreview: ProfilePreview;
}

const UserDisplayItem = ({ profilePreview }: Props) => {
  return (
    <HStack
      w="430px"
      justifyContent="space-between"
      bg="brand.50"
      dir="rtl"
      borderRadius="100px"
    >
      <Avatar boxSize="70px" />
      <Text w="200px">{profilePreview.name}</Text>
      <Text w="200px">{profilePreview.username}</Text>
      <GradientRedButton
        width="90px"
        height="30px"
        color="white"
        fontSize="sm"
        borderRadius="20px"
        marginLeft="20px"
      >
        دنبال کردن
      </GradientRedButton>
    </HStack>
  );
};

export default UserDisplayItem;
