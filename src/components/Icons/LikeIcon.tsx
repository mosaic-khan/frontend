import { Icon } from "@chakra-ui/icons";

import { IoHeart, IoHeartOutline } from "react-icons/io5";

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

interface Props {
  isHoveredColor: string;
  color: string;
  boxSize: number;
  marginRight?:
    | number
    | (string & {})
    | "-moz-initial"
    | "inherit"
    | "initial"
    | "revert"
    | "revert-layer"
    | "unset"
    | "auto"
    | undefined;
  like: boolean;
  onclick: () => void;
}
const LikeIcon = ({
  isHoveredColor,
  color,
  boxSize,
  marginRight,
  like,
  onclick,
}: Props) => {
  return (
    <Icon
      as={like ? IoHeart : IoHeartOutline}
      boxSize={boxSize} //6 default
      color={like ? isHoveredColor : color}
      mr={marginRight ? marginRight : 0} //marginright 4 for onepost
      onClick={onclick}
      _hover={{
        cursor: "pointer",
        transform: "scale(1.1)",
        transition: "transform 0.3s ease-in-out",
      }}
    />
  );
};
export default LikeIcon;
// "brand.800" : "black.100"
