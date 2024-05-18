import { useParams } from "react-router-dom";
import PostApi from "../../api/services/post-service";

function HandlePostRequest() {
  const { postId } = useParams();
  // const postId = 2

  if (postId === undefined) {
    console.error("postId is undefined");
    return Promise.reject(new Error("postId is undefined"));
  }
  const postIdBigInt = postId ? BigInt(postId) : BigInt(0);

  return new Promise((resolve, reject) => {
    PostApi.getPost(
      { postID: postIdBigInt },
      { meta: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }
    )
      .then((res) => {
        resolve(res.response.post);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export default HandlePostRequest;
