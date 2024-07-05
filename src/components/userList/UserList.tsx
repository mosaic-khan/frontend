import { VStack, Box } from "@chakra-ui/react";
import UserDisplayItem from "./UserDisplayItem";
import { ProfilePreview } from "../../api/clients/user";

interface Props {
  profileList: ProfilePreview[];
}

const UserList = ({ profileList }: Props) => {
  return (
    <Box overflowY="scroll" h="75vh" paddingRight="20px">
      <VStack>
        {profileList.map((profile) => (
          <UserDisplayItem
            profilePreview={{
              isFollowed: BigInt(profile.isFollowed),
              name: profile.name,
              profileID: profile.profileID,
              profilePicUrl: profile.profilePicUrl,
              username: profile.username,
            }}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default UserList;
