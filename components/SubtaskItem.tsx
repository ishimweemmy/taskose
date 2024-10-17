import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

type SubTaskItemProps = {
  title: string;
  completed: boolean;
};

const SubTaskItem: React.FC<SubTaskItemProps> = ({ title, completed }) => (
  <View className="flex-row items-center py-3 bg-white rounded-lg mb-2">
    <View
      className={`w-1 h-8 ${completed ? "bg-green-300" : "bg-gray-300"} rounded-l-full mr-3`}
    />
    <Text className={`flex-1 ${completed ? "text-gray-500" : "text-gray-700"}`}>
      {title}
    </Text>
    <View
      className={`w-6 h-6 rounded-full mr-3 items-center justify-center ${completed ? "bg-green-100" : "bg-gray-100"}`}
    >
      <View
        className={`w-4 h-4 rounded-full items-center justify-center ${completed ? "bg-green-300" : "bg-gray-300"}`}
      >
        {completed && <Feather name="check" size={16} color="white" />}
      </View>
    </View>
  </View>
);

export default SubTaskItem;
