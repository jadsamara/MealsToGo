import { Searchbar } from "react-native-paper";
import { useContext, useState } from "react";
import styled from "styled-components";

import { LocationContext } from "../../../services/restaurants/location/location.context";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchRestaurantsContainer>
      <Searchbar
        placeholder="Restaurants near"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={setSearchKeyword}
      />
    </SearchRestaurantsContainer>
  );
};

const SearchRestaurantsContainer = styled.View`
  margin: ${(props) => props.theme.space[3]};
`;
