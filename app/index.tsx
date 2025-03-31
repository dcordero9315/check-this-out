import { Button, Text, View } from "react-native";

export default function Index() {
  return (
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
      <Button title="New Recommendation" onPress={() => {}} />
    </View>
  );
}
