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
import DeletPassChildren from "../editProfile/Accordions/DeletPassChildren";
import UserNavigation from "../components/Navigation/ProfileNavigation";
import PersonalInfo from "../editProfile/Profile/Personalnfo";
import userClient from "../api/services/user-service";
import { User } from "../api/clients/user";
import useUploadImage from "../api/services/media-service";

export interface UserEditInfo {
  user: User;
  cityId?: number;
}

export interface UserEditInfo {
  user: User;
  cityId?: number;
}

export const EditProfile = () => {
  const inputRef = useRef<any>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userEdit, setUserEdit] = useState<UserEditInfo>({
    user: {
      fName: "",
      lName: "",
      bio: "",
      city: "",
      birthDay: "",
      profilePicUrl: "",
      gender: "",
      username: "",
      email: "",
    },
  });

  const onChooseImg = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const [image, setImage] = useState("");
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [imgAfterCrop, setImgAfterCrop] = useState("");
  const uploadImagePromise = useUploadImage({
    path: "upload-profile-image",
  });

  const onImageSelected = (selectedImg: string) => {
    setImage(selectedImg);
    setCurrentPage("crop-img");
  };

  const onCropDone = (imgCanvas: HTMLCanvasElement) => {
    setImgAfterCrop(imgCanvas.toDataURL("image/jpeg"));
    imgCanvas.toBlob((blob) => {
      if (blob) {
        const formData = new FormData();
        formData.append("uploadFile", blob);
        uploadImagePromise(formData)
          .then((res) => {
            console.log("Upload profile image response : ", res);
            userClient
              .changeProfilePic(
                {
                  profilePicToken: res.data,
                },
                {
                  meta: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                  },
                }
              )
              .then((res) => {
                console.log("editProfileInfo response: ", res);
              })
              .catch((err) => {
                console.log("editProfileInfo error: ", err);
              });
          })
          .catch((err) => {
            console.log("Error on upload profile image. error : ", err);
          });
      }
    });
    setCurrentPage("choose-img");
  };

  const handleSubmitProfile = () => {
    userClient
      .editProfileInfo(
        {
          bio: userEdit.user.bio,
          fName: userEdit.user.fName,
          lName: userEdit.user.lName,
          gender: userEdit.user.gender,
          birthDay: userEdit.user.birthDay.substring(0, 10),
          ...{ ...(userEdit.cityId ? { cityID: userEdit.cityId } : {}) },
        },
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        console.log("editProfileInfo response: ", res);
      })
      .catch((err) => {
        console.log("editProfileInfo error: ", err);
      });
  };

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
        console.log("getProfile response: ", res.response.user);
        if (res.response.user) {
          setUserEdit({ user: res.response.user });
        }
      })
      .catch((err) => {
        console.log("getProfile error: ", err);
      });
  }, []);

  useEffect(() => {
    if (currentPage === "crop-img") {
      onOpen();
    }
  }, [currentPage, onOpen]);
  return (
    <Box position="relative" boxSize="100%" bgColor="gray.100">
      <UserNavigation isTrue={true} />
      <Img
        boxSize="200px"
        position="fixed"
        right="60px"
        bottom="0"
        src={tomato}
        zIndex={10}
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
            onCropDone={(imgCroppedArea: HTMLCanvasElement) => {
              onCropDone(imgCroppedArea);
              onClose();
              setCurrentPage("choose-img");
            }}
          />
        </ModalContent>
      </Modal>
      <VStack paddingTop={20}>
        <Box position="relative" width="900px" height="600px">
          <Center>
            <Box
              boxShadow="2xl"
              bg="gray.50"
              h="520px"
              w="800px"
              color="white"
              borderRadius="lg"
              position="relative"
              top="20px"
            >
              <HStack>
                <PersonalInfo
                  userEditInfo={userEdit}
                  setUserEditInfo={setUserEdit}
                />
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
                        src={
                          imgAfterCrop != ""
                            ? imgAfterCrop
                            : userEdit.user.profilePicUrl != ""
                            ? "http://back.khanmedia.ir:9290/" +
                              userEdit.user.profilePicUrl
                            : ""
                        }
                        width="100%"
                        height="100%"
                        borderRadius={100}
                      ></Avatar>
                    </Box>
                  </Box>
                  <BiographyBox
                    userEditInfo={userEdit}
                    setUserEditInfo={setUserEdit}
                  />
                </VStack>
              </HStack>
            </Box>
          </Center>
          <GradientRedButton
            position="absolute"
            bottom="20px"
            borderRadius="40px"
            onClick={handleSubmitProfile}
          >
            ذخیره
          </GradientRedButton>
        </Box>
        <ChangePassAccordion>
          <ChangePassChildren />
        </ChangePassAccordion>
        <DeletePassAccordion>
          <DeletPassChildren />
        </DeletePassAccordion>
      </VStack>
    </Box>
  );
};
