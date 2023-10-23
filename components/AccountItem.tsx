import { View, Text } from "native-base";
import React from "react";
import { Avatar } from "@rneui/themed";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function AccountItem() {
  return (
    <View style={{ flexDirection: "row", padding: 10 }}>
      <Avatar
        size={hp("5%")}
        rounded
        source={require("../assets/snowball.png")}
      />
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          paddingLeft: 20,
          textAlignVertical: "center",
        }}
      >
        Thao Nhi
      </Text>
    </View>
  );
}
