import { Avatar, HStack, Text } from "@chakra-ui/react";
import { ProfilePreview } from "../../api/clients/user";
import FollowButton from "./FollowButton";

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
      <Avatar
        boxSize="70px"
        src={"http://back.khanmedia.ir:9290/" + profilePreview.profilePicUrl}
      />
      <Text w="200px">{profilePreview.name}</Text>
      <Text w="200px">{profilePreview.username}</Text>
      <FollowButton isFollowed={false} profileId={profilePreview.profileID} />
    </HStack>
  );
};

export default UserDisplayItem;
