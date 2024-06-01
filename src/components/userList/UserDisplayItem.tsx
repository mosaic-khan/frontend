import { Avatar, BoxProps, Button, HStack, VStack } from "@chakra-ui/react";
import FollowButton from "./FollowButton";
import { ProfilePreviewExplore } from "../../api/clients/search";
import { useNavigate } from "react-router-dom";

interface Props extends BoxProps {
  profilePreview: ProfilePreviewExplore;
}

const UserDisplayItem = ({ profilePreview, ...rest }: Props) => {
  const navigate = useNavigate();
  const openProfilePage = () => {
    navigate("/profile/" + profilePreview.username);
  };
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
          onClick={openProfilePage}
          cursor="pointer"
        />
        <VStack spacing="0px">
          <Button color="gray.700" variant="text" onClick={openProfilePage}>
            {profilePreview.username}
          </Button>
          <Button
            marginTop="-20px"
            color="gray.500"
            variant="text"
            onClick={openProfilePage}
          >
            {profilePreview.name}
          </Button>
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
