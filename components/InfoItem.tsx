import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type InfoItemProps = {
  icon: string;
  label: string;
  value: React.ReactNode;
};

const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value }) => (
  <View className="flex-row items-center py-2">
    <MaterialCommunityIcons
      name={icon as any}
      size={20}
      color="#6B7280"
      className="mr-3"
    />
    <Text className="text-gray-600 flex-1">{label}</Text>
    <Text className="font-semibold">{value}</Text>
  </View>
);

export default InfoItem;
