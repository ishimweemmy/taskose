import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { AnimatedCircularProgress } from "react-native-circular-progress";

type TaskCardProps = {
  title: string;
  progress: number;
  iconColor: string;
  userCount: number;
};

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  progress,
  iconColor,
  userCount,
}) => (
  <View className="flex-row items-center bg-white rounded-xl shadow-sm p-4 mb-4">
    <View
      className={`w-14 h-14 rounded-lg items-center justify-center mr-3 bg-blue-600/10`}
    >
      <MaterialIcons
        name="account-balance-wallet"
        size={20}
        color={iconColor} // Use the dynamic icon color
      />
    </View>

    <View className="flex-1">
      <Text className="font-semibold">{title}</Text>
      <View className="flex-row items-center mt-1">
        {/* User Avatars */}
        <View className="flex-row mt-1">
          {[...Array(3)].map((_, i) => (
            <View
              key={i}
              className={`border-2 border-white w-8 h-8 rounded-full overflow-hidden ${
                i !== 0 ? "-ml-4" : ""
              }`}
              style={{ zIndex: 3 - i }} // Ensures the correct stacking order
            >
              <Image
                source={{ uri: "https://picsum.photos/200/300" }} // Static avatar placeholder
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
          ))}
        </View>

        {/* User Count and Chat Icon */}
        <View className="flex-row items-center justify-center rounded-full bg-slate-200 p-2 ml-4">
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={12}
            color="gray"
            className="font-medium"
          />
          <Text className="text-gray-500 text-xs ml-1 font-medium">
            {userCount} {/* Dynamic user count */}
          </Text>
        </View>
      </View>
    </View>

    {/* Circular Progress Indicator */}
    <AnimatedCircularProgress
      size={60}
      width={6}
      fill={progress}
      tintColor={iconColor}
      backgroundColor="#e0e0e0"
      rotation={0}
    >
      {(fill) => <Text>{`${Math.round(fill)}%`}</Text>}
    </AnimatedCircularProgress>
  </View>
);

export default TaskCard;
