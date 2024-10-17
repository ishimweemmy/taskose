import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Feather, Octicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams, useRouter } from "expo-router";
import InfoItem from "@/components/InfoItem";
import AvatarGroup from "@/components/AvatarGroup";
import SubTaskItem from "@/components/SubtaskItem";
import { mockProjects } from "@/constants/data";

const ProjectDetailPage = () => {
  const router = useRouter();
  const { projectId } = useLocalSearchParams();
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [project, setProject] = useState<TProject | null>(null);

  useEffect(() => {
    const fetchedProject = mockProjects.find(
      (project) => project.id === projectId,
    );
    if (fetchedProject) {
      setProject(fetchedProject);
    }
  }, [projectId]);

  const fullDescription = project?.description || "";
  const truncatedDescription = fullDescription.slice(0, 102) + "...";
  const subtasks = project?.tasks.flatMap((task) => task.subtasks);
  console.log(subtasks);
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView>
        {/* Header */}
        <View className="flex-row items-center p-4 bg-white">
          <TouchableOpacity onPress={() => router.push("/(tabs)/")}>
            <Feather name="arrow-left" size={20} color="black" />
          </TouchableOpacity>
          <Text className="text-lg font-semibold ml-4">NFT Landing Page</Text>
          <View className="flex-row ml-auto">
            <TouchableOpacity
              className="mr-2"
              onPress={() => router.push("/(tabs)/")}
            >
              <Feather name="home" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="mr-2">
              <Feather name="upload" size={20} color="#7980ff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="more-horizontal" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Task Preview */}
        <Image
          source={{ uri: project?.imageUrl }}
          className="w-11/12 h-48 rounded-xl mx-4 mb-4"
          resizeMode="cover"
        />

        {/* Description */}
        <View className="bg-white p-4 mx-4 rounded-xl">
          <Text className="font-semibold text-lg mb-2">Description</Text>
          <View className={isDescriptionExpanded ? "" : "flex-row relative"}>
            <Text className="text-gray-600 mb-1">
              {isDescriptionExpanded ? fullDescription : truncatedDescription}
            </Text>
            <TouchableOpacity
              onPress={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              className={isDescriptionExpanded ? "" : "absolute top-8 left-48"}
            >
              <Text className="text-blue-500">
                {isDescriptionExpanded ? "See less" : "See more"}
              </Text>
            </TouchableOpacity>
          </View>

          <InfoItem
            icon="account-group"
            label="Team"
            value={<AvatarGroup count={project?.userCount ?? 0} />}
          />
          <InfoItem icon="account" label="Leader" value={project?.leader} />
          <InfoItem
            icon="tag"
            label="Status"
            value={
              <View className="bg-pink-100 px-2 py-1 rounded">
                <Text className="text-pink-500 font-semibold">To Do</Text>
              </View>
            }
          />
          <InfoItem icon="calendar" label="Due Date" value={project?.dueDate} />
          <InfoItem
            icon="attachment"
            label="Attachment"
            value={
              <View className="flex-row gap-x-2">
                <TouchableOpacity className="border border-blue-100 px-1 py-1 rounded">
                  {project?.attachments.map((attachment) => {
                    return (
                      <Text className="text-indigo-500" key={attachment.id}>
                        {attachment.name}
                      </Text>
                    );
                  })}
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center justify-center bg-indigo-500 py-1 pr-1 rounded gap-x-1">
                  <Octicons
                    name="diff-added"
                    size={15}
                    color="#fff"
                    className="self-center"
                  />
                  <Text className="text-white text-xs">Add</Text>
                </TouchableOpacity>
              </View>
            }
          />
        </View>
        <TouchableOpacity className="w-10/12 bg-indigo-100 py-3 rounded-xl mt-4 self-center">
          <Text className="text-indigo-500 text-center font-semibold">
            Add Custom Section
          </Text>
        </TouchableOpacity>
        {/* Sub Tasks */}
        <View className="bg-white p-4 m-4 rounded-xl">
          <Text className="font-semibold text-lg mb-2">
            Sub Tasks {subtasks?.length}
          </Text>
          {subtasks?.map((subtask) => {
            return (
              <SubTaskItem
                key={subtask.id}
                completed={subtask.status === "Completed"}
                title={subtask.title}
              />
            );
          })}
          <TouchableOpacity className="bg-indigo-500 py-3 rounded-xl mt-4">
            <Text className="text-white text-center font-semibold">
              + Add New Sub Task
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#7980ff" />
    </SafeAreaView>
  );
};

export default ProjectDetailPage;
