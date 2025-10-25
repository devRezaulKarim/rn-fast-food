import { CustomButton } from "@/components/CustomButton";
import CustomHeader from "@/components/CustomHeader";
import ProfileField from "@/components/ProfileField";
import { images } from "@/constants";
import { signOut } from "@/lib/appwrite";
import useAuthStore from "@/store/auth.store";
import { router } from "expo-router";
import React from "react";
import { Image, Platform, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const { user, logout } = useAuthStore();
  const handleLogOut = async () => {
    await signOut();
    logout();
    router.replace("/sign-in");
  };

  return (
    <SafeAreaView className="bg-white h-full ">
      <ScrollView className="p-4">
        <CustomHeader title="Profile" />
        <View className="flex-center">
          <Image source={{ uri: user?.avatar }} className="profile-avatar" />
        </View>
        <View
          className="bg-white shadow-md shadow-dark-100/10 my-8 mx-4 px-4 py-6 rounded-2xl gap-8 "
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
        <View className="mx-4 gap-6">
          <CustomButton
            title="Edit Profile"
            style="bg-primary/10 border border-primary"
            textStyle="!text-primary"
          />
          <CustomButton
            leftIcon={<Image source={images.logout} className="size-6 mr-2" />}
            title="Logout"
            style="bg-error/10 border border-error"
            textStyle="!text-error"
            onPress={handleLogOut}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
