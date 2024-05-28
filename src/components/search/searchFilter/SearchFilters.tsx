import { Box, HStack, VStack } from "@chakra-ui/react";
import SearchType from "./SearchType";
import SearchFilterDivider from "./SearchFilterDivider";
import SearchCategory from "./SearchCategory";
import SearchFilterIngredientSelect from "./SearchFilterIngredientSelect";

const SearchFilters = () => {
  return (
    <VStack padding="20px">
      <SearchType />
      <SearchFilterDivider />
      <SearchCategory />
      <SearchFilterDivider />
      <SearchFilterIngredientSelect onListChange={() => {}}>
        شامل مواد اولیه
      </SearchFilterIngredientSelect>
      <SearchFilterDivider />
      <SearchFilterIngredientSelect onListChange={() => {}}>
        فاقد مواد اولیه
      </SearchFilterIngredientSelect>
      <SearchFilterDivider />
    </VStack>
  );
};

export default SearchFilters;
