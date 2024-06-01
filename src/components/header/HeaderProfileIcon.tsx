import { Avatar, HStack, Text } from "@chakra-ui/react";
import userClient from "../../api/services/user-service";
import { useEffect, useState } from "react";

const HeaderProfileIcon = () => {
  const [url, setUrl] = useState<string>();
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
      <Text color="gray.700" fontWeight="bold">
        {localStorage.getItem("username")}
      </Text>
    </HStack>
  );
};

export default HeaderProfileIcon;
