import CustomHeader from "@/components/CustomHeader";
import { images } from "@/constants";
import { getMenuWithCustomizationById } from "@/lib/appwrite";
import useAppwrite from "@/lib/useAppwrite";
import { Customization } from "@/type";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
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

const CustomizationCard = ({ item }: { item: Customization }) => {
  return (
    <View
      className="bg-[#3C2F2F] rounded-3xl shadow"
      style={
        Platform.OS === "android"
          ? { elevation: 5, shadowColor: "#878787" }
          : {}
      }
    >
      <View className="rounded-3xl bg-white p-4 relative -top-[1px]">
        <Image
          source={{ uri: item.image }}
          className="size-20"
          resizeMode="cover"
        />
      </View>
      <View className="p-4 flex-row justify-between items-center gap-x-2">
        <Text className="text-white">{item.name}</Text>
        <TouchableOpacity className="bg-error w-8 h-8 rounded-full flex-center">
          <Text className="text-white ">+</Text>
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

        <View className="my-10 gap-y-6">
          <View className="gap-y-[8px]">
            <Text className="text-dark-100 font-quicksand-bold">Toppings</Text>
            <FlatList
              horizontal
              data={toppingCUstomizations}
              renderItem={({ item }) => <CustomizationCard item={item} />}
              keyExtractor={(item) => item.$id}
              ItemSeparatorComponent={() => <View className="w-3" />}
              showsHorizontalScrollIndicator={false}
              contentContainerClassName="py-2"
            />
          </View>
          <View className="gap-y-[8px]">
            <Text className="text-dark-100 font-quicksand-bold">
              Side Options
            </Text>
            <FlatList
              horizontal
              data={sideCUstomizations}
              renderItem={({ item }) => <CustomizationCard item={item} />}
              keyExtractor={(item) => item.$id}
              ItemSeparatorComponent={() => <View className="w-3" />}
              showsHorizontalScrollIndicator={false}
              contentContainerClassName="py-2"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuDetails;
