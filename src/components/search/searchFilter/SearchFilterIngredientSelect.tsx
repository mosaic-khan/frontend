import { VStack, Wrap, WrapItem } from "@chakra-ui/react";
import SearchFilterHeaders from "./SearchFilterHeaders";
import { ReactNode, useEffect, useState } from "react";
import IngredientsInput from "./IngredientsInput";
import IngredientBadge from "./IngredientBadge";

interface Props {
  children: ReactNode;
  onListChange: (values: string[]) => void;
}

const SearchFilterIngredientSelect = ({ children, onListChange }: Props) => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleSelectIngredient = (value: string) => {
    setIngredients([...ingredients, value]);
  };

  const handleDeleteIngredient = (value: string) => {
    setIngredients(ingredients.filter((x) => x != value));
  };

  useEffect(() => {
    onListChange(ingredients);
  }, [ingredients]);

  return (
    <VStack w="100%">
      <SearchFilterHeaders>{children}</SearchFilterHeaders>
      <IngredientsInput onSelect={handleSelectIngredient} />
      <Wrap spacing="5px" dir="rtl" justify="space-evenly">
        {ingredients.map((value) => (
          <WrapItem>
            <IngredientBadge text={value} onDelete={handleDeleteIngredient} />
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  );
};

export default SearchFilterIngredientSelect;
