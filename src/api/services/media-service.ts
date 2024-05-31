import axios from "axios";

interface Props {
  path: "upload-profile-image" | "upload-post-image";
}

const axiosClient = axios.create({
  baseURL: "http://185.80.196.246:8080/KhanAPI.MediaAPI/",
});

const useUploadImage = ({ path }: Props) => {
  const uploadImagePromise = (imageFile: FormData) =>
    axiosClient.post(path, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });

  return uploadImagePromise;
};

export default useUploadImage;
