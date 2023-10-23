// import React, { PropsWithChildren } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import IconEntypo from "react-native-vector-icons/Entypo";
// import IconOctions from "react-native-vector-icons/Octicons";
// import IconEvilIcons from "react-native-vector-icons/EvilIcons";
// import IconIonicons from "react-native-vector-icons/Ionicons";
// import IconFontAwesome from "react-native-vector-icons/FontAwesome";
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from "react-native-responsive-screen";
// import ImageSlider from "./ImageSlider";

// type CommentProp = PropsWithChildren<{
//   username: string;
//   isEditingTask: boolean;
//   closeEditModal(): void;
//   saveEditedTask(): void;
//   changeEdittedTask(text: string): void;
// }>;

// const Post = () => {
//   const images = [
//     {
//       type: "image",
//       url: "https://i.pinimg.com/236x/09/66/4f/09664f3441de659f26bf604a2f1f8f43.jpg",
//     },
//     {
//       type: "image",
//       url: "https://i.pinimg.com/236x/28/b9/43/28b94382c8bea2d56afbabe1369d3b68.jpg",
//     },
//     {
//       type: "image",
//       url: "https://i.pinimg.com/564x/9c/40/ac/9c40acb5931b72b8ace4cb446ee0d068.jpg",
//     },
//     {
//       type: "image",
//       url: "https://i.pinimg.com/236x/0d/a7/3b/0da73b6592ba04b63385c12280d1bf6a.jpg",
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       <View style={styles.headerWrapper}>
//         <View style={styles.headerLeftWrapper}>
//           <Image
//             style={styles.profileThumb}
//             source={require("../assets/images/face.jpeg")}
//           />
//           <Text style={styles.headerTitle}> Catherine</Text>
//         </View>
//         <TouchableOpacity>
//           <IconEntypo
//             style={styles.icon}
//             name="dots-three-vertical"
//             size={wp("5%")}
//             color="#000000"
//           />
//         </TouchableOpacity>
//       </View>
//       <View>
//         <ImageSlider mediaList={images} />
//       </View>
//       <View style={styles.feedImageFooter}>
//         <View style={styles.feddimageFooterLeftWrapper}>
//           <TouchableOpacity>
//             <View style={styles.icon}>
//               <IconIonicons name="heart-outline" size={wp("7%")} />
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.icon}>
//               <IconEvilIcons name="comment" size={wp("8%")} />
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <View style={styles.icon}>
//               <IconIonicons name="paper-plane-outline" size={wp("7%")} />
//             </View>
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity>
//           <View style={styles.icon}>
//             <IconFontAwesome name="bookmark-o" size={wp("7%")} />
//           </View>
//         </TouchableOpacity>
//       </View>
//       {/* <View style={styles.underLineWRapper}>
//         <View style={styles.underLine} />
//       </View> */}
//       <View style={styles.likesAndCommentsWrapper}>
//         <Text style={styles.likesTitle}> 1,124 Likes</Text>
//         <Text style={styles.headerTitle}> My new wallpaper</Text>
//         <Text style={styles.likesTitle}> Missing Summary </Text>
//       </View>
//     </View>
//   );
// };

// export default Post;

// export const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//   },
//   profileThumb: {
//     width: 50,
//     height: 50,
//     borderRadius: 50,
//   },
//   headerWrapper: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: 10,
//   },
//   icon: {
//     width: 40,
//     height: 40,
//     justifyContent: "center",
//     paddingLeft: hp("1%"),
//     paddingTop: hp("2%"),
//   },
//   headerLeftWrapper: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//   },
//   feedImage: {
//     width: "100%",
//     height: "60%",
//   },
//   feedImageFooter: {
//     padding: 10,
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   feddimageFooterLeftWrapper: {
//     flexDirection: "row",
//   },
//   underLine: {
//     height: 1,
//     backgroundColor: "gray",
//   },
//   underLineWRapper: {
//     marginLeft: 10,
//     marginRight: 10,
//   },
//   likesImage: {
//     width: 25,
//     height: 25,
//   },
//   likesAndCommentsWrapper: {
//     padding: hp("1%"),
//   },
//   likesTitle: {
//     fontSize: 15,
//     fontWeight: "600",
//   },
//   imgeContainer: {
//     width: "100%",
//     height: "60%",
//     resizeMode: "cover",
//   },
//   dotSlider: {
//     flexDirection: "row",
//     position: "absolute",
//     bottom: 0,
//     alignSelf: "center",
//   },
// });

import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

const Comment = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default Comment;
