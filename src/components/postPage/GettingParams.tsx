import { useParams } from "react-router-dom";
// to be used
function GettingParams() {
    const { profileId, postId } = useParams();

    if (postId === undefined) {
      console.error("postId is undefined");
      return;
    }
    const postIdBigInt = postId ? BigInt(postId) : BigInt(0);

    if (profileId === undefined) {
        console.error("postId is undefined");
        return;
      }
    const profileIdBigInt = postId ? BigInt(postId) : BigInt(0);

    return {profileIdBigInt, postIdBigInt};
}

export default GettingParams;