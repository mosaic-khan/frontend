import ReactCrop, {
  Crop,
  PixelCrop,
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop";
import { Box, Button } from "@chakra-ui/react";
import { FC, SetStateAction,   useEffect, useRef, useState } from "react";
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
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [aspect, setAspect] = useState<number | undefined>();
  const imgRef = useRef<HTMLImageElement>(null);

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  };

  const handleCropChange = (_: any, percentCrop: SetStateAction<Crop>) =>
    setCrop(percentCrop);
  const handleCropComplete = (c: SetStateAction<PixelCrop | undefined>) =>
    setCompletedCrop(c);

  useEffect(() => {
    if (completedCrop?.width && completedCrop?.height && imgRef.current) {
      const croppedImg = createCroppedImage(imgRef.current, completedCrop);
      onCropDone(croppedImg);
    }
  }, [completedCrop, onCropDone]);

  const createCroppedImage = (image: HTMLImageElement, crop: PixelCrop) => {
    const canvas = document.createElement("canvas");
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("No 2d context");
    }

    const pixelCrop = convertToPixelCrop(crop, image.width, image.height);

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    return canvas.toDataURL("image/jpeg");
  };

  return (
    <Box>
      <ReactCrop
        crop={crop}
        onChange={handleCropChange}
        onComplete={() => handleCropComplete(completedCrop)}
        aspect={ASPECT_RATIO}
        circularCrop
        ruleOfThirds
      >
        <img ref={imgRef} alt="Crop me" src={image} onLoad={onImageLoad} />
      </ReactCrop>
      <Button
        position="absolute"
        bottom="10px"
        left="50%"
        transform="translateX(-50%)"
        onClick={() => {
          if (crop && imgRef.current) {
            onCropDone(
              convertToPixelCrop(
                crop,
                imgRef.current.width,
                imgRef.current.height
              )
            );
          }
        }}
      >
        Crop
      </Button>
    </Box>
  );
};
