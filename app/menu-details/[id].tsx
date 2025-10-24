import CustomHeader from "@/components/CustomHeader";
import { images } from "@/constants";
import { getMenuWithCustomizationById } from "@/lib/appwrite";
import useAppwrite from "@/lib/useAppwrite";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MenuDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: menuWithCustomization, loading } = useAppwrite({
    fn: getMenuWithCustomizationById,
    params: { id },
  });

  useEffect(() => {
    console.log({
      menuWithCustomization,
      customizations: menuWithCustomization?.customizations,
    });
  }, [menuWithCustomization]);

  if (loading) {
    return <ActivityIndicator size="large" color="#FF9C01" />;
  }
  const { menu, customizations } = menuWithCustomization!;
  const sideCUstomizations = customizations.filter((c) => c.type === "side");
  const toppingCUstomizations = customizations.filter(
    (c) => c.type === "topping"
  );

  if (!menu) {
    return (
      <View>
        <Text>Menu item not found.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="p-4">
      <CustomHeader />
      <ScrollView>
        <Image
          source={{ uri: menu.image_url }}
          className="w-full h-80"
          resizeMode="contain"
        />
        <View className="my-6">
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
        </View>
        <Text>{menu.description}</Text>

        <View className="my-10">
          <FlatList
            horizontal
            data={toppingCUstomizations}
            renderItem={({ item }) => (
              <View className="border rounded mr-2 p-4">
                <Image
                  source={{ uri: item.image }}
                  className="size-20"
                  resizeMode="cover"
                />
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
                <Text>{item.type}</Text>
              </View>
            )}
          />
          <FlatList
            horizontal
            data={sideCUstomizations}
            renderItem={({ item }) => (
              <View className="border rounded mr-2 p-4">
                <Image
                  source={{ uri: item.image }}
                  className="size-20"
                  resizeMode="cover"
                />
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
                <Text>{item.type}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuDetails;
