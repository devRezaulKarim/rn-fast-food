import { images } from "@/constants";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
  const params = useLocalSearchParams<{ query?: string }>();
  const [query, setQuery] = useState(params.query);
  const debounceSearch = useDebouncedCallback(
    (text) => router.setParams({ query: text }),
    500
  );
  const handleSearch = (text: string) => {
    setQuery(text);
    debounceSearch(text);
  };
  return (
    <View
      className="searchbar"
      style={
        Platform.OS === "android"
          ? { elevation: 5, shadowColor: "#878787" }
          : {}
      }
    >
      <TextInput
        className="flex-1 p-4"
        placeholder="Search for pizzas, burgers..."
        value={query}
        onChangeText={handleSearch}
        placeholderTextColor="#a0a0a0"
        returnKeyType="search"
      />
      <TouchableOpacity
        className="pr-4"
        onPress={() => router.setParams({ query })}
      >
        <Image
          source={images.search}
          className="size-6"
          resizeMode="contain"
          tintColor="#5d5f6d"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
