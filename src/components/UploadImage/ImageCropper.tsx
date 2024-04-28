import ReactCrop, {
  Crop,
  PixelCrop,
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop";
import { Box, Button } from "@chakra-ui/react";
import { FC, SetStateAction, useEffect, useRef, useState } from "react";
import "react-image-crop/dist/ReactCrop.css";
const MIN_DIMENSION = 150;
const ASPECT_RATIO = 1;
function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 100,
        height: 100,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}
export interface ImageCropperProps {
  /** The image data URL to be cropped. */
  image: string /** Function to handle a successfully cropped image. */;
  onCropDone: (croppedImage: any) => void;
}

export const ImageCropper: FC<ImageCropperProps> = ({ image, onCropDone }) => {
  const [crop, setCrop] = useState<Crop>({
    x: 25,
    y: 25,
    width: 70,
    height: 70,
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

    const pixelCrop = convertToPixelCrop(
      crop,
      image.naturalWidth,
      image.naturalHeight
    );

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

    return canvas.toDataURL("image/jpeg");
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
