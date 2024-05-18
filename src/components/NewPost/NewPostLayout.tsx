import {
  HStack,
  VStack,
  Box,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image, IconButton } from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import Slideshow from "./PostPreview";
import CaptionBox from "./CaptionBox";
import UserInfo from "./UserInfo";
import postclient from "../../api/services/post-service";
import STagBox from "./SimpleTagBox";
import { GradientRedButton } from "../Buttons";
import SelectIngredients from "../selectIngredients/SelectIngredients";
import UserNavigation from "../Navigation/ProfileNavigation";

const NewPostLayout = () => {
  const [images, setImages] = useState<File[]>([]);
  const [caption, setCaption] = useState<string>("");
  const [Title, setTitle] = useState<string>("");
  const [ingredients, setIngredients] = useState<{ [key: string]: string }>({});
  const [numimages, setnumimg] = useState<number>(0);
  const [isSaved, setIsSaved] = useState(false);
  const [result, setError] = useState<string>("");
  const [file, setFile] = useState(null);
  const BASE_URL = "http://back.khanmedia.ir:8080/KhanAPI.MediaAPI";
  const Toast = useToast();

  const detectLanguage = (text: string): "ltr" | "rtl" => {
    if (!text) return "rtl"; // Default to RTL if text is empty
    // Check if the first character is in Persian range
    const persianRegex = /[\u0600-\u06FF\u0750-\u077F]/;
    return persianRegex.test(text.charAt(0)) ? "rtl" : "ltr";
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (numimages == 10) {
      setError("NumImageLim");
      return false;
    }
    const files = Array.from(event.target.files || []);
    setnumimg(numimages + 1);

    setImages([...images, ...files]);
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
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (result === "Ok") {
      Toast({
        description: <Text dir="rtl">پست با موفقیت ذخیره شد.</Text>,
        status: "success",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } else if (result === "error") {
      Toast({
        description: <Text dir="rtl">خطا از سمت سرور!</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } else if (result === "Title") {
      Toast({
        description: <Text dir="rtl">عنوان نمی تواند خالی باشد!</Text>,
        status: "error",
        isClosable: true,
        duration: 4000,
        position: "bottom-left",
      });
    } else if (result === "Caption") {
      Toast({
        description: <Text dir="rtl">توضیحات نمی تواند خالی باشد!</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } else if (result === "NumImageLim") {
      Toast({
        description: (
          <Text dir="rtl">تعداد تصاویر نمی تواند بیشتر از 10 باشد!</Text>
        ),
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } else if (result === "NumImages") {
      Toast({
        description: <Text dir="rtl">حداقل یک تصویر لازم است!</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    }

    setError("");
  }, [result]);

  const Save = () => {
    if (Title == "") {
      setError("Title");
      return;
    } else if (caption == "") {
      setError("Caption");
      return;
    } else if (numimages == 0) {
      setError("NumImages");
      return;
    } else if (Title != "" && caption != "" && numimages != 0) {
      setIsSaved(true);
      setError("Ok");
    }

    postclient
      .setPost(
        {
          numImages: numimages,
          description: caption,
          ingredients: ingredients,
          title: Title,
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
        setIsSaved(false);
      });
  };

  const handleIngredientsChange = (ingredients: string[][]) => {
    var dict: { [key: string]: string } = {};
    for (let index = 0; index < ingredients.length; index++) {
      dict[ingredients[index][0]] = ingredients[index][1];
    }
    setIngredients(dict);
  };

  const handleRemoveImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setnumimg(numimages - 1);
    setImages(newImages);
  };

  return (
    <Box position="relative" w="100%" h="100%" bgColor="gray.100">
      <UserNavigation />
      <HStack bg="gray.200" width="100%" height="90%" spacing="105px">
        <Box
          bg="white"
          height="90%"
          width="40%"
          border="1px solid #ccc"
          marginLeft="50px"
          borderRadius="5%"
          marginBottom="8%"
        >
          <Slideshow images={images} />
        </Box>
        <Box
          bg="white"
          height="90%"
          width="60%"
          border="1px solid #ccc"
          marginRight="50px"
          marginBottom="5%"
          marginTop="6%"
          borderRadius="5%"
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <VStack width="100%">
            <Box
              width="100%"
              h="80px"
              borderBottom="1px solid #ccc"
              bg="#ff0000"
              borderTopRadius="25px"
            >
              <Heading
                textAlign="right"
                paddingRight="5%"
                textColor="white"
                marginTop="2%"
              >
                پست جدید
              </Heading>
            </Box>
            <UserInfo />
            <Input
              placeholder="عنوان پست"
              marginBottom="4%"
              textColor="white"
              width="40%"
              style={{ direction: detectLanguage(Title) }}
              _placeholder={{ textColor: "white" }}
              value={Title}
              border="none"
              bgGradient="linear(to-l, #ff0000,brand.300)"
              onChange={(event) => setTitle(event.target.value)}
            ></Input>
            <HStack spacing="10px">
              <SelectIngredients onChange={handleIngredientsChange} />
              <CaptionBox caption={caption} setCaption={setCaption} />
            </HStack>
            <STagBox />
            <VStack spacing={4}>
              <Box
                display="flex"
                flexWrap="wrap"
                width="100%"
                flexDirection="row"
              >
                {images.map((image, index) => (
                  <Box
                    key={index}
                    position="relative"
                    width="100px"
                    height="100px"
                    margin="10px"
                  >
                    <Image
                      src={URL.createObjectURL(image)}
                      alt={`Image ${index}`}
                      objectFit="cover"
                      width="100%"
                      height="100%"
                      borderRadius="10%"
                    />

                    <IconButton
                      icon={<CloseIcon />}
                      aria-label="Remove image"
                      position="absolute"
                      size="5px"
                      bg="brand.500"
                      top="1"
                      right="1"
                      onClick={() => handleRemoveImage(index)}
                    />
                  </Box>
                ))}
                <Box
                  key="empty-image-box"
                  position="relative"
                  width="100px"
                  height="100px"
                  borderRadius="10%"
                  margin="10px"
                  border="1px"
                  borderColor="gray.400"
                  // display="flex"
                  justifyContent="center"
                  alignItems="center"
                  cursor="pointer"
                  onClick={() =>
                    document.getElementById("image-upload")?.click()
                  }
                >
                  <IconButton
                    icon={<AddIcon />}
                    aria-label="Add image"
                    position="absolute"
                    bg="white"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                  />
                </Box>
              </Box>
              <input
                type="file"
                id="image-upload"
                multiple
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </VStack>

            <GradientRedButton
              onClick={function (event) {
                uploadPostImage();
                Save();
              }}
              textColor="white"
              marginBottom="2%"
              marginTop="2%"
            >
              ذخیره پست
            </GradientRedButton>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default NewPostLayout;
