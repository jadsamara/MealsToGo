import { Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurants-info-card.components";
import styled from "styled-components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;

  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchRestaurantsContainer = styled(View)`
  margin: ${(props) => props.theme.space[3]};
`;

const ListRestaurantsContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
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
