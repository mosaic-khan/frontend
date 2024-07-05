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
  Spinner,
} from "@chakra-ui/react";
import { ChangeEventHandler, useEffect, useState } from "react";
import { Img } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import CaptionBox from "./CaptionBox";
import postclient from "../../api/services/post-service";
import { GradientRedButton } from "../Buttons";
import SelectIngredients from "../selectIngredients/SelectIngredients";
import UserNavigation from "../Navigation/ProfileNavigation";
import PostPreview from "./PostPreview";
import userClient from "../../api/services/user-service";
import { FaCameraRetro } from "react-icons/fa";
import useUploadImage from "../../api/services/media-service-post";
import { useNavigate } from "react-router-dom";
import { Profile } from "../../api/clients/user";

const NewPostLayout = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<Blob[]>([]);
  const [caption, setCaption] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [ingredients, setIngredients] = useState<{ [key: string]: string }>({});
  const [error, setError] = useState<string>("");
  const [imageError, setImageError] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const Toast = useToast();
  const [states, setStates] = useState<number>(0);
  const [userProfile, setUserProfile] = useState<Profile | undefined>();
  const uploadImagePromise = useUploadImage();

  const handleImageUpload: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = function () {
        if (reader.result) {
          const img = new Image();
          img.src = reader.result.toString();

          img.onload = function () {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");

            if (ctx) {
              ctx.drawImage(img, 0, 0);

              canvas.toBlob((blob) => {
                if (blob) {
                  setImages([...images, blob]);
                }
              });
            }
          };
        }
      };
    }
    if (images.length == 4) {
      setImageError("NumImageLim");
      console.log("error");
    } else {
      setImageError("");
    }
  };

  const uploadPostImage = async (images: Blob[], token: string) => {
    console.log("images here:", images);
    let uploadSuccess = true;
    for (let i = 0; i < images.length; i++) {
      const formData = new FormData();
      formData.append("uploadFile", images[i]);
      formData.append("postID", token);

      try {
        await uploadImagePromise(formData);
        setStates(states + 1);
        console.log("Upload post image response for image", i + 1);
      } catch (err) {
        console.log("Error on upload post image", i + 1, "error:", err);
        uploadSuccess = false;
      }
    }
    return uploadSuccess;
  };

  const Save = async () => {
    if (title === "") {
      setError("Title");
      return;
    } else if (caption === "") {
      setError("Caption");
      return;
    } else if (images.length === 0) {
      setError("NumImages");
      return;
    }

    setIsUploading(true);

    try {
      const token = `Bearer ${localStorage.getItem("jwt")}`;

      const res = await postclient.setPost(
        {
          numImages: images.length,
          description: caption,
          ingredients: ingredients,
          title: title,
          categoryID: 1,
        },
        {
          meta: {
            Authorization: token,
          },
        }
      );

      console.log("----------setPost response is:", res.response.id);

      const uploadSuccess = await uploadPostImage(
        images,
        res.response.id.toString()
      );

      setIsUploading(false);

      if (uploadSuccess) {
        Toast({
          description: <Text dir="rtl">پست با موفقیت ذخیره شد.</Text>,
          status: "success",
          isClosable: true,
          duration: 3000,
          position: "bottom-left",
        });
        navigate("/myprofile");
      } else {
        setError("error");
        Toast({
          description: (
            <Text dir="rtl">خطا در بارگذاری تصاویر! پست ذخیره نشد.</Text>
          ),
          status: "error",
          isClosable: true,
          duration: 3000,
          position: "bottom-left",
        });
      }
    } catch (err) {
      setIsUploading(false);
      setError("error");
      console.log("error:", err);

      Toast({
        description: (
          <Text dir="rtl">خطا در ذخیره پست! لطفا دوباره امتحان کنید.</Text>
        ),
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    }
  };

  const handleRemoveImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImageError("");
    setImages(newImages);
  };
  useEffect(() => {
    userClient
      .getProfile(
        {},
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        console.log("getProfile response: ", res.response.profile);
        if (res.response.profile) {
          setUserProfile(res.response.profile);
        }
      })
      .catch((err) => {
        console.log("getProfile error: ", err);
      });
  }, []);

  useEffect(() => {
    if (error === "Title") {
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

  return (
    <Flex h="100vh" bgColor="gray.100" pos="relative">
      {/* navbar */}
      <UserNavigation userProfile={userProfile} isTrue={true} />
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
          width="65%"
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
                <SelectIngredients setIngredients={setIngredients} />
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
                borderRadius="15px"
              >
                <Text
                  w="95%"
                  pt={1}
                  pr={5}
                  color="gray.700"
                  fontSize={16}
                  dir="rtl"
                  textAlign="start"
                >
                  اضافه کردن عکس :
                </Text>
                <HStack w="100%" h="85%" px={5} pb={5} spacing={5} dir="rtl">
                  {images.map((image, index) => (
                    <Box
                      key={index}
                      position="relative"
                      width="75px"
                      height="75px"
                    >
                      <Img
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
                  <Box borderRadius="lg" border="2px dashed gray">
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
                  </Box>
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
              onClick={Save}
              pos="absolute"
              left={-10}
              bottom={-10}
              textColor="white"
              children="ذخیره پست"
            />
          </Box>
        </Box>
      </HStack>
      {isUploading && (
        <Center
          pos="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.5)"
        >
          <Spinner size="xl" color="white" />
        </Center>
      )}
    </Flex>
  );
};

export default NewPostLayout;
