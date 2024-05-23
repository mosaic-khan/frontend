import { useEffect, useState } from "react";
import { GradientRedButton } from "../Buttons";
import userClient from "../../api/services/user-service";

interface Props {
  isFollowed: boolean;
  profileId: bigint;
}

const FollowButton = ({ isFollowed, profileId }: Props) => {
  const [followed, setFollowed] = useState<boolean>(false);

  useEffect(() => {
    setFollowed(isFollowed);
  }, [isFollowed]);

  const handleClick = () => {
    if (followed) unfollow();
    else follow();
  };

  const follow = () => {
    userClient
      .follow(
        {
          profileID: profileId,
        },
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        console.log("follow response: ", res);
        setFollowed(true);
      })
      .catch((err) => {
        console.log("follow error: ", err);
      });
  };

  const unfollow = () => {
    userClient
      .unfollow(
        {
          profileID: profileId,
        },
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        console.log("follow response: ", res);
        setFollowed(false);
      })
      .catch((err) => {
        console.log("follow error: ", err);
      });
  };

  return (
    <GradientRedButton
      width="90px"
      height="30px"
      color="white"
      fontSize="sm"
      borderRadius="20px"
      marginLeft="20px"
      onClick={handleClick}
    >
      {followed ? "حذف" : "دنبال کردن"}
    </GradientRedButton>
  );
};

export default FollowButton;
