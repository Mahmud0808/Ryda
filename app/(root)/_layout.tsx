import { Stack } from "expo-router";
import "react-native-reanimated";

const Layout = () => {
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: "#F6F8FA" } }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
