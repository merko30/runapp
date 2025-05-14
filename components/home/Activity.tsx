import { StyleSheet } from "react-native";
import MapView from "../MapView";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

const Activity = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.info}>
        <ThemedText style={styles.title}>Morning run</ThemedText>
        <ThemedText style={styles.description}>
          Lovely morning run, 2.5k warm up, 6k tempo, 2k cool down
        </ThemedText>
      </ThemedView>
      <ThemedView
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <ThemedView style={styles.item}>
          <ThemedText style={styles.label}>Distance</ThemedText>
          <ThemedText style={styles.value}>10.5km</ThemedText>
        </ThemedView>
        <ThemedView style={styles.item}>
          <ThemedText style={styles.label}>Time</ThemedText>
          <ThemedText style={styles.value}>54m 57s</ThemedText>
        </ThemedView>
        <ThemedView style={styles.item}>
          <ThemedText style={styles.label}>Pace</ThemedText>
          <ThemedText style={styles.value}>5:12/km</ThemedText>
        </ThemedView>
      </ThemedView>
      <MapView />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 10,
  },
  info: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    color: "#444",
    lineHeight: 14,
  },
  item: {},
  label: {
    fontSize: 14,
    fontWeight: "400",
  },
  value: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default Activity;
