import { View, Text, Image, StyleSheet, Pressable } from "react-native";

export default function GalleryRow({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <View style={styles.galleryRow}>
      <Text style={styles.galleryRowHeader}>{title}</Text>
      <View style={styles.imageWrap}>
        <Pressable onPress={onPress}>
          <Image
            style={styles.galleryImage}
            source={require("../assets/icon.png")}
          />
        </Pressable>
        <Pressable onPress={onPress}>
          <Image
            style={styles.galleryImage}
            source={require("../assets/icon.png")}
          />
        </Pressable>
        <Pressable onPress={onPress}>
          <Image
            style={styles.galleryImage}
            source={require("../assets/icon.png")}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  galleryRow: {
    borderColor: "black",
    // borderWidth: 1,
  },
  galleryRowHeader: {
    fontSize: 24,
    margin: 8,
    fontWeight: "bold",
  },
  imageWrap: {
    width: "100%",
    borderColor: "red",
    // borderWidth: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  galleryImage: {
    height: 116,
    width: 116,
    borderColor: "blue",
    // borderWidth: 2,
    margin: 4,
  },
});
