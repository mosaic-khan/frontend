import {
  HStack,
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
  useBoolean,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import IngredientsTable from "./IngredientsTable";

const SelectIngredients = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [isEditingName, setIsEditingName] = useBoolean(false);

  const nameRef = useRef(null);

  const handleChangeName = (event: any) => {
    setName(event.target.value);
  };

  const handleChangeAmount = (event: any) => {
    setAmount(event.target.value);
  };

  return (
    <VStack>
      <Text>SelectIngredients</Text>

      <Select variant="outline" placeholder="Outline" />
      <HStack>
        <Input
          value={amount}
          onChange={handleChangeAmount}
          size="lg"
          dir="rtl"
        />
        <Popover
          initialFocusRef={nameRef}
          isOpen={isEditingName}
          returnFocusOnClose={false}
        >
          <PopoverTrigger>
            <Input
              ref={nameRef}
              value={name}
              onFocus={() => {
                setIsEditingName.on();
              }}
              onBlur={() => {
                setIsEditingName.off();
              }}
              onChange={handleChangeName}
              size="lg"
              dir="rtl"
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverBody>
              Are you sure you want to have that milkshake?
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>
      <IngredientsTable />
    </VStack>
  );
};

export default SelectIngredients;
