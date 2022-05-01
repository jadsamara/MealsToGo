import { FlatList, View, Text } from "react-native";
import { useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurants-info-card.components";
import styled from "styled-components";
import { SafeArea } from "../../../utils/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <Search />
      <ListRestaurantsContainer>
        {isLoading ? (
          <>
            <LoadingScreenText>Restaurant Cards are loading!</LoadingScreenText>
            <LoadingScreenCircle animating={true} color="black" size={40} />
          </>
        ) : (
          <>
            <RestaurantList
              data={restaurants}
              renderItem={({ item }) => {
                return <RestaurantCard restaurant={item} />;
              }}
              keyExtractor={(item) => item.name}
            />
          </>
        )}
      </ListRestaurantsContainer>
    </SafeArea>
  );
};

const ListRestaurantsContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 17,
  },
})``;

const RestaurantCard = styled(RestaurantInfoCard)`
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const LoadingScreenCircle = styled(ActivityIndicator)`
  flex: 1
  margin-left: ${(props) => props.theme.space[2]};
`;

const LoadingScreenText = styled(Text)`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.title};
  margin-top: ${(props) => props.theme.space[2]};
  font-family: ${(props) => props.theme.fonts.heading};
`;
