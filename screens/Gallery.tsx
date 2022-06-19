import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import GalleryRow from "../components/GalleryRow";

export default function Gallery() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <GalleryRow title="June" />
        <GalleryRow title="May" />
        <GalleryRow title="April" />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
    alignItems: "center",
  },
  topBar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    // borderColor: "red", // TODO: use theme color
    // borderWidth: 2,
  },
});
