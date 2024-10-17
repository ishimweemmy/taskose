import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Sidebar from "@/components/Sidebar";
import TaskCard from "@/components/TaskCard";
import ProjectCard from "@/components/ProjectCard";
import { mockProjects } from "@/constants/data";

const IndexPage: React.FC = () => {
  const TAB_BAR_HEIGHT = 65;
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <SafeAreaView
      className="flex-1 bg-indigo-400"
      style={{ flex: 1, paddingBottom: 30 }}
    >
      <View className="pt-12 px-4 pb-6">
        <View className="flex-row justify-between items-center mb-4">
          <View className="flex-row items-center">
            <View className="relative mr-3">
              <Image
                source={{ uri: "https://picsum.photos/200/300" }}
                className="w-10 h-10 rounded-full"
              />
              <View className="absolute top-0 right-0 h-3 w-3 bg-emerald-500 rounded-full border border-black" />
            </View>
            <View>
              <Text className="text-white font-semibold text-lg">
                Jennifer Lyine
              </Text>
              <Text className="text-white text-sm">
                Hi Jennifer, Good Morning!
              </Text>
            </View>
          </View>
          <View className="flex-row items-center">
            <TouchableOpacity
              className="mr-4"
              onPress={() => setIsSidebarVisible(true)}
            >
              <Feather name="menu" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity className="relative border border-gray-500 rounded-full p-1">
              <View className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border border-black" />
              <Feather name="bell" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="bg-white flex-row items-center rounded-full px-4 py-2 mt-4">
          <Feather name="search" size={20} color="gray" />
          <TextInput
            placeholder="Find your task"
            className="ml-2 flex-1"
            placeholderTextColor="gray"
          />
        </View>
      </View>

      <ScrollView
        className="flex-1 bg-gray-100 rounded-t-3xl px-4 pt-6"
        contentContainerStyle={{
          paddingBottom: TAB_BAR_HEIGHT,
        }}
      >
        <View className="flex-row justify-between items-center mb-4">
          <Text className="font-bold text-lg">Recent Projects</Text>
          <TouchableOpacity>
            <Text className="text-gray-500 font-medium">View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-6"
        >
          {mockProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </ScrollView>

        <View className="flex-row justify-between items-center mb-4">
          <Text className="font-bold text-lg">Today Tasks</Text>
          <TouchableOpacity>
            <Text className="text-gray-500 font-medium">View All</Text>
          </TouchableOpacity>
        </View>

        <TaskCard
          title="Fintech Project"
          progress={55}
          iconColor="#3498db"
          userCount={16}
        />
        <TaskCard
          title="Fashion App"
          progress={35}
          iconColor="#3498db"
          userCount={8}
        />
      </ScrollView>
      <Sidebar
        visible={isSidebarVisible}
        onClose={() => setIsSidebarVisible(false)}
      />
    </SafeAreaView>
  );
};

export default IndexPage;
