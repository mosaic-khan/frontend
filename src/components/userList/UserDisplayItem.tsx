import { Avatar, BoxProps, HStack, Text, VStack } from "@chakra-ui/react";
import FollowButton from "./FollowButton";
import { ProfilePreviewExplore } from "../../api/clients/search";

interface Props extends BoxProps {
  profilePreview: ProfilePreviewExplore;
}

const UserDisplayItem = ({ profilePreview, ...rest }: Props) => {
  return (
    <HStack
      w="430px"
      justifyContent="space-between"
      bg="brand.50"
      dir="rtl"
      borderRadius="100px"
      {...rest}
    >
      <HStack>
        <Avatar
          boxSize="70px"
          src={"http://back.khanmedia.ir:9290/" + profilePreview.profilePicUrl}
          transition="1s"
          _hover={{ boxSize: "100px" }}
        />
        <VStack spacing="0px">
          <Text as="b" color="gray.700">
            {profilePreview.username}
          </Text>
          <Text color="gray.500">{profilePreview.name}</Text>
        </VStack>
      </HStack>
      <FollowButton
        isFollowed={profilePreview.isFollowed == BigInt(1)}
        profileId={profilePreview.profileID}
      />
    </HStack>
  );
};

export default UserDisplayItem;
