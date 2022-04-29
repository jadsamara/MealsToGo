import { FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurants-info-card.components";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.components";
import { SafeArea } from "../../../utils/safe-area.components";

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchRestaurantsContainer>
      <Searchbar placeholder="Restaurants" />
    </SearchRestaurantsContainer>
    <ListRestaurantsContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 8 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </ListRestaurantsContainer>
  </SafeArea>
);

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
