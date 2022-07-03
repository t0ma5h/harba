/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import { ColorSchemeName, Pressable, View } from "react-native";
import { SvgUri } from "react-native-svg";
import ModalScreen from "../screens/ModalScreen";
import HomeScreen from "../screens/HomeScreen";
import InfoScreen from "../screens/InfoScreen";
import { RootStackParamList, RootTabParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { DefaultTheme as ThemeType, useTheme } from "styled-components/native";
import { Dimensions } from "react-native";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const themeConf = useTheme();
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={
        colorScheme === "dark"
          ? {
              ...DarkTheme,
              colors: {
                ...DefaultTheme.colors,
                background: themeConf.palette.background,
              },
            }
          : {
              ...DefaultTheme,
              colors: {
                ...DefaultTheme.colors,
                background: themeConf.palette.background,
              },
            }
      }
    >
      <RootNavigator theme={themeConf} />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();
const HEADER_HEIGHT = Dimensions.get("screen").height * 0.1;
function RootNavigator({ theme }: NavigatorProps) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" options={{ headerShown: false }}>
        {(props) => <BottomTabNavigator {...props} theme={theme} />}
      </Stack.Screen>
      <Stack.Group
        screenOptions={{
          presentation: "formSheet",
          headerStyle: {
            backgroundColor: theme.palette.primary,
          },
          title: "Please Provide Additional Details",
          headerShadowVisible: false,
          headerTitleStyle: {
            color: theme.palette.secondary,
          },
        }}
      >
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

const headerTitle = () => (
  <SvgUri
    height={HEADER_HEIGHT}
    width={HEADER_HEIGHT}
    uri={"https://harba.co/wp-content/uploads/2016/04/harba-solid.svg"}
  />
);

type NavigatorProps = {
  theme: ThemeType;
};
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator({ theme }: NavigatorProps) {
  ///OPTIONS FOR TAB BAR
  const tabBarOptions = {
    tabBarActiveTintColor: theme.palette.tint,
    tabBarInactiveTintColor: theme.palette.tabIconDefault,
    tabBarStyle: {
      backgroundColor: theme.palette.primary,
    },
    tabBarShowLabel: false,
  };

  ///HEADER STYLING
  const headerOptions = {
    headerStyle: {
      backgroundColor: theme.palette.primary,
      height: HEADER_HEIGHT,
    },
    headerTitle: headerTitle,
  };

  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ ...tabBarOptions }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={() => ({
          tabBarIcon: ({ color }) => <TabBarIcon name="anchor" color={color} />,
          ...headerOptions,
        })}
      />
      <BottomTab.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="info" color={color} />,
          ...headerOptions,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
