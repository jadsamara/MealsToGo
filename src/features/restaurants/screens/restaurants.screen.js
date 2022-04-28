import { Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar, List } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurants-info-card.components";
import styled from "styled-components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchRestaurantsContainer = styled(View)`
  margin: 20px;
`;

const ListRestaurantsContainer = styled(View)`
  background-color: blue;
  flex: 1;
  padding: 16px;
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchRestaurantsContainer>
      <Searchbar placeholder="Restaurants" />
    </SearchRestaurantsContainer>
    <ListRestaurantsContainer>
      <RestaurantInfoCard />
    </ListRestaurantsContainer>
  </SafeArea>
);
