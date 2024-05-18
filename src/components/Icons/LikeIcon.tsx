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
  like: boolean;
  onclick: () => void;
  boxSize?: number;
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
  isHoveredColor?: string;
  color?: string;
}
const LikeIcon = ({
  like,
  onclick,
  marginRight,
  boxSize = 6,
  isHoveredColor = "brand.800",
  color = "black.100",
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
