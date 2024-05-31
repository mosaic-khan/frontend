import { Select, VStack } from "@chakra-ui/react";
import SearchFilterHeaders from "./SearchFilterHeaders";
import { ChevronDownIcon } from "@chakra-ui/icons";

const SearchCategory = () => {
  return (
    <VStack w="100%">
      <SearchFilterHeaders>دسته بندی</SearchFilterHeaders>
      <Select
        variant="filled"
        placeholder="انتخاب دسته بندی"
        dir="rtl"
        bgPosition="left"
        icon={<ChevronDownIcon marginRight="640px" />}
        focusBorderColor="gray.300"
      >
        <option value="option1">دسته بندی یک</option>
        <option value="option2">دسته بندی دو</option>
        <option value="option3">دسته بندی سه</option>
      </Select>
    </VStack>
  );
};

export default SearchCategory;
