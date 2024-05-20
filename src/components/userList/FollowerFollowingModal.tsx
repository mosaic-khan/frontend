import {
  Box,
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import UserDisplayItem from "./UserDisplayItem";
import UserList from "./UserList";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const FollowerFollowingModal = ({ isOpen, onOpen, onClose }: Props) => {
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent margin="5vh">
          <Tabs isFitted variant="soft-rounded" marginTop="10px">
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
                <UserList />
              </TabPanel>
              <TabPanel>
                <UserList />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FollowerFollowingModal;
