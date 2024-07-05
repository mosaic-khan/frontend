import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Textarea,
  Image,
  HStack,
  IconButton,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Comment as CommentType } from "./types";
import Reply from "./Reply";
import Comment2 from "./Comment";
import Image1 from "../../assets/ForgotPass_tomato.png";
import { FaReply } from "react-icons/fa6";
import LikeIcon from "../../components/Icons/LikeIcon";
import postclient from "../../api/services/post-service";
import { User } from "../../api/clients/user";
import userClient from "../../api/services/user-service";
import Replybar from "./Replybar";

interface CommentProps {
  postId: bigint;
}

const CommentsPage: React.FC<CommentProps> = ({ postId }) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [newComment, setNewComment] = useState("");
  const [replyText, setReplyText] = useState("");
  const [replyingTo, setReplyingTo] = useState<BigInt | null>(null);
  const [isrep, setisReplyingState] = useState<boolean>(false);
  const [repliesVisible, setRepliesVisible] = useState<{
    [key: number]: boolean;
  }>({});
  const [replies, setReplies] = useState<{ [key: number]: CommentType[] }>({});
  const [userpic, setUserpic] = useState<string>();
  const [update, triggerUpdate] = useState(true);
  const Toast = useToast();
  const [result, setError] = useState<string>("");
  const detectLanguage = (text: string): "ltr" | "rtl" => {
    if (!text) return "rtl"; // Default to RTL if text is empty
    // Check if the first character is in Persian range
    const persianRegex = /[\u0600-\u06FF\u0750-\u077F]/;
    return persianRegex.test(text.charAt(0)) ? "rtl" : "ltr";
  };

  useEffect(() => {
    if (result === "Ok") {
      Toast({
        description: <Text dir="rtl">پست با موفقیت ذخیره شد.</Text>,
        status: "success",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } else if (result === "errorsw") {
      Toast({
        description: <Text dir="rtl">محتوای نامناسب!</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } else if (result === "Title") {
      Toast({
        description: <Text dir="rtl">عنوان نمی تواند خالی باشد!</Text>,
        status: "error",
        isClosable: true,
        duration: 4000,
        position: "bottom-left",
      });
    } else if (result === "Caption") {
      Toast({
        description: <Text dir="rtl">توضیحات نمی تواند خالی باشد!</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } else if (result === "NumImageLim") {
      Toast({
        description: (
          <Text dir="rtl">تعداد تصاویر نمی تواند بیشتر از 10 باشد!</Text>
        ),
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } else if (result === "NumImages") {
      Toast({
        description: <Text dir="rtl">حداقل یک تصویر لازم است!</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    }

    setError("");
  }, [result]);
  useEffect(() => {
    userClient
      .getUserInfo(
        {},
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        if (res.response.user) {
          setUserpic(res.response.user.profilePicUrl);
        }
      })
      .catch((err) => {
        console.log("getProfile error: ", err);
      });
  }, []);
  useEffect(() => {
    // Fetch replies for all main comments
    comments.forEach((comment) => {
      handlegetonecommentreplies(comment.iD);
    });
  }, [update]);

  useEffect(() => {
    postclient
      .getComments(
        { postID: postId },
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        if (res.response.comments) {
          setComments(res.response.comments);
        }
      })
      .catch((err) => {
        console.log("getProfile error: ", err);
      });
  }, [update]); // Re-fetch comments whenever 'update' changes

  const handlegetonecommentreplies = (commentId: BigInt) => {
    postclient
      .getReplies(
        { commentID: BigInt(Number(commentId)) },
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        if (res.response.comments) {
          // Sort replies by time before setting them in the state
          const sortedReplies = res.response.comments.sort((a, b) => {
            const dateA = new Date(a.time);
            const dateB = new Date(b.time);
            return dateA.getTime() - dateB.getTime();
          });

          setReplies((prevReplies) => ({
            ...prevReplies,
            [Number(commentId)]: sortedReplies,
          }));
        }
      })
      .catch((err) => {
        console.log("getReplies error: ", err);
      });
  };

  const handleAddComment = () => {
    postclient
      .addComment(
        {
          postID: postId,
          comment: newComment,
        },
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        triggerUpdate(!update); // Trigger an update to refresh the comments
      })
      .catch((err) => {
        console.log("error comment: ", err);
        setError("errorsw");
      });
    setNewComment("");
  };

  const handleAddReply = (commentId: BigInt) => {
    postclient
      .addReply(
        {
          commentID: BigInt(Number(commentId)),
          comment: replyText,
        },
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        // Ensure replies are visible after adding a reply
        setRepliesVisible((prevVisible) => ({
          ...prevVisible,
          [Number(commentId)]: true,
        }));
        handlegetonecommentreplies(commentId); // Fetch updated replies
        triggerUpdate(!update);
        setReplyText("");
        setReplyingTo(null);
        setisReplyingState(false);
      })
      .catch((err) => {
        setError("errorsw");
        console.log("error comment: ", err);
      });
  };

  const handleReplyClick = (commentId: BigInt) => {
    if (replyingTo === null) {
      setReplyingTo(commentId);
      setisReplyingState(true);
    } else setReplyingTo(null);
  };
  const handleReplyClick2 = () => {
    setisReplyingState(false);
    setReplyingTo(null);
  };

  const toggleReplies = (commentId: bigint) => {
    setRepliesVisible((prev) => ({
      ...prev,
      [Number(commentId)]: !prev[Number(commentId)],
    }));

    if (!replies[Number(commentId)]) {
      handlegetonecommentreplies(commentId);
    }
  };

  function sendLikeRequest(commentid: bigint, action: string) {
    return new Promise((resolve, reject) => {
      if (action === "LikeAction") {
        postclient
          .likeComment(
            { commentID: commentid },
            {
              meta: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
              },
            }
          )
          .then((res) => {
            resolve(res);
            triggerUpdate(!update); // Trigger an update to refresh the comments
          })
          .catch((res) => {
            reject(res);
          });
      } else if (action === "DisLikeAction") {
        postclient
          .dislikeComment(
            { commentID: commentid },
            {
              meta: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
              },
            }
          )
          .then((res) => {
            resolve(res);
            triggerUpdate(!update); // Trigger an update to refresh the comments
          })
          .catch((res) => {
            reject(res);
          });
      } else {
        reject("some weird error occurred.");
      }
    });
  }
  const findParentCommentUsername = (parentId: bigint): string | undefined => {
    // Find the parent comment in the comments array
    const parentComment = comments.find((comment) => comment.iD === parentId);

    // If the parent comment is found, return its username
    if (parentComment) {
      return parentComment.username;
    }

    // If not found in the main comments, search in the replies
    for (const repliesArray of Object.values(replies)) {
      const parentReply = repliesArray.find((reply) => reply.iD === parentId);
      if (parentReply) {
        return parentReply.username;
      }
    }

    // Return undefined if parent comment or reply is not found
    return undefined;
  };
  const sortedComments = comments.slice().sort((a, b) => {
    const dateA = new Date(a.time);
    const dateB = new Date(b.time);
    return dateA.getTime() - dateB.getTime();
  });

  const handleLikeClick = (item: CommentType, isReply: boolean = false) => {
    const itemId = isReply ? item?.iD : item?.iD;
    const action = item?.isLiked ? "DisLikeAction" : "LikeAction";

    sendLikeRequest(itemId, action)
      .then(() => {
        if (isReply) {
          // If it's a reply, update the specific reply in the replies state
          setRepliesVisible((prevVisible) => ({
            ...prevVisible,
            [Number(itemId)]: true, // Ensure replies are visible after liking/disliking
          }));
          handlegetonecommentreplies(item.parentId ? item.parentId : BigInt(0)); // Fetch updated replies
        } else {
          // If it's a comment, update the comments state
          triggerUpdate(!update);
        }
      })
      .catch((error) => {
        console.error("Error liking/disliking item:", error);
      });
  };

  return (
    <Box p={4} pb="100px">
      <Box mb="100px">
        {sortedComments.map((comment) => (
          <Box key={comment.iD}>
            <Comment2
              comment={comment}
              onReply={handleReplyClick}
              onLike={handleLikeClick}
              toggleReplies={toggleReplies}
              repliesVisible={repliesVisible}
            />
            <HStack spacing={4} mt={2} ml={4}>
              {/* <IconButton
                aria-label="Reply"
                icon={<FaReply />}
                onClick={() => handleReplyClick(comment.iD.toString())}
                marginLeft="2%"
              />
              <IconButton
                aria-label="Like"
                icon={
                  <LikeIcon
                    onclick={() => handleLikeClick(comment)}
                    like={comment?.isLiked ? comment.isLiked : false}
                    boxSize={6}
                  />
                }
              />
              <b>{comment?.numLikes}</b> */}
              {/* <Text
                mt={2}
                ml={4}
                color="blue.500"
                cursor="pointer"
                onClick={() => toggleReplies(comment.iD)}
                marginLeft="73%"
              >
                {repliesVisible[Number(comment.iD)]
                  ? "پنهان کردن پاسخها"
                  : "نمایش دادن پاسخها"}
              </Text> */}
            </HStack>
            {repliesVisible[Number(comment.iD)] && (
              <Box
                mt={2}
                ml={4}
                marginTop="2%"
                marginRight="5%"
                borderRadius="10px"
                position="relative"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "20%",
                  right: "1%",
                  height: "4px",
                  borderRadius: "10px 10px 0 0",
                  background: "linear-gradient(to right, #ff7e5f, #feb47b)",
                }}
              >
                {replies[Number(comment.iD)] &&
                  replies[Number(comment.iD)].map((reply) => (
                    <Box key={reply.iD}>
                      <Reply
                        reply={reply}
                        findParentCommentUsername={findParentCommentUsername}
                        onLike={handleLikeClick}
                        onReply={handleReplyClick}
                      />
                      {/* <HStack spacing={4} mt={2} ml={4}>
                        <IconButton
                          aria-label="Reply"
                          icon={<FaReply />}
                          onClick={() => handleReplyClick(reply.iD.toString())}
                          marginLeft="2%"
                        />

                        <IconButton
                          aria-label="Like"
                          icon={
                            <LikeIcon
                              onclick={() => handleLikeClick(reply, true)}
                              like={reply?.isLiked ? reply.isLiked : false}
                              boxSize={6}
                            />
                          }
                        />
                        <b>{reply?.numLikes}</b>
                      </HStack> */}
                    </Box>
                  ))}
              </Box>
            )}
          </Box>
        ))}
      </Box>
      <Box
        position="fixed"
        bottom="0"
        left="0"
        width="100%"
        h="150px"
        bg="white"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: "0%",
          right: "0%",
          height: "2px",
          borderRadius: "10px 10px 0 0",
          background: "linear-gradient(to right, #ff7e5f, #feb47b)",
        }}
      >
        {replyingTo === null && isrep == false && (
          <VStack>
            <HStack w="100%" h="35px"></HStack>
            <HStack w="100%">
              <Button marginLeft="5%" onClick={handleAddComment}>
                افزودن نظر
              </Button>
              <Textarea
                borderRadius="35px"
                style={{ direction: detectLanguage(newComment) }}
                w="100%"
                resize="none"
                textAlign="right"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="یک نظر بنویسید..."
                h="75px"
                display="inline-block"
              />
              <Image
                float="right"
                borderRadius="100%"
                marginTop="0.5%"
                marginRight="4%"
                src={"http://back.khanmedia.ir:9290/" + userpic}
                w="50px"
                bg="black"
                display="inline-block"
              />
            </HStack>
          </VStack>
        )}
        {replyingTo !== null && isrep === true && (
          <VStack>
            <HStack
              w="100%"
              _before={{
                content: '""',
                position: "absolute",
                bottom: 100,
                left: "0%",
                right: "0%",
                height: "2px",
                borderRadius: "10px 10px 0 0",
                background: "linear-gradient(to right, #ff7e5f, #feb47b)",
              }}
            >
              {
                <Replybar
                  replyto={BigInt(Number(replyingTo))}
                  findParentCommentUsername={findParentCommentUsername}
                  handleReplyClick2={handleReplyClick2}
                ></Replybar>
              }
            </HStack>
            <HStack w="100%">
              <Button
                marginLeft="5%"
                onClick={() => handleAddReply(replyingTo)}
              >
                افزودن پاسخ
              </Button>
              <Textarea
                borderRadius="35px"
                style={{ direction: detectLanguage(replyText) }}
                w="100%"
                resize="none"
                textAlign="right"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="یک پاسخ بنویسید..."
                h="75px"
                display="inline-block"
              />
              <Image
                float="right"
                borderRadius="100%"
                marginTop="0.5%"
                src={"http://back.khanmedia.ir:9290/" + userpic}
                w="50px"
                marginRight="4%"
                bg="black"
                display="inline-block"
              />
            </HStack>
          </VStack>
        )}
      </Box>
    </Box>
  );
};

export default CommentsPage;
