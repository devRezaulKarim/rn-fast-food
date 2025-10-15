import cn from "clsx";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

interface CustomInputProps {
  placeholder?: string;
  value?: string;
  label: string;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
}

export const CustomInput = ({
  placeholder = "Enter text",
  value,
  onChangeText,
  label,
  secureTextEntry = false,
  keyboardType = "default",
}: CustomInputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  return (
    <View className="w-full">
      <Text className="label">{label}</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholder={placeholder}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        placeholderTextColor="#888"
        className={cn("input", isFocus ? "border-primary" : "border-gray-300")}
      />
    </View>
  );
};
