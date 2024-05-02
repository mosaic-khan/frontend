import { useRef, useState, useEffect } from "react";
import { EditIcon } from "@chakra-ui/icons";
import { ImageUpload } from "../components/UploadImage/ImageUpload";
import { ImageCropper } from "../components/UploadImage/ImageCropper";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  Box,
  HStack,
  Icon,
  Img,
  Avatar,
  VStack,
  Center,
} from "@chakra-ui/react";
import { GradientRedButton } from "../components/Buttons";
import tomato from "../assets/tomato-logo.png";
import ChangePassAccordion from "../editProfile/Accordions/ChangePassAccordion";
import ChangePassChildren from "../editProfile/Accordions/ChangePassChildren";
import DeletePassAccordion from "../editProfile/Accordions/DeletPassAccordion";
import BiographyBox from "../editProfile/Profile/Biography";
import UserNavigation from "../components/navigation/ProfileNavigation";
import UserSideBar from  "../components/navigation/UserSideBar";
import PerosonalInfo from "../editProfile/Profile/Personalnfo";

export const EditProfile = () => {
  const inputRef = useRef<any>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onChooseImg = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const [image, setImage] = useState("");
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [imgAfterCrop, setImgAfterCrop] = useState("");

  const onImageSelected = (selectedImg: string) => {
    setImage(selectedImg);
    setCurrentPage("crop-img");
  };

  const onCropDone = (imgCroppedArea: string) => {
    setImgAfterCrop(imgCroppedArea);
    setCurrentPage("choose-img");
  };

  useEffect(() => {
    if (currentPage === "crop-img") {
      onOpen();
    }
  }, [currentPage, onOpen]);
  return (
    <Box position="relative" w="100%" h="100%" bgColor="gray.100">
      <UserNavigation />
      <UserSideBar />
      <Img
        boxSize="200px"
        position="fixed"
        right="60px"
        bottom="0"
        src={tomato}
        borderColor="#ffd2c8"
      ></Img>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setCurrentPage("choose-img");
        }}
        isCentered
        size="xxl"
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />

        <ModalContent
          width={"400px"}
          height={"400px"}
          borderRadius={0}
          bg={"transparent"}
          justifyContent={"center"}
        >
          <ModalCloseButton top={"0%"} left={"100%"} color={"black"} />

          <ImageCropper
            image={image}
            onCropDone={(imgCroppedArea: string) => {
              onCropDone(imgCroppedArea);
              onClose();
              setCurrentPage("choose-img");
            }}
          />
        </ModalContent>
      </Modal>
      <VStack boxSize="80%" marginLeft="30px" marginTop="10px">
        <Box position="relative" width="900px" height="600px">
          <Center>
            <Box
              boxShadow="2xl"
              bg="gray.50"
              h="500px"
              w="800px"
              color="white"
              borderRadius="lg"
              position="relative"
              top="20px"
            >
              <HStack>
                <PerosonalInfo />

                <VStack
                  width="300px"
                  height="500px"
                  justifyContent="space-between"
                  spacing="50px"
                >
                  <Box
                    position="absolute"
                    width="150px"
                    height="150px"
                    top="10%"
                  >
                    {/*Icon with avatar*/}
                    <Box
                      width="100%"
                      height="100%"
                      borderRadius="full"
                      overflow="hidden"
                    >
                      {/* Icon */}
                      <Box
                        position="absolute"
                        bottom="0"
                        right="0"
                        width="40px"
                        height="40px"
                        borderRadius={100}
                        bg="white"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        boxShadow="0 2px 4px rgba(0,0,0,0.1)"
                        zIndex={1}
                      >
                        <Icon
                          as={EditIcon}
                          color="gray.600"
                          onClick={onChooseImg}
                          cursor="pointer"
                        />
                        {currentPage === "choose-img" ? (
                          <ImageUpload
                            ref={inputRef}
                            onImageSelected={onImageSelected}
                          />
                        ) : (
                          <></>
                        )}
                      </Box>

                      <Avatar
                        src={imgAfterCrop}
                        width="100%"
                        height="100%"
                        borderRadius={100}
                      ></Avatar>
                    </Box>
                  </Box>
                  <BiographyBox />
                </VStack>
              </HStack>
            </Box>
          </Center>
          <GradientRedButton position="absolute" bottom="50px">
            ذخیره
          </GradientRedButton>
        </Box>
        <ChangePassAccordion>
          <ChangePassChildren />
        </ChangePassAccordion>
        <DeletePassAccordion>
          <>TODO</>
        </DeletePassAccordion>
      </VStack>
    </Box>
  );
};
