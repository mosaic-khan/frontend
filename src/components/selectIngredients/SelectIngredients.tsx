import {
  HStack,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  VStack,
  useBoolean,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import IngredientsTable from "./IngredientsTable";
import { RedButton } from "../Buttons";
import IngredientsSuggestion from "./IngredientsSuggestion";

interface Props {
  onChange: (ingredients: string[][]) => void;
}

const SelectIngredients = ({ onChange }: Props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [nameError, setNameError] = useBoolean(false);
  const [amountError, setAmountError] = useBoolean(false);
  const [isEditingName, setIsEditingName] = useBoolean(false);
  const [showPopover, setShowPopover] = useBoolean(false);
  const [ingredients, setIngredients] = useState<string[][]>([]);
  const nameRef = useRef(null);

  const handleChangeName = (event: any) => {
    setName(event.target.value);
    setNameError.off();
  };

  const handleChangeAmount = (event: any) => {
    setAmount(event.target.value);
    setAmountError.off();
  };

  const onSubmit = () => {
    if (name.trim() === "") {
      setNameError.on();
      return;
    }
    if (amount.trim() === "") {
      setAmountError.on();
      return;
    }
    setIngredients([...ingredients, [name, amount]]);
    setName("");
    setAmount("");
  };

  useEffect(() => {
    if (isEditingName) {
      setShowPopover.on();
    } else {
      const timeout = setTimeout(() => {
        setShowPopover.off();
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [isEditingName]);

  useEffect(() => {
    onChange(ingredients);
  }, [ingredients]);

  return (
    <VStack textColor="white">
      <HStack dir="rtl">
        <Popover
          initialFocusRef={nameRef}
          isOpen={showPopover}
          returnFocusOnClose={false}
          placement="bottom-end"
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
              {...(nameError ? { borderColor: "brand.500" } : {})}
              size="lg"
              dir="rtl"
            />
          </PopoverTrigger>
          <PopoverContent w="400px">
            <IngredientsSuggestion
              inputText={name}
              onSelect={(ingredient) => {
                setName(ingredient);
                setShowPopover.off();
              }}
            />
          </PopoverContent>
        </Popover>
        <Input
          value={amount}
          onChange={handleChangeAmount}
          {...(amountError ? { borderColor: "brand.500" } : {})}
          size="lg"
          dir="rtl"
        />
      </HStack>
      <RedButton children={"ثبت مواد اولیه"} onClick={onSubmit} />
      <IngredientsTable ingredients={ingredients} />
    </VStack>
  );
};

export default SelectIngredients;
