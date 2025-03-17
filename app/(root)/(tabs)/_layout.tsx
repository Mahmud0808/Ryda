import { icons } from "@/constants";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TabIcon = ({
  isActive,
  source,
}: {
  isActive: boolean;
  source: ImageSourcePropType;
}) => {
  return (
    <View
      className={`rounded-full w-12 h-12 flex flex-row items-center justify-center mb-[28px] ${isActive ? "bg-general-400" : ""}`}
    >
      <Image
        source={source}
        tintColor="white"
        resizeMode="contain"
        className="w-7 h-7"
      />
    </View>
  );
};

const Layout = () => {
  return (
    <SafeAreaView className="flex-1">
      <Tabs
        initialRouteName="home"
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#333333",
            borderRadius: 50,
            paddingBottom: 0,
            overflow: "hidden",
            marginHorizontal: 20,
            marginBottom: 5,
            height: 78,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            position: "absolute",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: (tab) => (
              <TabIcon isActive={tab.focused} source={icons.home} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="rides"
          options={{
            title: "Rides",
            tabBarIcon: (tab) => (
              <TabIcon isActive={tab.focused} source={icons.list} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            title: "Chat",
            tabBarIcon: (tab) => (
              <TabIcon isActive={tab.focused} source={icons.chat} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: (tab) => (
              <TabIcon isActive={tab.focused} source={icons.profile} />
            ),
            headerShown: false,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default Layout;
