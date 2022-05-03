import { Searchbar } from "react-native-paper";
import { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { LocationContext } from "../../../services/restaurants/location/location.context";

export const MapSearch = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

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
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 48px;
  width: 100%;
`;
