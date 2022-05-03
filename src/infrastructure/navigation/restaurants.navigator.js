import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";
const RestaurantStack = createStackNavigator();

const createScreenOptions = () => {
  return {
    headerShown: false,
    ...TransitionPresets.ModalSlideFromBottomIOS,
    gestureResponseDistance: 150,
  };
};

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={createScreenOptions}>
      <RestaurantStack.Screen
        name="RestaurantsPage"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
