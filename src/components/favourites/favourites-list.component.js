import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Text } from "react-native";

export const FavouritesList = ({ favourites, goToDetail }) => {
  if (!favourites.length)
    return <NoFavourites>No Favourites Added!</NoFavourites>;

  return (
    <FavouritesWrapper>
      <FavouritesTitle>Favourites</FavouritesTitle>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <FavouritesContainer key={key}>
              <TouchableOpacity
                onPress={() => goToDetail("RestaurantDetail", { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </FavouritesContainer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

const FavouritesContainer = styled.View`
  margin-right: 16px;
`;

const FavouritesTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
`;

const NoFavourites = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  margin-left: 16px;
`;
