import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  VStack,
  Text,
  Image,
  useDisclosure,
  Slide,
} from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { Icon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Profile } from "../../api/clients/user";
import { useNavigate } from "react-router-dom";
interface Props {
  userProfile: Profile | undefined;
}
const UserSideBar = ({ userProfile }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <Box>
      <Icon
        as={HamburgerIcon}
        boxSize={7}
        mr={4}
        onClick={onOpen}
        pos="fixed"
        top="2.5%"
        right="1.5%"
        _hover={{
          cursor: "pointer",
          transform: "scale(1.1)",
          transition: "transform 0.1s ease-in-out",
        }}
      />
      <Slide direction="right" in={isOpen} style={{ width: "250px" }}>
        <Box
          bg="black"
          w="100%"
          h="100%"
          boxShadow="2xl"
          borderLeftRadius="md"
          bgGradient="linear(to-t, brand.700, brand.500, brand.300)"
        >
          <Icon
            as={CloseIcon}
            boxSize={4}
            onClick={onClose}
            _hover={{
              cursor: "pointer",
              transform: "scale(1.1)",
              transition: "transform 0.1s ease-in-out",
            }}
            pos="relative"
            left="5%"
            top="1%"
          ></Icon>
          <VStack padding={20}>
            <VStack
              borderRadius="full"
              w="150px"
              h="150px"
              display="flex"
              justifyContent="center"
              marginBottom={10}
            >
              <Image
                src={
                  "http://back.khanmedia.ir:9290" + userProfile?.profilePicUrl
                }
                alt="Profile Image"
                display="flex"
                fallbackSrc="https://via.placeholder.com/150"
                boxSize="80px"
                borderRadius="full"
              />
              <Text fontSize="md" fontWeight="bold" color="gray.800">
                {" "}
                {userProfile?.username}
              </Text>
              <Text fontSize="sm" color="gray.600">
                {" "}
                {userProfile?.city}
              </Text>
            </VStack>
            <VStack
              justifyContent="space-between"
              boxSize="120px"
              dir="rtl"
              color="gray.700"
            >
              <HStack
                width="100%"
                cursor="pointer"
                _hover={{ color: "white" }}
                marginBottom={5}
                onClick={() => navigate("/myprofile")}
              >
                <BiUser />
                <Text>پروفایل</Text>
              </HStack>

              <HStack
                width="100%"
                cursor="pointer"
                _hover={{ color: "white" }}
                marginBottom={5}
                onClick={() => navigate("/home")}
              >
                <SearchIcon />
                <Text>صفحه اصلی</Text>
              </HStack>

              <HStack
                width="100%"
                cursor="pointer"
                _hover={{ color: "white" }}
                marginBottom={5}
                onClick={() => navigate("/editprofile")}
              >
                <FiEdit />
                <Text>اديت پروفايل</Text>
              </HStack>
            </VStack>
          </VStack>
        </Box>
      </Slide>
    </Box>
  );
};

export default UserSideBar;
