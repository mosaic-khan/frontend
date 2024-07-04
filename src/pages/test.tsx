// import { Box, Button } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { ImageUpload } from "../components/UploadImage/ImageUpload";
// import { ImageCropper } from "../components/UploadImage/ImageCropper";
// import { Area } from "react-easy-crop";

// export const Test = () => {
//   const [image, setImage] = useState("");
//   const [currentPage, setCurrentPage] = useState("choose-img");
//   const [imgAfterCrop, setImgAfterCrop] = useState("");
//   //Call back function when image is selected
//   const onImageSelected = (selectedImg) => {
//     setImage(selectedImg);
//     setCurrentPage("crop-img");
//   };
//   //Call back function when cropping is done
//   const onCropDone = (imgCroppedArea: Area) => {
//     const canvasEle = document.createElement("canvas");
//     canvasEle.width = imgCroppedArea.width;
//     canvasEle.height = imgCroppedArea.height;
//     const context = canvasEle.getContext("2d");
//     let imageObj1 = new Image();
//     imageObj1.src = image;
//     imageObj1.onload = function () {
//       context?.drawImage(
//         imageObj1,
//         imgCroppedArea.x,
//         imgCroppedArea.y,
//         imgCroppedArea.width,
//         imgCroppedArea.height,
//         0,
//         0,
//         imgCroppedArea.width,
//         imgCroppedArea.height
//       );
//       const dataURL = canvasEle.toDataURL("image/jpeg");

//       setImgAfterCrop(dataURL);
//       setCurrentPage("image-cropped");
//     };
//   };
//   //Call back function when cropping is canceled
//   const onCropCancel = () => {
//     setCurrentPage("choose-img");
//     setImage("");
//   };
//   return (
//     <Box position="relative" w="100%" h="100vh" bgColor="#ffd2c8">
//       <Box>
//         {currentPage === "choose-img" ? (
//           <ImageUpload onImageSelected={onImageSelected} />
//         ) : currentPage === "crop-img" ? (
//           <ImageCropper
//             image={image}
//             onCropDone={onCropDone}
//             onCropCancel={onCropCancel}
//           />
//         ) : (
//           <Box></Box>
//         )}
//       </Box>
//     </Box>
//   );
// };

{
  /* <Input
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
          ></Input> */
}
