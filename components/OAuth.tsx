import React from "react";
import { Alert, Image, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import { icons } from "@/constants";
import { useSSO } from "@clerk/clerk-expo";
import { router } from "expo-router";
import { googleOAuth } from "@/lib/auth";

const OAuth = () => {
  const { startSSOFlow } = useSSO();

  const handleGoogleSignIn = async () => {
    const result = await googleOAuth(startSSOFlow);

    if (result.code === "session_exists" || result.code === "success") {
      router.replace("/(root)/(tabs)/home");
    }

    if (!result.success) {
      Alert.alert("Error", result.message);
    }
  };

  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100" />
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>

      <CustomButton
        title="Continue with Google"
        className="mt-5 w-full shadow-none"
        bgVariant="outline"
        textVariant="primary"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-2"
          />
        )}
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

export default OAuth;
