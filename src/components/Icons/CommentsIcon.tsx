import { Icon } from "@chakra-ui/icons";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineComment } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CommentsPage from "../Comments/CommentsPage";

interface Props {
  postid: bigint;
  isHoveredColor?: string;
  color?: string;
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
}
const CommentsIcon = ({
  marginRight,
  boxSize = 6,
  isHoveredColor = "brand.900",
  color = "black.100",
  postid,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Icon
        as={AiOutlineComment}
        boxSize={boxSize}
        color={isHovered ? isHoveredColor : color}
        mr={marginRight} //marginright 4 for onepost
        onClick={onOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        _hover={{
          cursor: "pointer",
          transform: "scale(1.1)",
          transition: "transform 0.3s ease-in-out",
        }}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxWidth="77vw">
          <ModalBody>
            <CommentsPage postId={postid}></CommentsPage>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CommentsIcon;
