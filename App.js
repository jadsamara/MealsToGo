import { ThemeProvider } from "styled-components";
import AppNavigator from "./src/infrastructure/navigation/app.navigator";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/restaurants/location/location.context";
import { StatusBar } from "expo-status-bar";
import {
  useFonts as useLato,
  useFonts as useOswald,
  Oswald_400Regular,
  Lato_400Regular,
} from "@expo-google-fonts/dev";

import { theme } from "./src/infrastructure/theme";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <AppNavigator />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
