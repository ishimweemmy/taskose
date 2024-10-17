import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Entypo, Feather, EvilIcons, Ionicons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import AvatarGroup from "./AvatarGroup";
import { calculateProjectProgress } from "@/lib/utils";

type ProjectCardProps = {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  userCount: number;
  commentCount: number;
};

const ProjectCard: React.FC<TProject> = (project) => {
  const router = useRouter();
  const {title, date, userCount, commentCount, imageUrl, id} = project
  const projectProgress = calculateProjectProgress(project)
  return (
    <View className="bg-white rounded-xl shadow-sm mr-4 px-2 w-64 h-80">
      <View className="py-3">
        <View className="flex-row justify-between items-center">
          <View className="w-9 h-9 bg-lime-400 rounded-full items-center justify-center">
            <Entypo name="game-controller" size={15} color="black" />
          </View>
          <Text className="w-2/3 font-bold text-sm">{title}</Text>
          <TouchableOpacity
            className="w-5 h-5 border border-slate-500 rounded-md items-center justify-center"
            onPress={() => router.push(`/project/${id}` as Href<string>)}
          >
            <Feather name="more-horizontal" size={15} color="gray" />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center mt-2 space-x-2">
          <View className="flex-row items-center justify-center rounded-full bg-slate-200 p-1 px-3">
            <EvilIcons name="calendar" size={15} color="gray" />
            <Text className="text-gray-500 text-xs font-medium">{date}</Text>
          </View>
          <View className="flex-row items-center justify-center rounded-full bg-slate-200 p-1 px-3">
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={12}
              color="gray"
            />
            <Text className="text-gray-500 text-xs ml-1 font-medium">
              {commentCount}
            </Text>
          </View>
          <View className="flex-row items-center justify-center rounded-full bg-slate-200 p-1 px-3">
            <Entypo name="link" size={12} color="gray" />
            <Text className="text-gray-500 text-xs ml-1 font-medium">
              {userCount}
            </Text>
          </View>
        </View>
      </View>
      <Image
        source={{ uri: imageUrl }}
        className="w-full h-44 rounded-xl"
        resizeMode="cover"
      />
      <View className="flex-row items-center justify-between">
      <View className="flex-row mt-2">
        <AvatarGroup count={userCount ?? 0} maxCount={1} />
      </View>
      <View className="items-start justify-center w-2/3 space-y-1">
        <View className="w-full flex flex-row items-center justify-between">
          <Text className="text-gray-400 font-medium">Progress</Text>
          <Text className="text-gray-600 font-medium">{projectProgress}</Text>
        </View>
        <View className="w-full h-2 relative bg-gray-100 rounded-full overflow-hidden">
          <View className="w-[78%] h-full bg-indigo-500 rounded-full" />
        </View>
      </View>
    </View>
    </View>
  );
};

export default ProjectCard;



{/* <View className="bg-white rounded-xl shadow-sm mr-4 px-2 w-64 h-80">
    <View className="py-3">
      <View className="flex-row justify-between items-center">
        <View className="w-9 h-9 bg-lime-400 rounded-full items-center justify-center">
          <Entypo name="game-controller" size={15} color="black" />
        </View>
        <Text className="w-2/3 font-bold text-sm">{title}</Text>
        <TouchableOpacity className="w-5 h-5 border border-slate-500 rounded-md items-center justify-center">
          <Feather name="more-horizontal" size={15} color="gray" />
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center mt-2 space-x-2">
        <View className="flex-row items-center justify-center rounded-full bg-slate-200 p-1 px-3">
          <EvilIcons
            name="calendar"
            size={15}
            color="gray"
            className="font-medium"
          />
          <Text className="text-gray-500 text-xs font-medium">{date}</Text>
        </View>
        <View className="flex-row items-center justify-center rounded-full bg-slate-200 p-1 px-3">
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={12}
            color="gray"
            className="font-medium"
          />
          <Text className="text-gray-500 text-xs ml-1 font-medium">
            {commentCount}
          </Text>
        </View>
        <View className="flex-row items-center justify-center rounded-full bg-slate-200 p-1 px-3">
          <Entypo name="link" size={12} color="gray" className="font-medium" />
          <Text className="text-gray-500 text-xs ml-1 font-medium">
            {userCount}
          </Text>
        </View>
      </View>
    </View>
    <Image
      source={{ uri: imageUrl }}
      className="w-full h-44 rounded-xl"
      resizeMode="cover"
    />
    <View className="flex-row items-center justify-between">
      <View className="flex-row mt-2">
        {[...Array(3)].map((_, i) => (
          <View
            key={i}
            className={`border-2 border-white w-8 h-8 rounded-full overflow-hidden ${i !== 0 ? "-ml-4" : ""}`}
            style={{ zIndex: i - 3 }}
          >
            <Image
              source={{ uri: "https://picsum.photos/200/300" }}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
        ))}
      </View>
      <View className="items-start justify-center w-2/3 space-y-1">
        <View className="w-full flex flex-row items-center justify-between">
          <Text className="text-gray-400 font-medium">Progress</Text>
          <Text className="text-gray-600 font-medium">78%</Text>
        </View>
        <View className="w-full h-2 relative bg-gray-100 rounded-full overflow-hidden">
          <View className="w-[78%] h-full bg-indigo-500 rounded-full" />
        </View>
      </View>
    </View>
  </View> */}