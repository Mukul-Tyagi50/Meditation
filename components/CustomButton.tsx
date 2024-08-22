import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface CustomButtonProps {
  Onpress: () => void;
  title: string;
  textStyles: string;
  containerStyles: string;
}

const CustomButton = ({
  Onpress,
  title,
  textStyles = "",
  containerStyles = "",
}: CustomButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyles} `}
    onPress={Onpress}>
      <Text className={`font-semibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
