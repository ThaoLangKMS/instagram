import { StyleSheet } from "react-native";

type ImagePickerProps = {
  placeholderImageSource: string;
  selectedImage: string;
};

export default function ImageViewer(props: ImagePickerProps) {
  const imageSource = props.selectedImage
    ? { uri: props.selectedImage }
    : props.placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    padding: 1,
  },
});
