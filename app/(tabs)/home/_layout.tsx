import { IconSymbol } from "@/components/ui/IconSymbol";
import { Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";

const HomeStack = () => {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Feed",
          headerLeft: () => (
            <Pressable onPress={() => router.navigate("/home/search")}>
              <IconSymbol size={28} name="magnifyingglass" color="#000" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name="search" options={{ title: "Search" }} />
    </Stack>
  );
};

export default HomeStack;
