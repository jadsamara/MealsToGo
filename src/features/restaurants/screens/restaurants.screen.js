import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurants-info-card.components";
import styled from "styled-components";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Search } from "../components/search.component";

import { FavouritesList } from "../../../components/favourites/favourites-list.component";

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeArea>
      <ListRestaurantsContainer>
        {isLoading ? (
          <>
            <LoadingScreenText>Restaurant Cards are loading!</LoadingScreenText>
            <LoadingScreenCircle animating={true} color="black" size={40} />
          </>
        ) : (
          <>
            <Search
              isFavouriteToggled={isToggled}
              onFavouritesToggle={() => setIsToggled(!isToggled)}
            />
            {isToggled && (
              <FavouritesList
                favourites={favourites}
                goToDetail={navigation.navigate("RestaurantDetail")}
              />
            )}
            <RestaurantList
              data={restaurants}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("RestaurantDetail", {
                        restaurant: item,
                      })
                    }
                  >
                    <RestaurantCard restaurant={item} />
                  </TouchableOpacity>
                );
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
