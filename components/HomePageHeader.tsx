import { images } from "@/constants";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { CartButton } from "./CartButton";

export const HomePageHeader = () => {
  return (
    <View className="flex-between flex-row w-full my-5">
      <View className="flex-start">
        <Text className="small-bold text-primary">DELIVER TO</Text>
        <TouchableOpacity className="flex-center flex-row gap-x-[2px]">
          <Text className="paragraph-bold text-dark-100">Dhaka</Text>
          <Image
            source={images.arrowDown}
            className="size-3"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <CartButton />
    </View>
  );
};
