import { Grid, GridItem } from "@chakra-ui/react";
import SearchResult from "./SearchResult";
import SearchFilters from "./SearchFilters";

const SearchLayout = () => {
  return (
    <Grid
      w="100%"
      h="100vh"
      templateAreas={`"main right"`}
      templateColumns={"1fr 400px"}
      marginTop="70px"
    >
      <GridItem area="main">
        <SearchResult />
      </GridItem>
      <GridItem area="right" bg="gray.100">
        <SearchFilters />
      </GridItem>
    </Grid>
  );
};

export default SearchLayout;
