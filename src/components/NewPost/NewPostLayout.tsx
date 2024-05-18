import { HStack, VStack, Box, Heading, Input, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Image, IconButton } from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import Slideshow from "./PostPreview";
import CaptionBox from "./CaptionBox";
import UserInfo from "./UserInfo";
import Image2 from "../../assets/dark-night-car-vehicle.jpg";
import Image3 from "../../assets/prev.jpg";
import STagBox from "./SimpleTagBox";
import { GradientRedButton } from "../Buttons";
import SelectIngredients from "../selectIngredients/SelectIngredients";

const NewPostLayout = () => {
  const [images, setImages] = useState<File[]>([]);
  const [caption, setCaption] = useState<string>("");
  const [Title, setTitle] = useState<string>("");
  const [ingredients, setIngredients] = useState<{ [key: string]: string }>({});
  console.debug(ingredients);
  const [numimages, setnumimg] = useState<number>(0);
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState<string>("");
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setnumimg(numimages + 1);
    setImages([...images, ...files]);
  };
  const handleSave = () => {
    if (Title != "" && caption != "" && numimages != 0) {
      setIsSaved(true);
      setError("!پست با موفقیت ذخیره شد");
    } else if (Title == "") setError("!عنوان نمی تواند خالی باشد");
    else if (caption == "") setError("!توضیحات نمی تواند خالی باشد");
    else if (numimages == 0) setError("!حداقل یک تصویر لازم است");
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
  useEffect(() => {
    if (isSaved) {
      // postClient
      //   .setPost(
      //     {
      //       post: {
      //         title: Title,
      //         description: caption,
      //         numImages: numimages,
      //         ingredients: ingredients,
      //       },
      //     },
      //     { meta: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }
      //   )
      //   .then((res) => {
      //     console.log("setPost response: ", res);
      //   })
      //   .catch((err) => {
      //     console.log("setPost error: ", err);
      //   });
    }
  }, [isSaved]);
  return (
    <HStack bg="gray.200" width="100%" height="1000px" spacing="15px">
      <Box
        bg="white"
        height="90%"
        width="50%"
        border="1px solid #ccc"
        marginLeft="50px"
        borderRadius="15px"
        backgroundImage={Image3}
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Slideshow images={images} />
      </Box>
      <Box
        bg="white"
        height="90%"
        width="50%"
        border="1px solid #ccc"
        marginRight="50px"
        borderRadius="15px"
        backgroundImage={Image2}
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <VStack width="100%">
          <Box marginTop="10px" width="100%" borderBottom="1px solid #ccc">
            <Heading
              textAlign="right"
              paddingRight="5%"
              paddingBottom="10px"
              color="white"
            >
              پست جدید
            </Heading>
          </Box>
          <UserInfo />
          <Input
            placeholder="عنوان پست"
            textAlign="right"
            width="60%"
            textColor="white"
            _placeholder={{ textColor: "white" }}
            value={Title}
            onChange={(event) => setTitle(event.target.value)}
          ></Input>
          <CaptionBox caption={caption} setCaption={setCaption} />
          <SelectIngredients onChange={handleIngredientsChange} />
          <STagBox />
          <VStack spacing={4} align="flex-start">
            <Box display="flex" flexWrap="wrap">
              {images.map((image, index) => (
                <Box
                  key={index}
                  position="relative"
                  width="100px"
                  height="100px"
                  margin="2"
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
                margin="2"
                borderRadius="10%"
                border="1px"
                borderColor="gray.400"
                // display="flex"
                justifyContent="center"
                alignItems="center"
                cursor="pointer"
                onClick={() => document.getElementById("image-upload")?.click()}
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
            onClick={handleSave}
            marginTop="20px"
            textColor="white"
          >
            ذخیره پست
          </GradientRedButton>
          <Text textColor="white">{error}</Text>
        </VStack>
      </Box>
    </HStack>
  );
};

export default NewPostLayout;
