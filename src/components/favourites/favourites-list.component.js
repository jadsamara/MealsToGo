import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";

export const FavouritesList = ({ favourites, goToDetail }) => {
  return (
    <FavouritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Temp key={key}>
              <TouchableOpacity
                onPress={() => goToDetail("RestaurantDetail", { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Temp>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

const Temp = styled.View`
  margin-right: 16px;
`;
