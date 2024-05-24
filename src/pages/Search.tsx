import { VStack } from "@chakra-ui/react";
import Header from "../components/header/Header";
import SearchLayout from "../components/search/SearchLayout";

const Search = () => {
  return (
    <VStack>
      <Header />
      <SearchLayout />
    </VStack>
  );
};

export default Search;
