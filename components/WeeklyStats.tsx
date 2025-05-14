import { StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

const WeeklyStats = () => (
  <ThemedView style={styles.container}>
    <ThemedText style={styles.title}>Weekly Stats</ThemedText>
    <ThemedView style={styles.stats}>
      <ThemedView style={styles.item}>
        <ThemedText style={styles.label}>Activities</ThemedText>
        <ThemedText>1</ThemedText>
      </ThemedView>
      <ThemedView style={styles.item}>
        <ThemedText style={styles.label}>Time</ThemedText>
        <ThemedText>1h 30m</ThemedText>
      </ThemedView>
      <ThemedView style={styles.item}>
        <ThemedText style={styles.label}>Mileage</ThemedText>
        <ThemedText>10.5km</ThemedText>
      </ThemedView>
    </ThemedView>
  </ThemedView>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "semibold",
    marginBottom: 10,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  item: {
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default WeeklyStats;
