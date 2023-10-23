import React, { PropsWithChildren, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconEvilIcons from "react-native-vector-icons/EvilIcons";
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ImageSlider from "./ImageSlider";
import Comment from "./Comment";

type PostProp = PropsWithChildren<{
  username: string;
  isEditingTask: boolean;
  closeEditModal(): void;
  saveEditedTask(): void;
}>;

const Post = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleHeartClick = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setShowAnimation(true);
      setLikes(1);
    } else {
      setLikes(0);
    }

    setTimeout(() => {
      setShowAnimation(false);
    }, 800);
  };

  const images = [
    {
      type: "image",
      url: require("../assets/images/camera.png"),
    },
    {
      type: "image",
      url: require("../assets/images/front_camera.png"),
    },
    {
      type: "image",
      url: require("../assets/images/back_camera.png"),
    },
    {
      type: "image",
      url: require("../assets/images/camera.png"),
    },
    {
      type: "image",
      url: require("../assets/images/back_camera.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.headerLeftWrapper}>
          <Image
            style={styles.profileThumb}
            source={require("../assets/images/corgi.jpg")}
          />
          <Text style={styles.headerTitle}> Thao Lang</Text>
        </View>
        <TouchableOpacity>
          <IconEntypo
            style={styles.icon}
            name="dots-three-vertical"
            size={wp("5%")}
            color="#000000"
          />
        </TouchableOpacity>
      </View>
      <View>
        <ImageSlider mediaList={images} showAnimation={showAnimation} />
      </View>
      <View style={styles.feedImageFooter}>
        <View style={styles.feddimageFooterLeftWrapper}>
          <TouchableOpacity onPress={() => handleHeartClick()}>
            {isLiked ? (
              <Image
                source={require("../assets/images/red_heart.png")}
                style={styles.likesImage}
              />
            ) : (
              <IconIonicons
                name="heart-outline"
                size={wp("6%")}
                style={styles.icon}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.icon}>
              <IconEvilIcons
                onPress={() => <Comment />}
                name="comment"
                size={wp("7%")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.icon}>
              <IconIonicons name="paper-plane-outline" size={wp("6%")} />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={styles.icon}>
            <IconFontAwesome name="bookmark-o" size={wp("6%")} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.likesAndCommentsWrapper}>
        <Text style={styles.likesTitle}>{likes} Likes</Text>
        <Text style={styles.headerTitle}> My new wallpaper</Text>
        <Text style={styles.likesTitle}> 2 comments </Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  profileThumb: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  headerWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  icon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    paddingLeft: hp("1%"),
    paddingTop: hp("2%"),
  },
  headerLeftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  feedImage: {
    width: "100%",
    height: "60%",
  },
  feedImageFooter: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  feddimageFooterLeftWrapper: {
    flexDirection: "row",
  },
  underLine: {
    height: 1,
    backgroundColor: "gray",
  },
  underLineWRapper: {
    marginLeft: 10,
    marginRight: 10,
  },
  likesImage: {
    width: 25,
    height: 25,
  },
  likesAndCommentsWrapper: {
    padding: hp("1%"),
  },
  likesTitle: {
    fontSize: 15,
    fontWeight: "600",
  },
  imgeContainer: {
    width: "100%",
    height: "60%",
    resizeMode: "cover",
  },
  dotSlider: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
});

export default Post;
