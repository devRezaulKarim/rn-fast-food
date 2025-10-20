import CustomHeader from "@/components/CustomHeader";
import ProfileField from "@/components/ProfileField";
import useAuthStore from "@/store/auth.store";
import React from "react";
import { Image, Platform, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const { user } = useAuthStore();

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView className="px-4">
        <CustomHeader title="Profile" />
        <View className="flex-center">
          <Image source={{ uri: user?.avatar }} className="profile-avatar" />
        </View>
        <View
          className="bg-white shadow-md shadow-dark-100/10 mt-8 mx-4 px-4 py-6 rounded-2xl gap-8"
          style={
            Platform.OS === "android"
              ? { elevation: 5, shadowColor: "#878787" }
              : {}
          }
        >
          <ProfileField icon="user" label="Full Name" value={user?.name!} />
          <ProfileField icon="envelope" label="Email" value={user?.email!} />
          <ProfileField icon="phone" label="Phone Number" value="+1234567890" />
          <ProfileField
            icon="location"
            label="Address 1 "
            value="123 Main Street, Uttara, Dhaka 1230"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
