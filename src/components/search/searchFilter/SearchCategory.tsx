import { Select, VStack } from "@chakra-ui/react";
import SearchFilterHeaders from "./SearchFilterHeaders";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import searchClient from "../../../api/services/search-service";
import { Categories } from "../../../api/clients/search";
import { SearchPostInfo } from "../SearchLayout";

interface Props {
  searchPostInfo: SearchPostInfo;
  onChange: (id: number) => void;
}

const SearchCategory = ({ searchPostInfo, onChange }: Props) => {
  const [categories, setCategories] = useState<Categories[]>([]);

  useEffect(() => {
    searchClient
      .getAllCategories(
        {},
        {
          meta: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        console.log("searchUsername response: ", res);
        setCategories(res.response.categories);
      })
      .catch((err) => {
        console.log("searchUsername error: ", err);
      });
  }, []);

  return (
    <VStack w="100%">
      <SearchFilterHeaders>دسته بندی</SearchFilterHeaders>
      <Select
        value={
          searchPostInfo.categoryID.length > 0
            ? searchPostInfo.categoryID[0]
            : ""
        }
        variant="filled"
        placeholder="انتخاب دسته بندی"
        dir="rtl"
        bgPosition="left"
        icon={<ChevronDownIcon marginRight="640px" />}
        focusBorderColor="gray.300"
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {categories.map((c) =>
          c.level == 0 ? (
            <option value={c.id} key={c.id}>
              {c.name}
            </option>
          ) : (
            <option value={c.id} key={c.id}>
              {"...   "}
              {c.name}
            </option>
          )
        )}
      </Select>
    </VStack>
  );
};

export default SearchCategory;
