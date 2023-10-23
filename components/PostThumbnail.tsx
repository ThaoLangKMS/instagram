import React from "react";
import { PostType } from "../model/PostType";
import IconEvilIcons from "react-native-vector-icons/EvilIcons";
import IconIonicons from "react-native-vector-icons/Ionicons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { StyleSheet } from "react-native";

interface PostThumbnailProps {
  post: PostType;
}

const PostThumbnail: React.FC<PostThumbnailProps> = ({ post }) => {
  return (
    <div className="relative group cursor-pointer transition duration-300 transform hover:scale-105">
      <div className="group-hover:bg-black group-hover:bg-opacity-70 absolute top-0 left-0 w-full h-full z-10 hidden flex-col justify-center items-center opacity-0">
        <div className="text-white text-lg font-semibold">
          <span className="mr-2">
            <IconIonicons
              name="heart-outline"
              size={wp("6%")}
              style={styles.icon}
            />
            {post.numLikes}
          </span>
          <span>
            <IconEvilIcons name="comment" size={wp("7%")} />
            {post.numComments}
          </span>
        </div>
      </div>
      {post.medias[0].type == "image" ? (
        <img src={post.medias[0].url} alt="Post" className="w-full" />
      ) : (
        <video src={post.medias[0].url} className="w-full hidden" controls />
      )}
    </div>
  );
};

export const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    paddingLeft: hp("1%"),
    paddingTop: hp("2%"),
  },
});

export default PostThumbnail;
