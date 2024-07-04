import { Avatar, Button, HStack } from "@chakra-ui/react";
import userClient from "../../api/services/user-service";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderProfileIcon = () => {
  const [url, setUrl] = useState<string>();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/myprofile");
  };
  useEffect(() => {
    userClient
      .getProfile(
        {},
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        console.log("getProfile response: ", res);
        if (res.response.profile)
          setUrl(
            "http://back.khanmedia.ir:9290/" +
              res.response.profile.profilePicUrl
          );
      })
      .catch((err) => {
        console.log("getProfile error: ", err);
      });
  }, []);
  return (
    <HStack>
      <Avatar size="md" src={url ? url : "https://bit.ly/broken-link"} />
      <Button
        marginLeft="-15px"
        color="gray.700"
        fontWeight="bold"
        onClick={handleClick}
        variant="text"
      >
        {localStorage.getItem("username")}
      </Button>
    </HStack>
  );
};

export default HeaderProfileIcon;
