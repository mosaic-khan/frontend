import { Input } from "@chakra-ui/react";
import { forwardRef, ChangeEventHandler } from "react";

export interface ImageUploadProps {
  onImageSelected: (selectedImg: string) => void;
  ref: React.LegacyRef<HTMLInputElement> | undefined;
}
export const ImageUpload = forwardRef<HTMLInputElement, ImageUploadProps>(
  ({ onImageSelected }, ref) => {
    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      if (event.target.files && event.target.files.length > 0) {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function (e) {
          console.debug(e);
          if (reader.result) onImageSelected(reader.result as string);
        };
      }
    };

    return (
      <>
        {" "}
        <Input
          type="file"
          accept="image/*"
          ref={ref}
          onChange={handleOnChange}
          style={{ display: "none" }}
        />
      </>
    );
  }
);
ImageUpload.displayName = "ImageUpload";
