import React from "react";
import { Box, Text, HStack, Image, VStack, IconButton } from "@chakra-ui/react";
import { Comment as CommentType } from "./types";
import { formatDistanceToNow } from "date-fns-jalali";
import { digitsEnToFa } from "@persian-tools/persian-tools";
//import Image1 from "../../assets/ForgotPass_tomato.png";

import LikeIcon from "../Icons/LikeIcon";
import { FaReply } from "react-icons/fa";
import { Link } from "react-router-dom";

interface CommentProps {
  comment: CommentType;
  onReply: (commentId: bigint) => void;
  onLike: (comment: CommentType) => void;
  toggleReplies: (commentId: bigint) => void;
  repliesVisible: { [key: number]: boolean };
}

const Comment2: React.FC<CommentProps> = ({
  comment,
  onReply,
  onLike,
  toggleReplies,
  repliesVisible,
}) => {
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
            <Text fontSize="sm" color="gray.500">
              {digitsEnToFa(
                formatDistanceToNow(new Date(comment.time), {
                  addSuffix: true,
                })
              )}
            </Text>
            <Text fontWeight="bold" fontSize="20px">
              <Link to={`/profile/${comment.username}`}>
                {comment.username}
              </Link>
            </Text>
            <Image
              borderRadius="100%"
              src={"http://back.khanmedia.ir:9290/" + comment.profileUrl}
              w="50px"
              bg="black"
            />
          </HStack>
          <Text paddingRight="4.1%">{comment.comment}</Text>
          <HStack w="100%" spacing={4} mt={2} ml={4}>
            <IconButton
              aria-label="Reply"
              icon={<FaReply />}
              onClick={() => onReply(comment.iD)}
            />
            <IconButton
              aria-label="Like"
              icon={
                <LikeIcon
                  onclick={() => onLike(comment)}
                  like={comment?.isLiked ? comment.isLiked : false}
                  boxSize={6}
                />
              }
            />
            <b>{comment?.numLikes}</b>
            <Text
              mt={2}
              ml={4}
              color="blue.500"
              cursor="pointer"
              onClick={() => toggleReplies(comment.iD)}
              marginLeft="76%"
            >
              {repliesVisible[Number(comment.iD)]
                ? "پنهان کردن پاسخها"
                : "نمایش دادن پاسخها"}
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Comment2;
