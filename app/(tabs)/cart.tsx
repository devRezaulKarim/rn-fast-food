import CartHeader from "@/components/CartHeader";
import { CartItem } from "@/components/CartItem";
import { CustomButton } from "@/components/CustomButton";
import { images } from "@/constants";
import { useCartStore } from "@/store/cart.store";
import { PaymentInfoStripeProps } from "@/type";
import cn from "clsx";
import { Link } from "expo-router";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PaymentInfo = ({
  label,
  value,
  labelStyle,
  valueStyle,
}: PaymentInfoStripeProps) => {
  return (
    <View className="flex-between flex-row my-1">
      <Text className={cn("paragraph-medium text-gray-200", labelStyle)}>
        {label}
      </Text>
      <Text className={cn("paragraph-bold text-dark-100", valueStyle)}>
        {value}
      </Text>
    </View>
  );
};

export default function Cart() {
  const { items, getTotalItems, getTotalPrice } = useCartStore();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={items}
        renderItem={({ item }) => <CartItem key={item.id} item={item} />}
        keyExtractor={(item) => item.cartKey}
        contentContainerClassName="pb-8 px-4 pt-4"
        ListHeaderComponent={() => <CartHeader />}
        ListEmptyComponent={() => (
          <View>
            <Image
              source={images.emptyState}
              className="w-44 mx-auto"
              resizeMode="contain"
            />
            <Text className="h3-bold text-center mb-3.5">Cart is empty!</Text>
            <Link href="/search" className="py-3 px-6 bg-primary rounded-full w-fit mx-auto">
              <Text className="font-medium text-center text-white ">
                Browse menu to add some items 🍔
              </Text>
            </Link>
          </View>
        )}
        ListFooterComponent={() =>
          totalItems > 0 && (
            <View className="gap-5">
              <View className="mt-6 border border-gray-200 p-4 rounded-2xl">
                <Text className="h3-bold text-dark-100 mb-5">
                  Payment Summary
                </Text>
                <PaymentInfo
                  label={`Total Items (${totalItems})`}
                  value={`$${totalPrice.toFixed(2)}`}
                />
                <PaymentInfo label={`Delivery Fee`} value={`$5`} />
                <PaymentInfo
                  label={`Discount`}
                  value={`-$0.5`}
                  valueStyle="!text-success"
                />
                <View className="border-t border-gray-300 my-2" />
                <PaymentInfo
                  label={`Total Price`}
                  value={`$${(totalPrice + 5 - 0.5).toFixed(2)}`}
                  labelStyle="!text-dark-100 base-bold"
                  valueStyle="base-bold !text-dark-100 !text-right"
                />
              </View>
              <CustomButton title="Order now" />
            </View>
          )
        }
      />
    </SafeAreaView>
  );
}
