import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CustomHeader from "./CustomHeader";

const CartHeader = () => {
  return (
    <View>
      <CustomHeader title="Your Cart" />
      <View className="flex-between flex-row w-full my-5">
        <View className="flex-start">
          <Text className="small-bold text-primary uppercase">
            Delivery Location
          </Text>
          <Text className="paragraph-bold text-dark-100">Dhaka</Text>
        </View>
        <TouchableOpacity className="p-4 border border-primary rounded-full ">
          <Text className="text-xs text-primary font-quicksand-bold font-bold">
            Change Location
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartHeader;
