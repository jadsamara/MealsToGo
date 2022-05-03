import { useContext } from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../services/favourites/favourites.context";

export const FavouriteIcon = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavouriteButton
      restaurant={restaurant}
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={30}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  z-index: 9;
  right: 20px;
`;
