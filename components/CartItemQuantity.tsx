import { images } from "@/constants";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface CartItemQuantityProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

export const CartItemQuantity = ({
  quantity,
  onDecrease,
  onIncrease,
}: CartItemQuantityProps) => {
  return (
    <View className="flex flex-row items-center gap-x-4 mt-2">
      <TouchableOpacity onPress={onDecrease} className="cart-item__actions">
        <Image
          source={images.minus}
          className="size-1/2"
          resizeMode="contain"
          tintColor={"#FF9C01"}
        />
      </TouchableOpacity>

      <Text className="base-bold text-dark-100">{quantity}</Text>

      <TouchableOpacity onPress={onIncrease} className="cart-item__actions">
        <Image
          source={images.plus}
          className="size-1/2"
          resizeMode="contain"
          tintColor={"#FF9C01"}
        />
      </TouchableOpacity>
    </View>
  );
};
