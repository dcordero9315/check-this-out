import { Link, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";

export default function Index() {
  const router = useRouter();

  return (
    <PaperProvider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>TODO: Top Nav Tabs for different recommendation media types</Text>
        <Text>TODO: Empty state when there are no recommendations</Text>
        <Text>TODO: Floating Action Button for new recommendation</Text>
        <Button title="New Recommendation" onPress={() => router.navigate("./newRecommendation")}/>

        <Button title="Test" onPress={() => router.navigate("/test")}/>
      </View>
    </PaperProvider>
  );
}
