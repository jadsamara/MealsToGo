import { Searchbar } from "react-native-paper";
import { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { LocationContext } from "../../../services/location/location.context";

export const Search = ({ isFavouriteToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchRestaurantsContainer>
      <Searchbar
        icon={isFavouriteToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
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
