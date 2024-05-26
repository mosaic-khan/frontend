import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SearchFilterHeaders = ({ children }: Props) => {
  return (
    <Text as="b" w="100%" align="right" color="gray.600">
      {children}
    </Text>
  );
};

export default SearchFilterHeaders;
