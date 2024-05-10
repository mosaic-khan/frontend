import React, { useState } from "react";
import { Box, VStack, Image, IconButton } from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import Slideshow from "./PostPreview";

const AddImages: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);

    setImages([...images, ...files]);
  };

  const handleRemoveImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
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
      <Slideshow images={images} />
    </VStack>
  );
};

export default AddImages;
