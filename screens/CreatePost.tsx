import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button, FlatList } from "react-native";

import * as ImagePicker from "expo-image-picker";
import { MediaTypeOptions } from "expo-image-picker";
import { Video } from "expo-av";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import {
  Input,
  Box,
  Icon,
  Button as Btn,
  TextArea,
  Image as Img,
} from "native-base";

interface MediaItem {
  type: "image" | "video";
  uri: string;
}

export default function CreatePost() {
  const [pickedMedia, setPickedMedia] = useState<MediaItem[]>([]);
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const pickMediaAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      allowsMultipleSelection: true,
      mediaTypes: MediaTypeOptions.All,
      orderedSelection: true,
      selectionLimit: 10,
      quality: 1,
    });

    if (!result.canceled) {
      const mediaItems: MediaItem[] =
        result.assets.map((media) => {
          if (media.type === "video") {
            return { type: "video", uri: media.uri };
          } else {
            return { type: "image", uri: media.uri };
          }
        }) || [];

      setPickedMedia([...pickedMedia, ...mediaItems]);
      setShowPlaceholder(false);
    } else {
      alert("You did not select any media.");
    }
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.canceled) {
      setPickedMedia([...pickedMedia, { type: "video", uri: result.uri }]);
    }
  };

  const renderMediaItem = ({ item }: { item: MediaItem }) => {
    if (item.type === "image") {
      return <Image source={{ uri: item.uri }} style={styles.mediaItem} />;
    } else if (item.type === "video") {
      return (
        <Video
          source={{ uri: item.uri }}
          useNativeControls
          resizeMode="contain"
          isLooping={false}
          isMuted={false}
          style={styles.mediaItem}
        />
      );
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon as={AntDesign} name="close" size="xl" />
          <Text style={{ paddingLeft: 20, fontSize: 18, fontWeight: "bold" }}>
            New post
          </Text>
        </View>
        <View>
          <Btn size="lg" variant="ghost">
            Post
          </Btn>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Btn
          onPress={pickMediaAsync}
          width={150}
          endIcon={<Icon as={MaterialIcons} name="perm-media" size="sm" />}
        >
          Select from gallery
        </Btn>
        <Btn
          onPress={openCamera}
          width={150}
          endIcon={<Icon as={Feather} name="camera" size="sm" />}
        >
          Select from camera
        </Btn>
      </View>
      <View style={{ paddingTop: 50, paddingBottom: 50 }}>
        
        <FlatList
          data={pickedMedia}
          renderItem={renderMediaItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
        />
      </View>
      <Box alignItems="center" w="100%">
        <TextArea h={20} placeholder="Write a caption" w="100%" maxW="300" autoCompleteType={undefined} />
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  buttonContainer: {
    width: 400,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  mediaItem: {
    width: 200,
    height: 200,
    margin: 5,
  },
  header: {
    padding: hp("1%"),
    paddingTop: hp("5%"),
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
