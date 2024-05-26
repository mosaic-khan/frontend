import {
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useBoolean,
} from "@chakra-ui/react";
import IngredientsSuggestion from "../../selectIngredients/IngredientsSuggestion";
import { useEffect, useRef, useState } from "react";

interface Props {
  onSelect: (value: string) => void;
}

const IngredientsInput = ({ onSelect }: Props) => {
  const [name, setName] = useState("");
  const nameRef = useRef(null);
  const [isEditingName, setIsEditingName] = useBoolean(false);
  const [showPopover, setShowPopover] = useBoolean(false);

  const handleChangeName = (event: any) => {
    setName(event.target.value);
    if (event.target.value.trim() != "") {
      setShowPopover.on();
    }
  };

  useEffect(() => {
    if (!isEditingName) {
      const timeout = setTimeout(() => {
        setShowPopover.off();
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [isEditingName]);

  const handleSelect = (value: string) => {
    onSelect(value);
    setName("");
    setShowPopover.off();
  };

  return (
    <Popover
      initialFocusRef={nameRef}
      isOpen={showPopover}
      returnFocusOnClose={false}
      placement="bottom-end"
    >
      <PopoverTrigger>
        <Input
          w="100%"
          marginTop="2%"
          marginRight="5%"
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
          bg="white"
          onKeyDown={(e) => {
            if (e.key == "Enter") handleSelect(name);
          }}
        />
      </PopoverTrigger>
      <PopoverContent w="400px">
        <IngredientsSuggestion
          inputText={name}
          onSelect={(ingredient) => {
            handleSelect(ingredient);
          }}
        />
      </PopoverContent>
    </Popover>
  );
};

export default IngredientsInput;
