import { ScrollView } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import WeeklyStats from "@/components/WeeklyStats";

function HomeScreen() {
  return (
    <ScrollView>
      <WeeklyStats />
      <ThemedText>Home view</ThemedText>
    </ScrollView>
  );
}

export default HomeScreen;
