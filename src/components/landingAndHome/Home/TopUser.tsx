import { Box, HStack, Heading, VStack, Image } from "@chakra-ui/react";
import Image2 from "../../../assets/chef_kitchen.jpg";
import UserDisplayItem from "../../userList/UserDisplayItem";
import { useEffect, useState } from "react";
import userClient from "../../../api/services/user-service";
import { TopChef } from "../../../api/clients/user";

const TopUser = () => {
  const [topChefs, setTopChefs] = useState<TopChef[]>();

  useEffect(() => {
    userClient
      .getTopChefs(
        {},
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        console.log("getTopChefs response: ", res);
        setTopChefs(res.response.topChefs);
        if (topChefs && topChefs.length > 4) setTopChefs(topChefs.slice(0, 4));
      })
      .catch((err) => {
        console.log("getTopChefs error: ", err);
      });
  }, []);

  return (
    <Box h="600px" w="100%">
      <HStack h="100%" justifyContent="space-between">
        <Image src={Image2} />
        <VStack h="100%" w="600px" spacing="10px" marginLeft="-700px">
          <Box h="60px" w="500px" marginTop={"60px"}>
            <Heading textAlign="right" fontSize="32">
              آشپزهای برتر هفته
            </Heading>
          </Box>
          <VStack h="380px" justifyContent="space-between" spacing="0px">
            {topChefs && topChefs.length > 0
              ? topChefs.map((chef) => (
                  <UserDisplayItem
                    profilePreview={{
                      isFollowed: BigInt(0),
                      name: chef.firstName + chef.lastName,
                      profileID: BigInt(0),
                      username: chef.username,
                      profilePicUrl: chef.profilePicUrl,
                    }}
                    w="500px"
                    avatarDefaultSize={80}
                    avatarHoverSize={110}
                    bg="white"
                    borderWidth="2px"
                    borderColor="brand.400"
                  />
                ))
              : [1, 2, 3, 4].map(() => (
                  <UserDisplayItem
                    profilePreview={{
                      isFollowed: BigInt(0),
                      name: "نام",
                      profileID: BigInt(0),
                      username: "نام کاربری",
                      profilePicUrl: "",
                    }}
                    w="500px"
                    avatarDefaultSize={80}
                    avatarHoverSize={110}
                    bg="white"
                    borderWidth="2px"
                    borderColor="brand.400"
                  />
                ))}
          </VStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default TopUser;
