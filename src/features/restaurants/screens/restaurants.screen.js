import { FlatList, View } from "react-native";
import { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurants-info-card.components";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.components";
import { SafeArea } from "../../../utils/safe-area.components";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <SearchRestaurantsContainer>
        <Searchbar placeholder="Restaurants" />
      </SearchRestaurantsContainer>
      <ListRestaurantsContainer>
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </ListRestaurantsContainer>
    </SafeArea>
  );
};

const SearchRestaurantsContainer = styled(View)`
  margin: ${(props) => props.theme.space[3]};
`;

const ListRestaurantsContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 17,
  },
})``;
