import { Tabs } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "coral",
        tabBarInactiveTintColor: "gray",
        headerTitleAlign: "center",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: "Login",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="log-in" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pomodoro"
        options={{
          title: "Pomodoro",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="clock" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
