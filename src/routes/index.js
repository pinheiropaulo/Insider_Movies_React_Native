import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Movies from "../pages/Movies";

import StackRoutes from "./stackRoutes";

const { Navigator, Screen } = createDrawerNavigator();

export default function Routes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#0F1016",
          paddingTop: 20,
        },
        drawerActiveBackgroundColor: "#E72F49",
        drawerActiveTintColor: "#FFF",
        drawerInactiveTintColor: "#FFF",
      }}
    >
      <Screen
        name="HomeDrawer"
        component={StackRoutes}
        options={{
          title: "Home",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open" : "movie-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Movies"
        component={Movies}
        options={{
          title: "Meus Filmes",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "archive" : "archive-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  );
}
