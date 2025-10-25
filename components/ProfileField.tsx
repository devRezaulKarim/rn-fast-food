import { images } from "@/constants";
import React from "react";
import { Image, Text, View } from "react-native";

interface ProfileFieldProps {
  icon: keyof typeof images;
  label: string;
  value: string;
}

const ProfileField = ({ icon, label, value }: ProfileFieldProps) => {
  return (
    <View className="flex-row items-center gap-x-4 w-full ">
      <View className="bg-primary/10 p-4 rounded-full shrink-0">
        <Image source={images[icon]} className="size-8" resizeMode="contain" />
      </View>
      <View>
        <Text className="text-base text-start font-quicksand-medium text-gray-100">
          {label}
        </Text>
        <Text className="font-quicksand-bold text-dark-100">{value}</Text>
      </View>
    </View>
  );
};

export default ProfileField;
