import { Box, HStack, VStack } from "@chakra-ui/react";
import UserDisplayItem from "../userList/UserDisplayItem";

const SearchResult = () => {
  return (
    <HStack align="flex-start" justifyContent="space-between" padding="10px">
      <VStack w="100%">
        {[0, 1, 2, 3, 4, 5, 6].map(() => (
          <UserDisplayItem
            profilePreview={{
              isFollowed: false,
              name: "علی اطهری",
              profileID: BigInt(0),
              profilePicUrl: "",
              username: "Ali_Athary",
            }}
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
