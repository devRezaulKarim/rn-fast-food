import { HomePageHeader } from "@/components/HomePageHeader";
import { images, offers } from "@/constants";
import cn from "clsx";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className=" flex-1 bg-white">
      <FlatList
        data={offers}
        renderItem={({ item, index }) => (
          <View>
            <Pressable
              className={cn(
                "offer-card",
                index % 2 === 0 ? "flex-row-reverse pl-8" : "flex-row pr-8"
              )}
              style={{ backgroundColor: item.color }}
              android_ripple={{ color: "#fffff22" }}
            >
              {({ pressed }) => (
                <>
                  <View className="h-full w-1/2">
                    <Image
                      source={item.image}
                      className="size-full"
                      resizeMode="contain"
                    />
                  </View>
                  <View className="offer-card__info">
                    <Text className="h1-bold text-white leading-tight">
                      {item.title}
                    </Text>
                    <Image
                      source={images.arrowRight}
                      className="size-10"
                      resizeMode="contain"
                    />
                  </View>
                </>
              )}
            </Pressable>
          </View>
        )}
        contentContainerClassName="pb-28 px-4"
        ListHeaderComponent={() => <HomePageHeader />}
      />
    </SafeAreaView>
  );
}
