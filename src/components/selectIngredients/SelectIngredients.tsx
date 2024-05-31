import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  useBoolean,
  Text,
  HStack,
  Spacer,
  PopoverTrigger,
  Popover,
  PopoverContent,
  Center,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import IngredientsSuggestion from "./IngredientsSuggestion";

interface RowData {
  column1: string;
  column2: string;
}

const SelectIngredients = () => {
  const [nameError, setNameError] = useBoolean(false);
  const [amountError, setAmountError] = useBoolean(false);
  const [isEditingName, setIsEditingName] = useBoolean(false);
  const [showPopover, setShowPopover] = useBoolean(false);
  const nameRef = useRef(null);
  const Toast = useToast();
  const handleChangeName = (e: any) => {
    setNewRow({ ...newRow, column1: e.target.value });
  };
  const handleChangeAmount = (e: any) => {
    setNewRow({ ...newRow, column2: e.target.value });
  };
  useEffect(() => {
    if (isEditingName) {
      setShowPopover.on();
    } else {
      setShowPopover.off();
    }
  }, [isEditingName]);

  const [data, setData] = useState<RowData[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newRow, setNewRow] = useState<RowData>({ column1: "", column2: "" });

  const handleAddRow = () => {
    if (!newRow.column1) {
      setAmountError.off();
      setNameError.on();
      Toast({
        description: <Text dir="rtl">مواد نمیتواند خالی باشد.</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } else if (!newRow.column2) {
      setNameError.off();
      setAmountError.on();

      Toast({
        description: <Text dir="rtl">مقدار نمیتواند خالی باشد.</Text>,
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom-left",
      });
    } else if (newRow.column1.length >= 30) {
      setAmountError.off();
      setNameError.on();
      Toast({
        description: (
          <Text dir="rtl">طول متن مواد باید کمتر از 30 حرف باشد.</Text>
        ),
        status: "error",
        duration: 2500,
        position: "bottom-left",
      });
    } else if (newRow.column2.length >= 30) {
      setNameError.off();
      setAmountError.on();
      Toast({
        description: (
          <Text dir="rtl">طول متن مقدار باید کمتر از 30 حرف باشد.</Text>
        ),
        status: "error",
        duration: 2500,
        position: "bottom-left",
      });
    } else if (newRow.column1 && newRow.column2) {
      //check if the newRow is not inside data list before adding to data rows
      Toast({
        description: <Text dir="rtl">مقادیر با موفقیت ثبت شد.</Text>,
        status: "success",
        duration: 2500,
        position: "bottom-left",
      });
      setData([...data, newRow]);
      setNewRow({ column1: "", column2: "" });
      onClose();
    }
  };
  return (
    <Box w="40%" h="100%" borderTopRadius="15px" bg="white">
      <Box
        w="100%"
        h="20%"
        bg="gray.200"
        borderTopRadius="15px"
        borderBottomColor="white"
        borderBottom="3px solid white"
        alignContent="center"
        pos="relative"
      >
        <HStack h="100%" w="100%" p={2}>
          <Text dir="rtl" fontSize="16" fontWeight="bold">
            مواد اولیه:
          </Text>
          <Spacer />
          <Button
            dir="rtl"
            fontSize="16"
            fontWeight="bold"
            onClick={onOpen}
            overflow="hidden"
            bgGradient="linear(to-r, brand.300, brand.500)"
            transition=" 0.3s ease"
            _hover={{
              fontWeight: "bold",
              boxShadow: "lg",
              transform: "translateY(-3px)",
            }}
            _active={{
              bgGradient: "linear(to-r, brand.300, brand.600)",
              fontWeight: "bold",
              boxShadow: "lg",
              transform: "translateY(1px)",
            }}
          >
            اضافه کردن
          </Button>
        </HStack>
      </Box>

      <Box
        w="100%"
        h="80%"
        borderBottomRadius="15px"
        pos="relative"
        overflowY="auto"
        bg="gray.100"
      >
        <Table variant="simple" h="100%" w="100%" pos="relative">
          <Thead
            pos="relative"
            bg="gray.300"
            style={{ width: "100%", height: "25%" }}
          >
            <Tr pos="relative" style={{ width: "100%", height: "100%" }}>
              <Center w="100%" h="100%" pos="relative">
                <HStack w="100%" h="100%" pos="relative" gap={0}>
                  <Th
                    style={{ width: "50%", height: "100%" }}
                    fontSize="16px"
                    textAlign="center"
                    borderLeft="1px solid white"
                    borderBottom="2px solid white"
                    pos="relative"
                  >
                    <Center h="100%" w="100%" pos="relative">
                      مواد
                    </Center>
                  </Th>
                  <Th
                    style={{ width: "50%", height: "100%" }}
                    fontSize="16px"
                    textAlign="center"
                    borderRight="1px solid white"
                    borderBottom="2px solid white"
                    pos="relative"
                  >
                    <Center h="100%" w="100%" pos="relative">
                      مقدار
                    </Center>
                  </Th>
                </HStack>
              </Center>
            </Tr>
          </Thead>
          <Tbody
            style={{ width: "100%", height: "75%" }}
            pos="relative"
            bg="gray.200"
          >
            {data.map((row, index) => (
              <Tr key={index} h="30%" w="100%" pos="relative">
                <HStack h="100%" w="100%" pos="relative" gap={0} spacing={0}>
                  <Td
                    style={{
                      width: "50%",
                      height: "100%",
                    }}
                    borderLeft="1px solid white"
                    borderBottom="2px solid white"
                    pos="relative"
                  >
                    <Center h="100%" w="100%" pos="relative">
                      <Text
                        fontSize="12px"
                        fontWeight="bold"
                        textAlign="center"
                      >
                        {row.column1}
                      </Text>
                    </Center>
                  </Td>
                  <Td
                    style={{ width: "50%", height: "100%" }}
                    borderRight="1px solid white"
                    borderBottom="2px solid white"
                  >
                    <Center h="100%" w="100%" pos="relative">
                      <Text
                        fontSize="12px"
                        fontWeight="bold"
                        textAlign="center"
                        alignItems="center"
                      >
                        {row.column2}
                      </Text>
                    </Center>
                  </Td>
                </HStack>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent dir="rtl">
          <ModalHeader>اضافه کردن مواد اولیه</ModalHeader>

          <ModalBody>
            <FormControl id="column1" p={2}>
              <FormLabel>مواد</FormLabel>

              <Popover
                initialFocusRef={nameRef}
                isOpen={showPopover}
                returnFocusOnClose={false}
                placement="bottom-end"
              >
                <PopoverTrigger>
                  <Input
                    onBlur={() => {
                      setIsEditingName.off();
                    }}
                    onFocus={() => {
                      setIsEditingName.on();
                    }}
                    value={newRow.column1}
                    ref={nameRef}
                    onChange={handleChangeName}
                    {...(nameError ? { borderColor: "brand.500" } : {})}
                  />
                </PopoverTrigger>

                <PopoverContent w="200px">
                  <IngredientsSuggestion
                    inputText={newRow.column1}
                    onSelect={(ingredient) => {
                      setNewRow({ ...newRow, column1: ingredient });
                    }}
                  />
                </PopoverContent>
              </Popover>
            </FormControl>
            <FormControl id="column2" p={2}>
              <FormLabel>مقدار</FormLabel>
              <Input
                value={newRow.column2}
                // onChange={(e) =>

                // }
                onChange={handleChangeAmount}
                {...(amountError ? { borderColor: "brand.500" } : {})}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              bg="brand.200"
              _hover={{ bg: "brand.100" }}
              mr={3}
              onClick={handleAddRow}
            >
              ذخیره
            </Button>
            <Button variant="ghost" onClick={onClose}>
              بستن
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default SelectIngredients;
