import React from "react";
import { Box, Text, Image, VStack, HStack, IconButton } from "@chakra-ui/react";
import { Comment as CommentType } from "./types";
import { formatDistanceToNow } from "date-fns-jalali";
import { digitsEnToFa } from "@persian-tools/persian-tools";
//import Image1 from "../../assets/ForgotPass_tomato.png";

import { FaReply } from "react-icons/fa";
import LikeIcon from "../Icons/LikeIcon";
import { Link } from "react-router-dom";
interface ReplyProps {
  reply: CommentType;
  findParentCommentUsername: (parentId: bigint) => string | undefined;
  onReply: (commentId: BigInt) => void;
  onLike: (item: CommentType, isReply?: boolean) => void;
}

const Reply: React.FC<ReplyProps> = ({
  reply,
  findParentCommentUsername,
  onReply,
  onLike,
}) => {
  const parentUsername = findParentCommentUsername(
    reply.parentId ? reply.parentId : BigInt(0)
  );
  return (
    <Box display="flex" alignItems="flex-start">
      <Box
        w="93%"
        marginLeft="2%"
        borderWidth="1px"
        borderRadius="40px"
        p={4}
        mt={4}
        textAlign="right"
      >
        <VStack alignItems="flex-end">
          <HStack justifyContent="flex-end" w="100%">
            <Text fontSize="sm" color="gray.500" marginRight="auto">
              {parentUsername} به کاربر
            </Text>
            <Text fontSize="sm" color="gray.500" textAlign="right">
              {digitsEnToFa(
                formatDistanceToNow(new Date(reply.time), {
                  addSuffix: true,
                })
              )}
            </Text>
            <Text fontWeight="bold" fontSize="20px">
              <Link to={`/profile/${reply.username}`}>{reply.username}</Link>
            </Text>
            <Image
              borderRadius="100%"
              src={"http://back.khanmedia.ir:9290/" + reply.profileUrl}
              w="50px"
              bg="green"
            />
          </HStack>
          <Text paddingRight="4.1%">{reply.comment}</Text>
          <HStack w="100%" spacing={4} mt={2} ml={4}>
            <IconButton
              aria-label="Reply"
              icon={<FaReply />}
              onClick={() => onReply(reply.iD)}
            />
            <IconButton
              aria-label="Like"
              icon={
                <LikeIcon
                  onclick={() => onLike(reply, true)}
                  like={reply?.isLiked ? reply.isLiked : false}
                  boxSize={6}
                />
              }
            />
            <b>{reply?.numLikes}</b>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Reply;
