import { View, Text, ImageBackground,  } from "react-native";
import React from "react";
import beachImage from "@/assets/meditation-images/beach.webp";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import {SafeAreaView} from 'react-native-safe-area-context'
import AppGradient from "@/components/AppGradient";

const App = () => {
    const router = useRouter();
  return (
    <View className="flex-1 ">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient  colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
       
          <SafeAreaView className="flex-1 px-1 justify-between">
            <View className="flex-1 items-center ">
              <Text className=" mt-10 text-center text-white font-bold text-4xl">
                Simple Meditation
              </Text>
              <Text className="flex-1 text-center text-white mt-5 text-1xl ">
                Simplifying Meditation For Everyone
              </Text>
            </View>

            <View>
              <CustomButton
                Onpress={() =>router.push("/nature-meditate")}
                title="Get Started"
              ></CustomButton>
            </View>

            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
