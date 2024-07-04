import PostApi from "../../api/services/post-service";

const HandlePostRequest = (postId : bigint) => {
 
  return new Promise((resolve, reject) => {
    PostApi.getPost(
      { postID: postId },
      { meta: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }
    )
      .then((res) => {
        resolve(res.response.post);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export default HandlePostRequest;
