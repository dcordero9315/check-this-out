import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}>
    <Stack.Screen name="index" options={{ title: 'Recommendations' }} />
    <Stack.Screen name="NewRecommendation" options={{ title: 'New Recommendation' }} />      
  </Stack>;
}
