import { Avatar, HStack, Text } from "@chakra-ui/react";

const HeaderProfileIcon = () => {
  return (
    <HStack>
      <Avatar size="md" src="https://bit.ly/broken-link" />
      <Text color="gray.700" fontWeight="bold">
        {localStorage.getItem("username")}
      </Text>
    </HStack>
  );
};

export default HeaderProfileIcon;
