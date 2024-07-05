import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://back.khanmedia.ir:8080/KhanAPI.MediaAPI/",
});

const useUploadImage = () => {
  const uploadImagePromise = (imageFile: FormData) =>
    axiosClient.post("upload-post-image", imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });

  return uploadImagePromise;
};

export default useUploadImage;
