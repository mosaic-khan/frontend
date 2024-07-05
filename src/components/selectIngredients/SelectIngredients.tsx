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
  PopoverTrigger,
  Popover,
  PopoverContent,
  Center,
  useToast,
} from "@chakra-ui/react";
import { SetStateAction, useEffect, useRef, useState } from "react";
import IngredientsSuggestion from "./IngredientsSuggestion";
import { MinusIcon } from "@chakra-ui/icons";
import { GradientRedButton } from "../Buttons";
import { PlusIcon } from "lucide-react";

interface Props {
  setIngredients: (value: SetStateAction<{ [key: string]: string }>) => void;
}
interface RowData {
  column1: string;
  column2: string;
}

const SelectIngredients = ({ setIngredients }: Props) => {
  const [nameError, setNameError] = useBoolean(false);
  const [amountError, setAmountError] = useBoolean(false);
  const [isEditingName, setIsEditingName] = useBoolean(false);
  const [showPopover, setShowPopover] = useBoolean(false);
  const [display, setDisplay] = useState("");
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
      if (data.some((row) => row.column1 === newRow.column1)) {
        Toast({
          description: <Text dir="rtl">مواد تکراری است.</Text>,
          status: "error",
          duration: 2500,
          position: "bottom-left",
        });
      } else {
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
    }
  };
  const handleRemoveRow = (index: number) => {
    setData(data.filter((_, i) => i !== index));
  };

  const transformDataToDictionary = () => {
    const dictionary: { [key: string]: string } = {};
    data.forEach((row) => {
      dictionary[row.column1] = row.column2;
    });
    return dictionary;
  };

  useEffect(() => {
    setIngredients(transformDataToDictionary());
  }, [data, setIngredients]);

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
        <HStack h="100%" w="100%" px={5} justifyContent="space-between">
          <Text dir="rtl" fontSize="16" fontWeight="bold">
            مواد اولیه:
          </Text>
          < GradientRedButton
            dir="rtl"
            fontSize="16"
            fontWeight="bold"
            boxSize="25px"
            borderRadius="full"
            onClick={() => {
              setDisplay("flex");
              onOpen();
            }}
            overflow="hidden"
          >
            <PlusIcon color="white"/>
          </GradientRedButton>
        </HStack>
      </Box>
      <Box
        w="100%"
        h="80%"
        bg="gray.200"
        borderBottomRadius="15px"
        pos="relative"
      >
        <Box
          overflowY="auto"
          w="100%"
          h="100%"
          borderBottomRadius="15px"
          bg="gray.200"
          pos="relative"
        >
          <Table
            variant="simple"
            h="100%"
            w="100%"
            pos="relative"
            bg="gray.100"
          >
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
            <Tbody style={{ width: "100%", height: "75%" }} pos="relative">
              {data.map((row, index) => (
                <Tr
                  key={index}
                  h="30%"
                  w="100%"
                  pos="relative"
                  display={display}
                >
                  <HStack h="80%" w="100%" pos="relative" gap={0} spacing={0}>
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
                      <MinusIcon
                        color="red"
                        h="20%"
                        w="10%"
                        style={{
                          position: "absolute",
                          borderRadius: 0,
                          top: 10,

                          left: 0,
                        }}
                        cursor="pointer"
                        onClick={() => handleRemoveRow(index)}
                      />
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
                bgGradient="radial-gradient(ellipse at top, #DD3768, #D70040), radial-gradient(ellipse at bottom, #D70040, #DD3768)"

                _hover={{
                  transition: "0.7s easeInOut",
                  transform: "translateY(-1px)",
                }}
                _active={{
                  bgGradient:
                   "radial-gradient(ellipse at top, #DD3768, #D70040), radial-gradient(ellipse at bottom, #D70040, #DD3768)",
                  borderColor: "white",
                }}
                mr={3}
                onClick={handleAddRow}
                colorScheme="white"
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
    </Box>
  );
};
export default SelectIngredients;
