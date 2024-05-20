import { VStack, Box } from "@chakra-ui/react";
import UserDisplayItem from "./UserDisplayItem";

const UserList = () => {
  return (
    <Box overflowY="scroll" h="75vh" paddingRight="20px">
      <VStack>
        {[...Array(40)].map((x, index) => (
          <UserDisplayItem />
        ))}
      </VStack>
    </Box>
  );
};

export default UserList;
