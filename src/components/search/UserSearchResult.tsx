import { HStack, VStack } from "@chakra-ui/react";
import UserDisplayItem from "../userList/UserDisplayItem";
import { ProfilePreviewExplore } from "../../api/clients/search";

interface Props {
  profiles: ProfilePreviewExplore[];
}

const SearchResult = ({ profiles }: Props) => {
  return (
    <HStack align="flex-start" justifyContent="space-between" padding="10px">
      <VStack w="100%">
        {profiles.map((p) => (
          <UserDisplayItem
            profilePreview={p}
            bg="gray.50"
            borderWidth="3px"
            w="500px"
          />
        ))}
      </VStack>
    </HStack>
  );
};

export default SearchResult;
