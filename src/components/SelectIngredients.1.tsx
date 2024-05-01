import {
  HStack,
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

export const SelectIngredients = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const nameRef = useRef();

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
        <Popover>
          <PopoverTrigger>
            <TextInput
              ref={nameRef}
              value={name}
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
    </VStack>
  );
};
