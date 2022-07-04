import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./ui/hooks/colors/useColorScheme";
import Navigation from "./navigation";
import { QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components/native";
import { getTheme } from "./ui/theme/theme";
import { createNotifications } from "react-native-notificated";
import { en, registerTranslation } from "react-native-paper-dates";
import { Provider as PaperProvider } from "react-native-paper";
import { getPaperTheme } from "./ui/theme/paperTheme";
import { configureReactQuery } from "./hooks/configureReactQuery";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const { NotificationsProvider } = createNotifications({
    isNotch: true,
  });
  const colorScheme = useColorScheme();

  //React query setup
  const queryClient = configureReactQuery();

  //Theming
  const theme = getTheme(colorScheme);
  const paperTheme = getPaperTheme(colorScheme);

  //locale registration for date picker
  registerTranslation("en", en);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <PaperProvider theme={paperTheme}>
          <QueryClientProvider client={queryClient}>
            <SafeAreaProvider>
              <Navigation colorScheme={colorScheme} />
              <NotificationsProvider />
              <StatusBar />
            </SafeAreaProvider>
          </QueryClientProvider>
        </PaperProvider>
      </ThemeProvider>
    );
  }
}
