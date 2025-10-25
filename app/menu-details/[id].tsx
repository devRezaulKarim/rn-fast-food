import { CartItemQuantity } from "@/components/CartItemQuantity";
import { CustomButton } from "@/components/CustomButton";
import CustomHeader from "@/components/CustomHeader";
import { images } from "@/constants";
import { getMenuWithCustomizationById } from "@/lib/appwrite";
import useAppwrite from "@/lib/useAppwrite";
import { useCartStore } from "@/store/cart.store";
import { CartCustomization, Customization } from "@/type";
import cn from "clsx";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

interface CustomizationCardProps {
  item: Customization;
  isSelected: boolean;
  onSelect: (item: Customization) => void;
}

const CustomizationCard = ({
  item,
  isSelected,
  onSelect,
}: CustomizationCardProps) => {
  return (
    <View
      className="bg-[#3C2F2F] rounded-3xl shadow"
      style={
        Platform.OS === "android"
          ? { elevation: 10, shadowColor: "#878787" }
          : {}
      }
    >
      <View className="rounded-3xl bg-white p-4 relative -top-[1px]">
        <Image
          source={{ uri: item.image }}
          className="size-20 mx-auto"
          resizeMode="cover"
        />
      </View>
      <View className="p-4 flex-row justify-between items-center gap-x-2">
        <Text className="text-white">{item.name}</Text>
        <TouchableOpacity
          className={cn(
            "items-center justify-center size-5 rounded-full",
            isSelected ? "bg-error" : "bg-primary"
          )}
          onPress={() => onSelect(item)}
        >
          <Text className="text-white text-sm">{isSelected ? "-" : "+"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MenuDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: menuWithCustomization, loading } = useAppwrite({
    fn: getMenuWithCustomizationById,
    params: { id },
  });
  const { addItem } = useCartStore();
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedCustomizations, setSelectedCustomizations] = useState<
    CartCustomization[]
  >([]);

  if (loading) {
    return <ActivityIndicator size="large" color="#FF9C01" />;
  }
  const { menu, customizations } = menuWithCustomization!;
  const sideCUstomizations = customizations.filter((c) => c.type === "side");
  const toppingCUstomizations = customizations.filter(
    (c) => c.type === "topping"
  );

  const onDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const onIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleCustomizationSelect = (item: Customization) => {
    const { $id, name, price, type } = item;
    const isExist = selectedCustomizations.find((sc) => sc.id === $id);
    setSelectedCustomizations((prev) => {
      if (isExist) return prev.filter((p) => p.id !== $id);
      return [
        ...prev,
        {
          id: $id,
          name,
          price,
          type,
        },
      ];
    });
    if (isExist) {
      Toast.show({
        type: "error",
        text1: `${name} removed`,
      });
    } else {
      Toast.show({
        type: "success",
        text1: `${name} added as ${type === "side" ? "side item" : "topping"}`,
      });
    }
  };

  const handleAddToCart = () => {
    const { $id, name, price, image_url } = menu;
    addItem({
      id: $id,
      name,
      price,
      image_url,
      customizations: selectedCustomizations,
      quantity,
    });
    Toast.show({
      type: "success",
      text1: `${name} added to cart`,
    });
  };

  if (!menu) {
    return (
      <View>
        <Text>Menu item not found.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="py-4 relative bg-white ">
      <View className="px-4">
        <CustomHeader />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: menu.image_url }}
          className="w-full h-80"
          resizeMode="contain"
        />
        <View className="my-6 px-4">
          <View className="flex-row justify-between items-center gap-4">
            <Text className="text-2xl font-quicksand-bold">{menu.name}</Text>
            <Text className="text-2xl font-quicksand-bold text-primary">
              ${menu.price}
            </Text>
          </View>

          <View className="flex-row justify-between items-center mt-6">
            <View className="items-center gap-1">
              <Image
                source={images.star}
                className="size-6"
                resizeMode="cover"
              />
              <Text className="text-dark-100 font-bold">{menu.rating}/5</Text>
            </View>
            <View className="items-center gap-1">
              <Text className="text-gray-100">Calories</Text>
              <Text className="text-dark-100 font-bold">{menu.calories}</Text>
            </View>
            <View className="items-center gap-1">
              <Text className="text-gray-100">Protein</Text>
              <Text className="text-dark-100 font-bold">{menu.protein}</Text>
            </View>
            <View className="items-center gap-1">
              <Image
                source={images.van}
                className="size-6"
                resizeMode="cover"
              />
              <Text className="text-dark-100 font-bold">Free</Text>
            </View>
            <View className="items-center gap-1">
              <Image
                source={images.clock}
                className="size-6"
                resizeMode="cover"
              />
              <Text className="text-dark-100 font-bold">20 - 30 Mins</Text>
            </View>
          </View>
          <Text className="mt-6">{menu.description}</Text>
        </View>

        <View className="my-10 gap-y-6">
          <View className="gap-y-[8px]">
            <Text className="text-dark-100 font-quicksand-bold px-4">
              Toppings
            </Text>
            <FlatList
              horizontal
              data={toppingCUstomizations}
              renderItem={({ item }) => (
                <CustomizationCard
                  item={item}
                  isSelected={
                    !!selectedCustomizations.find((sc) => sc.id === item.$id)
                  }
                  onSelect={handleCustomizationSelect}
                />
              )}
              keyExtractor={(item) => item.$id}
              ItemSeparatorComponent={() => <View className="w-3" />}
              showsHorizontalScrollIndicator={false}
              contentContainerClassName="py-4 px-4"
            />
          </View>
          <View className="gap-y-[8px]">
            <Text className="text-dark-100 font-quicksand-bold px-4">
              Side Options
            </Text>
            <FlatList
              horizontal
              data={sideCUstomizations}
              renderItem={({ item }) => (
                <CustomizationCard
                  item={item}
                  isSelected={
                    !!selectedCustomizations.find((sc) => sc.id === item.$id)
                  }
                  onSelect={handleCustomizationSelect}
                />
              )}
              keyExtractor={(item) => item.$id}
              ItemSeparatorComponent={() => <View className="w-3" />}
              showsHorizontalScrollIndicator={false}
              contentContainerClassName="py-4 pb-28 px-4"
            />
          </View>
        </View>
      </ScrollView>
      <View
        className="absolute bottom-28 p-4 bg-white rounded-xl mx-4 flex-row gap-x-6"
        style={
          Platform.OS === "android"
            ? { elevation: 10, shadowColor: "#878787" }
            : {}
        }
      >
        <CartItemQuantity
          quantity={quantity}
          onDecrease={onDecrease}
          onIncrease={onIncrease}
        />
        <CustomButton
          onPress={handleAddToCart}
          leftIcon={<Image source={images.bag} className="size-4 mr-2" />}
          title="Add to Cart"
          style="grow"
        />
      </View>
    </SafeAreaView>
  );
};

export default MenuDetails;
