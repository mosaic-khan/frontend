import ReactCrop, { Crop, PixelCrop } from "react-image-crop";
import { Box, Button } from "@chakra-ui/react";
import { FC, SetStateAction, useRef, useState } from "react";
import "react-image-crop/dist/ReactCrop.css";
const ASPECT_RATIO = 1;

export interface ImageCropperProps {
  image: string;
  onCropDone: (croppedImage: HTMLCanvasElement) => void;
}

export const ImageCropper: FC<ImageCropperProps> = ({ image, onCropDone }) => {
  const [crop, setCrop] = useState<Crop>({
    x: 25,
    y: 25,
    width: 100,
    height: 100,
    unit: "px",
  });
  const imgRef = useRef<HTMLImageElement>(null);

  const handleCropChange = (_: any, percentCrop: SetStateAction<Crop>) => {
    setCrop(percentCrop);
  };

  const handleCropImage = () => {
    if (crop && imgRef.current) {
      const croppedImg = createCroppedImage(imgRef.current, {
        unit: "px",
        x: crop.x,
        y: crop.y,
        width: crop.width,
        height: crop.height,
      });
      onCropDone(croppedImg);
    }
  };

  const createCroppedImage = (image: HTMLImageElement, crop: PixelCrop) => {
    const canvas = document.createElement("canvas");
    const w = (crop.width * image.naturalWidth) / 100;
    const h = (crop.height * image.naturalHeight) / 100;
    canvas.width = w;
    canvas.height = h;

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("No 2d context");
    }

    ctx.drawImage(
      image,
      (crop.x * image.naturalWidth) / 100,
      (crop.y * image.naturalHeight) / 100,
      w,
      h,
      0,
      0,
      w,
      h
    );

    return canvas;
  };

  return (
    <Box>
      <ReactCrop
        crop={crop}
        onChange={handleCropChange}
        onComplete={() => {}}
        aspect={ASPECT_RATIO}
        circularCrop
        ruleOfThirds
      >
        <img ref={imgRef} alt="Crop me" src={image} />
      </ReactCrop>
      <Button
        position="absolute"
        bottom="10px"
        left="50%"
        transform="translateX(-50%)"
        onClick={() => {
          handleCropImage();
        }}
      >
        Crop
      </Button>
    </Box>
  );
};
