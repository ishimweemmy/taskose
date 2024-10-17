import { Tabs } from "expo-router";
import React, { FC } from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { TouchableOpacity } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#7980ff",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          position: "absolute",
          height: 65,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          display: "flex",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.53,
          shadowRadius: 13.97,
          elevation: 21,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (
              <TabBarIcon
                name="grid-outline"
                size={25}
                color={color}
                family="Ionicons"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="edit"
        options={{
          title: "Edit",
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="book-edit-outline"
              size={25}
              color={color}
              family="MaterialCommunityIcons"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarButton: () => (
            <TouchableOpacity className="bg-[#7980ff] w-[50px] h-[50px] rounded-full justify-center items-center -mt-6 shadow-md">
              <TabBarIcon
                name="plus"
                size={25}
                color="#FFFFFF"
                family="AntDesign"
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="chatbubble-ellipses-outline"
              color={color}
              size={25}
              family="Ionicons"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name={"user-o"}
              color={color}
              size={25}
              family="FontAwesome"
            />
          ),
        }}
      />
    </Tabs>
  );
}
