import { CustomButton } from "@/components/CustomButton";
import { CustomInput } from "@/components/CustomInput";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function SignIn() {
  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        label="Email"
        placeholder="Enter your email"
        value=""
        onChangeText={(text) => {}}
        keyboardType="email-address"
      />
      <CustomInput
        label="Password"
        placeholder="Enter your password"
        value=""
        onChangeText={(text) => {}}
        secureTextEntry={true}
      />
      <CustomButton title="Sign In" />

      <View className="flex-row justify-center gap-x-2">
        <Text className="base-regular text-gray-100">
          Don&#39;t have an account?
        </Text>
        <Link href="/sign-up" className="base-bold text-primary">
          Sign Up
        </Link>
      </View>
    </View>
  );
}
