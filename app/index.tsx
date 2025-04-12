import ListFilters from "@/components/ui/ListFilters";
import { useRouter } from "expo-router";
import { View } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { PaperProvider, FAB, Card } from "react-native-paper";

export default function Index() {
  const router = useRouter();

  return (
    <PaperProvider>
      <ListFilters />
      <GestureHandlerRootView style={{ flex: 2 }}>
        <ScrollView
          style={{
            flex: 2,
            // justifyContent: "flex-start",
            // alignItems: "center",
          }}
        >
          <Card>
            <Card.Title
              title="Recommendation 1"
              subtitle="Recommended by: User"
            />
            <Card.Title
              title="Recommendation 2"
              subtitle="Recommended by: User"
            />
            <Card.Title
              title="Recommendation 3"
              subtitle="Recommended by: User"
            />
            <Card.Title
              title="Recommendation 4"
              subtitle="Recommended by: User"
            />
            <Card.Title
              title="Recommendation 5"
              subtitle="Recommended by: User"
            />
            <Card.Title
              title="Recommendation 6"
              subtitle="Recommended by: User"
            />
            <Card.Title
              title="Recommendation 7"
              subtitle="Recommended by: User"
            />
            <Card.Title
              title="Recommendation 8"
              subtitle="Recommended by: User"
            />
            <Card.Title
              title="Recommendation 9"
              subtitle="Recommended by: User"
            />
            <Card.Title
              title="Recommendation 10"
              subtitle="Recommended by: User"
            />
            <Card.Title
              title="Recommendation 11"
              subtitle="Recommended by: User"
            />
            <Card.Title
              title="Recommendation 12"
              subtitle="Recommended by: User"
            />
          </Card>
        </ScrollView>
      </GestureHandlerRootView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          margin: 36,
        }}
      >
        <FAB
          icon="plus"
          onPress={() => router.navigate("./newRecommendation")}
        />
      </View>
    </PaperProvider>
  );
}
