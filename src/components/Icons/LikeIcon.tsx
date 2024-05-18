import { Icon } from "@chakra-ui/icons";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

interface Props {
  like: boolean;
  onclick: () => void;
}
// function sendLikeRequest(postId: bigint, action: string) {
//   return new Promise((resolve, reject) => {
//     if (action == "LikeAction") {
//       PostApi.like(
//         { postId: postId },
//         {
//           meta: {
//             Authorization: `Bearer ${localStorage.getItem("jwt")}`,
//           },
//         }
//       )
//         .then((res) => {
//           resolve(res);
//         })
//         .catch((res) => {
//           reject(res);
//         });
//     } else if (action == "DisLikeAction") {
//       PostApi.dislike(
//         { postId: postId },
//         {
//           meta: {
//             Authorization: `Bearer ${localStorage.getItem("jwt")}`,
//           },
//         }
//       )
//         .then((res) => {
//           resolve(res);
//         })
//         .catch((res) => {
//           reject(res);
//         });
//     } else {
//       reject("some weird error occured.");
//     }
//   });
// }
const LikeIcon = ({ like , onclick}: Props) => {
  
  return (
    <Icon
      as={like ? IoHeart : IoHeartOutline}
      boxSize={6}
      color={like ? "brand.800" : "black.100"}
      mr={4}
      onClick={onclick}
      
      _hover={{
        cursor: "pointer",
        transform: "scale(1.1)",
      }}
    />
  );
};
export default LikeIcon;
