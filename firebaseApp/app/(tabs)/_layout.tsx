import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs screenOptions={{ 
        headerShown: true,
        headerTitleAlign: "center",
    }}>
  <Tabs.Screen
    name="index"
    options={{
      title: "Home",
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="home-outline" size={size} color={color} />
      ),
    }}
  />
  <Tabs.Screen
    name="history"
    options={{
      title: "History",
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="time-outline" size={size} color={color} />
      ),
    }}
  />
  <Tabs.Screen
    name="profile"
    options={{
      title: "Profile",
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="person-outline" size={size} color={color} />
      ),
    }}
  />
</Tabs>
  );
};