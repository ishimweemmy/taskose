import React from "react";
import { View, Image, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";

type AvatarGroupProps = {
  count: number;
  maxCount?: number
};

const AvatarGroup: React.FC<AvatarGroupProps> = ({ count, maxCount }) => {
  const displayCount = maxCount || 5;
  const exceedCount = count - displayCount;

  return (
    <View className="flex-row mt-2 justify-center items-center">
      {[...Array(Math.min(displayCount, count))].map((_, i) => (
        <View
          key={i}
          className={`border-2 border-white w-8 h-8 rounded-full overflow-hidden ${i !== 0 ? "-ml-4" : ""}`}
          style={{ zIndex: i - 3 }}
        >
          <Image
            source={{ uri: `https://picsum.photos/200?random=${i}` }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
      ))}

      {exceedCount > 0 && (
        <View
          className="border-2 border-white w-8 h-8 rounded-full bg-gray-200 items-center justify-center -ml-4"
          style={{ zIndex: displayCount - 2 }}
        >
          <Text className="text-xs text-gray-600">+{exceedCount}</Text>
        </View>
      )}

      <Octicons name="diff-added" size={18} color="#7980ff" className="ml-2" />
    </View>
  );
};

export default AvatarGroup;
