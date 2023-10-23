import { Icon, Input } from "native-base";
import React from "react";
import { View, Text, VirtualizedList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AccountItem from "../components/AccountItem";
type ItemData = {
  id: string;
  title: string;
};
export default function Search() {
  const getItemCount = (_data: unknown) => 1;
  const getItem = (_data: unknown, index: number): ItemData => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
  });
  return (
    <View style={{ flex: 1, paddingTop: 50, padding: 10 }}>
      <Input
        placeholder="Search"
        variant="filled"
        width="100%"
        borderRadius="10"
        py="1"
        px="2"
        borderColor="black.400"
        InputLeftElement={
          <Icon
            ml="2"
            size="4"
            color="black.400"
            as={<Ionicons name="ios-search" />}
          />
        }
      />
      <VirtualizedList
        initialNumToRender={1}
        renderItem={({ item }) => <AccountItem />}
        keyExtractor={(item) => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </View>
  );
}
