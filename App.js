import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { AppNavigator } from "./src/infrastructure/navigation/app.navigator";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import {
  useFonts as useLato,
  useFonts as useOswald,
  Oswald_400Regular,
  Lato_400Regular,
} from "@expo-google-fonts/dev";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { theme } from "./src/components/theme";

const firebaseConfig = {
  apiKey: "AIzaSyCyj5OFIkCpM3BUO_P-x9593LiRRcNZaPc",
  authDomain: "mealstogo-28d48.firebaseapp.com",
  projectId: "mealstogo-28d48",
  storageBucket: "mealstogo-28d48.appspot.com",
  messagingSenderId: "205405311500",
  appId: "1:205405311500:web:d45e1d0e12c8040e75d429",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      signInWithEmailAndPassword(auth, "<email>", "<password>")
      .then((user) => {
        console.log(user);
        setIsAuthenticated(true);
      })
      .catch((e) => {
        console.error(e);
      });
    }, 5000);
  }, []);
}

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
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <AppNavigator />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
    </>
  );
}
