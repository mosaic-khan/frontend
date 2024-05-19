import { Box, HStack, Text, Image } from "@chakra-ui/react";
import Image1 from "../../assets/Userpic3.png";
import { useEffect, useState } from "react";
import userClient from "../../api/services/user-service";

const UserInfo = () => {
  const [lname, setlname] = useState<string>("");
  const [fname, setfname] = useState<string>("");
  useEffect(() => {
    userClient
      .getUserInfo(
        {},
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        console.log("getProfile response: ", res.response.user);
        if (res.response.user) {
          setfname(res.response.user.fName);
          setlname(res.response.user.lName);
        }
      })
      .catch((err) => {
        console.log("getProfile error: ", err);
      });
  }, []);
  return (
    <Box
      width="90%"
      height="50px"
      border="none"
      margin="10px"
      borderRadius="5px"
    >
      <HStack justifyContent="space-between">
        <Box></Box>
        <Box>
          <HStack justifyContent="space-between">
            <Text fontWeight="bold">
              {fname} {lname}
            </Text>
            <Image
              borderRadius="100%"
              width="40px"
              marginTop="3px"
              marginRight="10px"
              src={Image1}
            />
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default UserInfo;
