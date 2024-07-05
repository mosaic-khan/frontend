import { CloseIcon } from "@chakra-ui/icons";
import { HStack, Icon, IconButton, Text } from "@chakra-ui/react";
import { Comment as CommentType } from "./types";
import React from "react";
import { FaReply } from "react-icons/fa";
interface ReplyBarProps {
  replyto: bigint;
  findParentCommentUsername: (parentId: bigint) => string | undefined;
  handleReplyClick2: () => void;
}
const Replybar: React.FC<ReplyBarProps> = ({
  replyto,
  findParentCommentUsername,
  handleReplyClick2,
}) => {
  const parentUsername = findParentCommentUsername(replyto);
  return (
    <HStack w="100%" marginTop="4px">
      <IconButton
        aria-label="Like"
        marginLeft="1%"
        marginBottom="4px"
        w="20px"
        icon={<CloseIcon onClick={handleReplyClick2} h="10px" width="10px" />}
      />
      <Text marginLeft="auto" marginRight="1%" fontSize="sm" color="gray.500">
        {parentUsername} به کاربر
      </Text>
      <Icon boxSize={7} marginRight="1%">
        <FaReply />
      </Icon>
    </HStack>
  );
};

export default Replybar;
