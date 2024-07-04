import { Button, VStack } from "@chakra-ui/react";
import SearchType from "./SearchType";
import SearchFilterDivider from "./SearchFilterDivider";
import SearchCategory from "./SearchCategory";
import SearchFilterIngredientSelect from "./SearchFilterIngredientSelect";
import { SearchPostInfo } from "../SearchLayout";

interface Props {
  searchType: number;
  onSearchTypeChange: (int: number) => void;
  searchPostInfo: SearchPostInfo;
  onSearchPostInfoChange: (int: SearchPostInfo) => void;
  onFilterApply: () => void;
}

const SearchFilters = ({
  searchType,
  onSearchTypeChange,
  searchPostInfo,
  onSearchPostInfoChange,
  onFilterApply,
}: Props) => {
  if (searchType == 1)
    return (
      <VStack padding="20px">
        <SearchType type={searchType} onTypeChange={onSearchTypeChange} />
        <SearchFilterDivider />
        <SearchCategory
          onChange={(id) => {
            onSearchPostInfoChange({ ...searchPostInfo, categoryID: [id] });
          }}
        />
        <SearchFilterDivider />
        <SearchFilterIngredientSelect
          onListChange={(list) => {
            onSearchPostInfoChange({ ...searchPostInfo, includeIng: list });
          }}
        >
          شامل مواد اولیه
        </SearchFilterIngredientSelect>
        <SearchFilterDivider />
        <SearchFilterIngredientSelect
          onListChange={(list) => {
            onSearchPostInfoChange({ ...searchPostInfo, excludeIng: list });
          }}
        >
          فاقد مواد اولیه
        </SearchFilterIngredientSelect>
        <SearchFilterDivider />
        <Button
          borderRadius="100px"
          bgGradient="linear(to-r, brand.200, brand.400)"
          textColor="white"
          marginTop="10px"
          _hover={{
            boxShadow: "lg",
            transform: "scale(1.1)",
          }}
          _focus={{
            boxShadow: "lg",
            transform: "scale(1.1)",
          }}
          _active={{
            bgGradient: "linear(to-r, brand.300, brand.500)",
            boxShadow: "lg",
            transform: "scale(1.1) translateY(4px)",
          }}
          onClick={onFilterApply}
        >
          اعمال فیلتر ها
        </Button>
      </VStack>
    );
  else
    return (
      <VStack padding="20px">
        <SearchType type={searchType} onTypeChange={onSearchTypeChange} />
        <SearchFilterDivider />
      </VStack>
    );
};

export default SearchFilters;
