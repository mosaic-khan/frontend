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
  const [error, setError] = useState<string>("");
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
    }
  };

  const uploadPostImages = async () => {
    const formData = new FormData();
    const imageTokens = [];

    for (let image of images) {
      formData.append("uploadFile", image);
      try {
        const response = await axios.post(`${BASE_URL}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        });
        imageTokens.push(response.data.token);
      } catch (error) {
        console.error("Error uploading image:", error);
        setError("ImageUpload");
        return;
      }
    }

    return imageTokens;
  };

  const SavePost = async () => {
    if (title === "") {
      setError("Title");
      return;
    } else if (caption === "") {
      setError("Caption");
      return;
    } else if (numimages === 0) {
      setError("NumImages");
      return;
    }

    const imageTokens = await uploadPostImages();
    if (imageTokens?.length !== images.length) {
      setError("ImageUpload");
      return;
    }

    const postRequest = {
      title: title,
      ingredients: ingredients,
      description: caption,
      categoryID: 1,
      numImages: images.length,
    };

    try {
      const response = await postclient.setPost(postRequest, {
        meta: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });

      const postId = response.response.id;

      for (let token of imageTokens) {
        await postclient.addImageForPost(
          { postImageToken: token }, // Corrected property name
          {
            meta: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        );
      }

      setError("Ok");
    } catch (err) {
      setError("error");
      console.log("Error setting post:", err);
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
    } else if (error === "ImageUpload") {
      Toast({
        description: <Text dir="rtl">خطا در بارگذاری تصاویر!</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    }

    setError("");
  }, [error]);

  const handleRemoveImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setnumimg(numimages - 1);
    setImageError("");
    setImages(newImages);
  };

  return (
    <Flex h="100vh" bgColor="gray.100" pos="relative">
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
            <PostPreview images={images} caption={caption} />
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
            textColor="white"
            fontSize="24"
            dir="rtl"
          >
            افزودن پست
          </Heading>
          <Box h="85%" w="100%" pos="relative">
            <Box h="5%" w="100%" pos="relative"></Box>
            <HStack h="60%" w="100%" pos="relative">
              <Center h="100%" w="100%" pos="relative" dir="rtl">
                <CaptionBox
                  caption={caption}
                  setCaption={setCaption}
                  title={title}
                  setTitle={setTitle}
                />
                <Box h="100%" w="10%"></Box>
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
                    <FaCameraRetro size="40%" />
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
                SavePost();
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
  );
};

export default NewPostLayout;
