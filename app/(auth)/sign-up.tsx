import { CustomButton } from "@/components/CustomButton";
import { CustomInput } from "@/components/CustomInput";
import { createUser } from "@/lib/appwrite";
import useAuthStore from "@/store/auth.store";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";

export default function SignUp() {
  const { fetchCurrentUser } = useAuthStore();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.password) {
      Alert.alert("Error", "Please enter a valid email and password");
      return;
    }
    try {
      setIsSubmitting(true);
      await createUser(form);
      await fetchCurrentUser();
      router.replace("/");
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Error", error.message);
      } else {
        Alert.alert("Error", "Something went wrong!");
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        label="Name"
        placeholder="Full name"
        value={form.name}
        onChangeText={(text) => {
          setForm((prev) => ({ ...prev, name: text }));
        }}
      />
      <CustomInput
        label="Email"
        placeholder="Enter your email"
        value={form.email}
        onChangeText={(text) => {
          setForm((prev) => ({ ...prev, email: text }));
        }}
        keyboardType="email-address"
      />
      <CustomInput
        label="Password"
        placeholder="Enter your password"
        value={form.password}
        onChangeText={(text) => {
          setForm((prev) => ({ ...prev, password: text }));
        }}
        secureTextEntry={true}
      />
      <CustomButton
        title="Sign Up"
        onPress={handleSubmit}
        isLoading={isSubmitting}
      />

      <View className="flex-row justify-center gap-x-2 mt-5">
        <Text className="base-regular text-gray-100">
          Already have an account?
        </Text>
        <Link href="/sign-in" className="base-bold text-primary">
          Sign In
        </Link>
      </View>
    </View>
  );
}
