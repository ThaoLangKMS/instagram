import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { signup, signin } from "../api/api";
import { Center, Icon, Pressable } from "native-base";
import { Input, Image, Button } from "native-base";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function AuthScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = React.useState(false);

  const handleSignup = async () => {
    try {
      const user = await signup(email, password);
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Center>
          <Image
            source={{
              uri: "https://github.com/Ajithonline/react-native-instagram-clone/blob/master/src/assets/images/instagramLogo.png?raw=true",
            }}
            alt="Instagram logo"
            size="xs"
            width={"50%"}
            height={"50"}
          />
        </Center>
      </View>
      <View style={styles.inputContainer}>
        <Input
          size="md"
          onChangeText={setEmail}
          placeholder="Email"
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="mail" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          size="md"
          onChangeText={setPassword}
          placeholder="Password"
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? "visibility" : "visibility-off"}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
        />
      </View>
      <Button onPress={handleSignup}>Sign up</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: hp("3%"),
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    flex: 1,
  },
  iconContainer: {
    padding: hp("2%"),
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "red",
    padding: 20,
  },
  item: {
    backgroundColor: "#f9c2ff",
    height: 150,
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red",
  },
  storyItem: {
    padding: hp("1%"),
    alignItems: "center",
    justifyContent: "center",
  },
  storyContainer: {
    flexDirection: "row",
    paddingLeft: hp("3%"),
  },
  instaLogo: {
    width: "100%",
    height: "50%",
    alignSelf: "center",
  },
  inputContainer: {
    paddingVertical: hp("1%"),
  },
});
