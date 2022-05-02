import { SafeArea } from "../../../utils/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurants-info-card.components";
import { List } from "react-native-paper";
import { useState } from "react";
import styled from "styled-components";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);

  const breakfastPress = () => setBreakfastExpanded(!breakfastExpanded);
  const lunchPress = () => setLunchExpanded(!lunchExpanded);
  const drinksPress = () => setDrinksExpanded(!drinksExpanded);
  const dinnerPress = () => setDinnerExpanded(!dinnerExpanded);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <Breakfast
        title="Breakfast"
        left={(props) => <List.Icon {...props} icon="bread-slice" />}
        expanded={breakfastExpanded}
        onPress={breakfastPress}
      >
        <List.Item title="Donut" />
        <List.Item title="Muffin" />
      </Breakfast>
      <Lunch
        title="Lunch"
        left={(props) => <List.Icon {...props} icon="hamburger" />}
        expanded={lunchExpanded}
        onPress={lunchPress}
      >
        <List.Item title="Burger" />
        <List.Item title="Fries" />
        <List.Item title="Pizza" />
      </Lunch>
      <Drinks
        title="Drinks"
        left={(props) => <List.Icon {...props} icon="cup" />}
        expanded={drinksExpanded}
        onPress={drinksPress}
      >
        <List.Item title="Sprite" />
        <List.Item title="Nestea" />
      </Drinks>
      <Dinner
        title="Dinner"
        left={(props) => <List.Icon {...props} icon="food-variant" />}
        expanded={dinnerExpanded}
        onPress={dinnerPress}
      >
        <List.Item title="Steak" />
        <List.Item title="Fish" />
      </Dinner>
    </SafeArea>
  );
};

const Breakfast = styled(List.Accordion)``;
const Lunch = styled(List.Accordion)``;
const Drinks = styled(List.Accordion)``;
const Dinner = styled(List.Accordion)``;
