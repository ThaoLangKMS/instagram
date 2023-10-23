import React, { PropsWithChildren, useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import { MediaType } from "../model/MediaType";
import LottieView from "lottie-react-native";

type ImageSliderProp = PropsWithChildren<{
  mediaList: MediaType[];
  showAnimation: boolean;
}>;

export default function ImageSlider(props: ImageSliderProp) {
  const postList = [
    {
      type: "image",
      imageUrl: require("../assets/images/camera.png"),
    },
    {
      type: "image",
      imageUrl: require("../assets/images/front_camera.png"),
    },
    {
      type: "image",
      imageUrl: require("../assets/images/back_camera.png"),
    },
    {
      type: "image",
      imageUrl: require("../assets/images/camera.png"),
    },
    {
      type: "image",
      imageUrl: require("../assets/images/back_camera.png"),
    },
  ];
  const width = useWindowDimensions().width;
  const height = width * 0.6;

  const scrollViewRef = useRef<ScrollView | null>(null);
  const [active, setActive] = useState(0);

  const images = props.mediaList.filter((media) => media.type === "image");

  const lottie = props.showAnimation ? (
    <LottieView
      autoPlay
      loop
      source="https://lottie.host/a8a4acb7-80d4-4a10-935a-27ee002b2cc3/CbvEfgVIcP.json"
      style={styles.heartAnimation}
    />
  ) : null;

  const change = (event: any) => {
    const slide = Math.ceil(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  const scrollToSlide = (index: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: index * width,
        animated: true,
      });
    }
  };

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        pagingEnabled
        horizontal
        onScroll={change}
        showsHorizontalScrollIndicator={false}
        style={{ width, height }}
      >
        {postList.map((media, index) => (
          // <Image
          //   key={index}
          //   source={{ uri: media.url }}
          //   style={{ width, height, resizeMode: "cover" }}
          // />
          <Image
            key={index}
            source={media.imageUrl}
            style={{ width, height, resizeMode: "cover" }}
          />
        ))}
        {props.showAnimation && <View>{lottie}</View>}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <Text
            key={index}
            style={index === active ? styles.activeDot : styles.dot}
            onPress={() => scrollToSlide(index)}
          >
            •
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
  },
  dot: {
    color: "#888",
    fontSize: 20,
    marginHorizontal: 5,
  },
  activeDot: {
    color: "#FFF",
    fontSize: 20,
    marginHorizontal: 5,
  },
  heartAnimation: {
    width: 300,
    height: 300,
  },
});
