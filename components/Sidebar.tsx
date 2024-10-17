import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather } from "@expo/vector-icons";

type SidebarProps = {
  visible: boolean;
  onClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ visible, onClose }) => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isComponentsOpen, setIsComponentsOpen] = useState(false);

  const slideAnim = useRef(new Animated.Value(-300)).current;

  const pagesHeight = useRef(new Animated.Value(0)).current;
  const componentsHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -300,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const toggleSection = (section: "pages" | "components") => {
    if (section === "pages") {
      const toValue = isPagesOpen ? 0 : 100;
      Animated.timing(pagesHeight, {
        toValue,
        duration: 300,
        useNativeDriver: false,
      }).start();
      setIsPagesOpen(!isPagesOpen);
    } else {
      const toValue = isComponentsOpen ? 0 : 100;
      Animated.timing(componentsHeight, {
        toValue,
        duration: 300,
        useNativeDriver: false,
      }).start();
      setIsComponentsOpen(!isComponentsOpen);
    }
  };

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}>
          <TouchableWithoutFeedback>
            <Animated.View
              style={{
                transform: [{ translateX: slideAnim }],
                width: 300,
                height: "100%",
                backgroundColor: "white",
              }}
            >
              <View className="flex-row items-center p-6 bg-indigo-400 gap-x-2">
                <Image
                  source={{ uri: "https://picsum.photos/100" }}
                  className="w-12 h-12 rounded-full  mt-3"
                />
                <View className="items-start justify-center mt-3">
                  <Text className="text-white font-bold text-lg">
                    Good morning
                  </Text>
                  <Text className="text-white font-semibold">
                    Jennifer Lyine
                  </Text>
                </View>
              </View>
              <ScrollView>
                <TouchableOpacity className="flex-row items-center p-4">
                  <Feather name="home" size={20} />
                  <Text className="ml-4 font-semibold">Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="flex-row items-center p-4"
                  onPress={() => toggleSection("pages")}
                >
                  <Feather name="file" size={20} />
                  <Text className="ml-4 font-semibold">Pages</Text>
                  <Feather
                    name={isPagesOpen ? "chevron-up" : "chevron-down"}
                    size={20}
                    className="ml-auto"
                  />
                </TouchableOpacity>
                <Animated.View
                  style={{
                    height: pagesHeight,
                    overflow: "hidden",
                  }}
                >
                  <TouchableOpacity className="pl-12 py-2">
                    <Text className="text-gray-500">Sub Page 1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="pl-12 py-2">
                    <Text className="text-gray-500">Sub Page 2</Text>
                  </TouchableOpacity>
                </Animated.View>

                <TouchableOpacity
                  className="flex-row items-center p-4"
                  onPress={() => toggleSection("components")}
                >
                  <Feather name="grid" size={20} />
                  <Text className="ml-4 font-semibold">Components</Text>
                  <Feather
                    name={isComponentsOpen ? "chevron-up" : "chevron-down"}
                    size={20}
                    className="ml-auto"
                  />
                </TouchableOpacity>
                <Animated.View
                  style={{
                    height: componentsHeight,
                    overflow: "hidden",
                  }}
                >
                  <TouchableOpacity className="pl-12 py-2">
                    <Text className="text-gray-500">Sub Component 1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="pl-12 py-2">
                    <Text className="text-gray-500">Sub Component 2</Text>
                  </TouchableOpacity>
                </Animated.View>

                <TouchableOpacity className="flex-row items-center p-4">
                  <Feather name="user" size={20} />
                  <Text className="ml-4 font-semibold">Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center p-4">
                  <Feather name="message-square" size={20} />
                  <Text className="ml-4 font-semibold">Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center p-4">
                  <Feather name="log-out" size={20} />
                  <Text className="ml-4 font-semibold">Logout</Text>
                </TouchableOpacity>
              </ScrollView>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default Sidebar;
