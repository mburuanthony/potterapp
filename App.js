import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import SearchScreen from "./screens/SearchScreen";
import { AlertProvider, usealert } from "./context/alertctx";
import { AppAlert } from "./components/AppAlert";

const Stack = createNativeStackNavigator();

function App() {
  const { isvisible } = usealert();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "fade",
          animationTypeForReplace: "push",
        }}
      >
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="detail" component={DetailScreen} />
        <Stack.Screen name="search" component={SearchScreen} />
      </Stack.Navigator>
      {isvisible && <AppAlert />}
      <StatusBar style="auto" animated={true} backgroundColor="transparent" />
    </NavigationContainer>
  );
}

export default function AppProvider() {
  return (
    <AlertProvider>
      <App />
    </AlertProvider>
  );
}
