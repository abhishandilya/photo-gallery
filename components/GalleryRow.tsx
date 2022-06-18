import { View, Text, Image, StyleSheet } from "react-native";

export default function GalleryRow({ title }: { title: string }) {
  return (
    <View style={styles.galleryRow}>
      <Text style={styles.galleryRowHeader}>{title}</Text>
      <View style={styles.imageWrap}>
        <Image
          style={styles.galleryImage}
          source={require("../assets/icon.png")}
        />
        <Image
          style={styles.galleryImage}
          source={require("../assets/icon.png")}
        />
        <Image
          style={styles.galleryImage}
          source={require("../assets/icon.png")}
        />
        <Image
          style={styles.galleryImage}
          source={require("../assets/icon.png")}
        />
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
