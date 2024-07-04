import { Grid, GridItem } from "@chakra-ui/react";
import SearchResult from "./SearchResult";
import SearchFilters from "./searchFilter/SearchFilters";
import searchClient from "../../api/services/search-service";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UserSearchResult from "./UserSearchResult";
import {
  PostPreviewExplore,
  ProfilePreviewExplore,
} from "../../api/clients/search";

interface SearchInfo {
  text: string;
  tab: number;
  page: number;
}

export interface SearchPostInfo {
  categoryID: number[];
  includeIng: string[];
  excludeIng: string[];
}

const SearchLayout = () => {
  const { searchTextParam } = useParams();
  const [searchInfo, setSearchInfo] = useState<SearchInfo>({
    text: "",
    tab: 1,
    page: 0,
  });
  const [searchPostInfo, setSearchPostInfo] = useState<SearchPostInfo>({
    categoryID: [],
    includeIng: [],
    excludeIng: [],
  });
  const [userSearchResponse, setUserSearchResponse] = useState<
    ProfilePreviewExplore[]
  >([]);
  const [postSearchResponse, setPostSearchResponse] = useState<
    PostPreviewExplore[]
  >([]);

  useEffect(() => {
    if (searchTextParam)
      setSearchInfo({ ...searchInfo, text: searchTextParam });
  }, [searchTextParam]);

  useEffect(() => {
    if (searchInfo.text.trim() != "") applySearch();
  }, [searchInfo]);

  const applySearch = () => {
    if (searchInfo.tab == 0) applySearchUser();
    else if (searchInfo.tab == 1) applySearchPost();
  };

  const applySearchUser = () => {
    setUserSearchResponse([]);
    searchClient
      .searchUsername(
        { username: searchInfo.text },
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        console.log("searchUsername response: ", res);
        setUserSearchResponse(res.response.profilePreview);
      })
      .catch((err) => {
        console.log("searchUsername error: ", err);
      });
  };

  const applySearchPost = () => {
    setPostSearchResponse([]);
    searchClient
      .mixedSearch(
        {
          name: searchInfo.text,
          categoryID: searchPostInfo.categoryID,
          includeIng: searchPostInfo.includeIng,
          excludeIng: searchPostInfo.excludeIng,
        },
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        console.log("mixedSearch response: ", res);
        setPostSearchResponse(res.response.posts);
      })
      .catch((err) => {
        console.log("mixedSearch error: ", err);
      });
  };

  return (
    <Grid
      w="100%"
      h="100vh"
      templateAreas={`"main right"`}
      templateColumns={"1fr 400px"}
      marginTop="70px"
    >
      <GridItem area="main">
        {searchInfo.tab == 0 ? (
          <UserSearchResult profiles={userSearchResponse} />
        ) : (
          <SearchResult posts={postSearchResponse} />
        )}
      </GridItem>
      <GridItem area="right" bg="gray.100">
        <SearchFilters
          searchType={searchInfo.tab}
          onSearchTypeChange={(type) =>
            setSearchInfo({ ...searchInfo, tab: type })
          }
          searchPostInfo={searchPostInfo}
          onSearchPostInfoChange={(info) => setSearchPostInfo(info)}
          onFilterApply={applySearch}
        />
      </GridItem>
    </Grid>
  );
};

export default SearchLayout;
