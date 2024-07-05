import {
  Modal,
  ModalContent,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import UserList from "./UserList";
import { useEffect, useState } from "react";
import userClient from "../../api/services/user-service";
import { ProfilePreview } from "../../api/clients/user";

interface Props {
  profileId: bigint;
  isOpen: boolean;
  onClose: () => void;
  startIndex?: number;
  followersCnt?: BigInt;
}

const FollowerFollowingModal = ({
  startIndex,
  isOpen,
  onClose,
  profileId,
  followersCnt,
}: Props) => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [followerList, setFollowerList] = useState<ProfilePreview[]>([]);
  const [followingList, setFollowingList] = useState<ProfilePreview[]>([]);

  useEffect(() => {
    if (profileId) {
      console.log("get follow list for id: ", profileId);
      userClient
        .getFollowerList(
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
          console.log("getFollowerList response: ", res);
          setFollowerList(res.response.profilePreview);
        })
        .catch((err) => {
          console.log("getFollowerList error: ", err);
        });
      userClient
        .getFollowingList(
          { profileID: profileId },
          {
            meta: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        )
        .then((res) => {
          console.log("getFollowingList response: ", res);
          setFollowingList(res.response.profilePreview);
        })
        .catch((err) => {
          console.log("getFollowingList error: ", err);
        });
    }
  }, [profileId]);

  useEffect(() => {
    setTabIndex(startIndex ? startIndex : 0);
  }, [startIndex]);

  useEffect(() => {
    if (profileId) {
      console.log("get follow list for id: ", profileId);
      userClient
        .getFollowerList(
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
          console.log("getFollowerList response: ", res);
          setFollowerList(res.response.profilePreview);
        })
        .catch((err) => {
          console.log("getFollowerList error: ", err);
        });
      userClient
        .getFollowingList(
          { profileID: profileId },
          {
            meta: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        )
        .then((res) => {
          console.log("getFollowingList response: ", res);
          setFollowingList(res.response.profilePreview);
        })
        .catch((err) => {
          console.log("getFollowingList error: ", err);
        });
    }
  }, [followersCnt]);

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent margin="5vh">
        <Tabs
          isFitted
          variant="soft-rounded"
          marginTop="10px"
          index={tabIndex}
          onChange={handleTabsChange}
        >
          <TabList>
            <Tab
              _selected={{
                color: "white",
                bgGradient: "linear(to-r,brand.300,brand.500)",
              }}
              marginRight="10px"
              marginLeft="20px"
            >
              دنبال شونده ها
            </Tab>
            <Tab
              _selected={{
                color: "white",
                bgGradient: "linear(to-r,brand.300,brand.500)",
              }}
              marginRight="20px"
              marginLeft="10px"
            >
              دنبال کننده ها
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <UserList profileList={followingList} />
            </TabPanel>
            <TabPanel>
              <UserList profileList={followerList} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ModalContent>
    </Modal>
  );
};

export default FollowerFollowingModal;
