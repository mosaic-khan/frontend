import { useRef, useState, useEffect, LegacyRef } from "react";
import { ChevronDownIcon, EditIcon } from "@chakra-ui/icons";
import { ImageUpload } from "../components/UploadImage/ImageUpload";
import { ImageCropper } from "../components/UploadImage/ImageCropper";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  Box,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Img,
  Input,
  Select,
  Avatar,
} from "@chakra-ui/react";
import { ShamsiCalendarButton, GradientRedButton } from "../components/Buttons";
import tomato from "../assets/tomato-logo.png";
import UserNavigation from "../components/Navigation/ProfileNavigation";
import UserSideBar from "../components/Navigation/UserSideBar";
export const EditProfile = () => {
  // let Cities = ["تهران", "اسلامشهر", "کرج", "رباط کریم"];
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
  const setCityName = (input: string, start: boolean) => { 
    //todo (request from back)
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
    <Box position="relative" w="100%" h="100vh" bgColor="#ffd2c8">
      <UserNavigation />
      <UserSideBar />
      {/* add this inside UserSideBar  */}
      <Img
        boxSize="230px"
        position="absolute"
        right="0"
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

      <Box position="absolute" width="800px" left="15%" top="15%">
        <Box
          boxShadow="2xl"
          bg="gray.50"
          h="500px"
          w="800px"
          color="white"
          borderRadius="10px"
          position="relative"
          marginRight="5%"
          top="20px"
        >
          <HStack>
            <Box
              h="400px"
              w="60%"
              dir="rtl"
              position="absolute"
              right="0"
              top="0"
              paddingTop="30px"
              paddingRight="30px"
              textColor="black"
              justifyContent="space-between"
            >
              <FormControl id="name" marginBottom="10px">
                <FormLabel paddingRight="10px">نام</FormLabel>
                <Input variant="filled" _placeholder={{ color: "gray.200" }} />
              </FormControl>

              <FormControl id="FullName" marginBottom="10px">
                <FormLabel paddingRight="10px">نام خانوادگی</FormLabel>
                <Input variant="filled" _placeholder={{ color: "gray.200" }} />
              </FormControl>
              <FormControl id="sex" marginBottom="10px">
                <FormLabel paddingRight="10px">جنسیت</FormLabel>

                <Select
                  variant="filled"
                  _placeholder={{ color: "gray.200" }}
                  icon={
                    <ChevronDownIcon marginLeft="30px" paddingRight="10px" />
                  }
                >
                  <option value="female">خانم</option>
                  <option value="male">آقا</option>
                  <option value="other">ترجیح می‌دهم نگویم</option>
                </Select>
              </FormControl>

              <FormControl id="birthday" marginBottom="10px">
                <FormLabel paddingRight="10px">تاریخ تولد</FormLabel>
                <ShamsiCalendarButton></ShamsiCalendarButton>
              </FormControl>

              <FormControl id="city" marginBottom="10px">
                <FormLabel paddingRight="10px">شهر</FormLabel>
                <Select
                  onChange={(e) => setCityName(e.target.value, true)}
                  variant="filled"
                  _placeholder={{ color: "gray.200" }}
                />
                {/* {Cities.map((city) => (
                    <option key={city.length}>{city}</option>
                  ))} */}
              </FormControl>
            </Box>
            <Box
              position="absolute"
              width="150px"
              height="150px"
              left="5%"
              top="15%"
            >
              <Box
                bg="blue"
                width="100%"
                height="100%"
                borderRadius="full"
                overflow="hidden"
              >
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
                  // alt="Profile Image"
                  width="100%"
                  height="100%"
                  borderRadius={100}
                ></Avatar>
              </Box>
            </Box>
          </HStack>
        </Box>

        <GradientRedButton position="relative" bottom="10px">
          ذخیره
        </GradientRedButton>
      </Box>
    </Box>
  );
};
