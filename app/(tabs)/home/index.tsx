import { FlatList, StyleSheet } from "react-native";

import Activity from "@/components/home/Activity";
import { ThemedView } from "@/components/ThemedView";
import WeeklyStats from "@/components/WeeklyStats";

function HomeScreen() {
  return (
    <ThemedView style={styles.container} lightColor="#f0f0f0">
      <WeeklyStats />
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={({ item }) => <Activity />}
        keyExtractor={(item) => item.toString()}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
