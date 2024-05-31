import {
  HStack,
  VStack,
  Box,
  Heading,
  Input,
  Text,
  useToast,
  Center,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import CaptionBox from "./CaptionBox";
import postclient from "../../api/services/post-service";
import { GradientRedButton } from "../Buttons";
import SelectIngredients from "../selectIngredients/SelectIngredients";
import UserNavigation from "../Navigation/ProfileNavigation";
import PostPreview from "./PostPreview";

import { FaCameraRetro } from "react-icons/fa";

const NewPostLayout = () => {
  const [images, setImages] = useState<File[]>([]);
  const [caption, setCaption] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [ingredients, setIngredients] = useState<{ [key: string]: string }>({});
  const [numimages, setnumimg] = useState<number>(0);
  // const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState<string>("");
  const [file, setFile] = useState<string | Blob>("");
  const BASE_URL = "http://back.khanmedia.ir:8080/KhanAPI.MediaAPI";
  const [imageError, setImageError] = useState("");
  const Toast = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setnumimg(numimages + 1);
    const files = Array.from(event.target.files || []);
    setImages([...images, ...files]);
    if (numimages == 4) {
      setImageError("NumImageLim");
      console.log("error");
    } else {
    }
  };

  const uploadPostImage = async () => {
    const formData = new FormData();
    formData.append("uploadFile", file);

    try {
      const response = await axios.post(`${BASE_URL}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      console.log(response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (error === "Ok") {
      Toast({
        description: <Text dir="rtl">پست با موفقیت ذخیره شد.</Text>,
        status: "success",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } else if (error === "error") {
      Toast({
        description: <Text dir="rtl">خطا از سمت سرور!</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } else if (error === "Title") {
      Toast({
        description: <Text dir="rtl">عنوان نمی تواند خالی باشد!</Text>,
        status: "error",
        isClosable: true,
        duration: 4000,
        position: "bottom-left",
      });
    } else if (error === "Caption") {
      Toast({
        description: <Text dir="rtl">توضیحات نمی تواند خالی باشد!</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } else if (error === "NumImages") {
      Toast({
        description: <Text dir="rtl">حداقل یک تصویر لازم است!</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    }

    setError("");
  }, [error]);

  const Save = () => {
    if (title == "") {
      setError("Title");
      return;
    } else if (caption == "") {
      setError("Caption");
      return;
    } else if (numimages == 0) {
      setError("NumImages");
      return;
    } else if (title != "" && caption != "" && numimages != 0) {
      // setIsSaved(true);
      setError("Ok");
    }

    postclient
      .setPost(
        {
          numImages: numimages,
          description: caption,
          ingredients: ingredients,
          title: title,
          categoryID: 1,
        },
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        console.log("setPost response is: ", res);
      })
      .catch((err) => {
        setError("error");
        console.log("errorx: ", err);
        // setIsSaved(false);
      });
  };

  // const handleIngredientsChange = (ingredients: string[][]) => {
  //   var dict: { [key: string]: string } = {};
  //   for (let index = 0; index < ingredients.length; index++) {
  //     dict[ingredients[index][0]] = ingredients[index][1];
  //   }
  //   setIngredients(dict);
  // };

  const handleRemoveImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setnumimg(numimages - 1);
    setImageError("");
    setImages(newImages);
  };

  return (
    <Flex h="100vh" bgColor="gray.100" pos="relative">
      {/* navbar */}
      <UserNavigation isTrue={true} />
      <HStack boxShadow="lg" pos="relative" w="100%" h="100%" px={10} pt={5}>
        <Box
          h="85%"
          w="30%"
          pos="relative"
          bg="white"
          borderRadius="15px"
          boxShadow="lg"
        >
          <VStack h="100%" w="100%" overflow="hidden" borderRadius="15px">
            <Heading
              bgGradient="radial-gradient(ellipse at bottom, #FF736F , #FF004C)"
              w="100%"
              borderTopRadius="15px"
              h="15%"
              alignContent="center"
              textAlign="center"
              textColor="white"
              fontSize="24"
              dir="rtl"
            >
              پیش نمایش
            </Heading>
            <PostPreview images={images} />
          </VStack>
        </Box>

        <Spacer />
        <Box
          bg="white"
          height="85%"
          width="60%"
          boxShadow="lg"
          borderRadius="15px"
          pos="relative"
        >
          <Heading
            bgGradient="radial-gradient(ellipse at bottom, #FF736F , #FF004C)"
            w="100%"
            borderTopRadius="15px"
            h="15%"
            alignContent="center"
            pr={10}
            // textAlign="center"
            textColor="white"
            fontSize="24"
            // fontWeight="light"
            dir="rtl"
          >
            افزودن پست
          </Heading>
          <Box h="85%" w="100%" pos="relative">
            {/* Spacer */}
            <Box h="5%" w="100%" pos="relative"></Box>
            {/* Spacer */}
            <HStack h="60%" w="100%" pos="relative">
              <Center h="100%" w="100%" pos="relative" dir="rtl">
                <CaptionBox
                  caption={caption}
                  setCaption={setCaption}
                  title={title}
                  setTitle={setTitle}
                />
                {/* Spacer */}
                <Box h="100%" w="10%"></Box>
                {/* Spacer */}
                <SelectIngredients />
              </Center>
            </HStack>
            <Box h="4%" w="100%" pos="relative"></Box>
            <Center h="28%" w="100%" pos="relative" dir="rtl">
              <VStack
                h="100%"
                w="90%"
                pos="relative"
                align="start"
                bg="gray.200"
                borderRadius="lg"
                pb={2}
              >
                <Text
                  pos="relative"
                  right={0}
                  fontSize="22"
                  dir="rtl"
                  pr={5}
                  pt={2}
                >
                  اضافه کردن عکس
                </Text>
                <HStack h="80%" w="90%" pos="relative" pr={5}>
                  {images.map((image, index) => (
                    <Box
                      key={index}
                      position="relative"
                      width="75px"
                      height="75px"
                      // margin="10px"
                    >
                      <Image
                        src={URL.createObjectURL(image)}
                        alt={`Image ${index}`}
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        borderRadius="10%"
                      />

                      <CloseIcon
                        aria-label="Remove image"
                        position="absolute"
                        cursor="pointer"
                        color="brand.200"
                        top="1"
                        right="1"
                        onClick={() => handleRemoveImage(index)}
                      />
                    </Box>
                  ))}
                  <Center
                    pos="relative"
                    h="75px"
                    w="75px"
                    bg="gray.50"
                    cursor="pointer"
                    borderRadius="10%"
                    display={imageError === "NumImageLim" ? "none" : "flex"}
                    onClick={() =>
                      document.getElementById("image-upload")?.click()
                    }
                  >
                    <FaCameraRetro
                      key="empty-image-box"
                      size="40%"
                    ></FaCameraRetro>
                  </Center>
                </HStack>

                <Input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </VStack>
            </Center>
            <GradientRedButton
              onClick={function () {
                uploadPostImage();
                Save();
              }}
              pos="absolute"
              left={-10}
              bottom={-10}
              textColor="white"
              children="ذخیره پست"
            />
          </Box>
        </Box>
      </HStack>
    </Flex>
    // </Box>
  );
};

export default NewPostLayout;
