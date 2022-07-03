import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./ui/hooks/colors/useColorScheme";
import Navigation from "./navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components/native";
import { getTheme } from "./ui/theme/theme";
import { createNotifications } from "react-native-notificated";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const { NotificationsProvider } = createNotifications({
    isNotch: true,
  });
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();
  const theme = getTheme(colorScheme);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <NotificationsProvider />
            <StatusBar />
          </SafeAreaProvider>
        </QueryClientProvider>
      </ThemeProvider>
    );
  }
}
