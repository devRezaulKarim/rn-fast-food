import { getMenuById } from "@/lib/appwrite";
import useAppwrite from "@/lib/useAppwrite";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";

const MenuDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: menu, loading } = useAppwrite({
    fn: getMenuById,
    params: { id },
  });

  useEffect(() => {
    console.log({ menu });
  }, [menu]);

  if (loading) {
    return <ActivityIndicator size="large" color="#FF9C01" />;
  }

  if (!menu) {
    return (
      <View>
        <Text>Menu item not found.</Text>
      </View>
    );
  }

  return (
    <View>
      <Image
        source={{ uri: menu.image_url }}
        style={{ width: "100%", height: 300 }}
        resizeMode="cover"
      />
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>{menu.name}</Text>
        <Text style={{ fontSize: 16, color: "gray", marginVertical: 10 }}>
          {menu.description}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FF9C01" }}>
          ${menu.price}
        </Text>
      </View>
    </View>
  );
};

export default MenuDetails;
