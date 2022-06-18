import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>JBF Photo Gallery</Text>
        <Image style={styles.userImage} source={require("./assets/icon.png")} />
      </View>
      <ScrollView>
        <View style={styles.galleryRow}>
          <Text style={styles.galleryRowHeader}>June</Text>
          <View style={styles.imageWrap}>
            <Image
              style={styles.galleryImage}
              source={require("./assets/icon.png")}
            />
            <Image
              style={styles.galleryImage}
              source={require("./assets/icon.png")}
            />
            <Image
              style={styles.galleryImage}
              source={require("./assets/icon.png")}
            />
            <Image
              style={styles.galleryImage}
              source={require("./assets/icon.png")}
            />
          </View>
        </View>
        <View style={styles.galleryRow}>
          <Text style={styles.galleryRowHeader}>May</Text>
          <View style={styles.imageWrap}>
            <Image
              style={styles.galleryImage}
              source={require("./assets/icon.png")}
            />
            <Image
              style={styles.galleryImage}
              source={require("./assets/icon.png")}
            />
            <Image
              style={styles.galleryImage}
              source={require("./assets/icon.png")}
            />
            <Image
              style={styles.galleryImage}
              source={require("./assets/icon.png")}
            />
            <Image
              style={styles.galleryImage}
              source={require("./assets/icon.png")}
            />
          </View>
        </View>
        <View style={styles.galleryRow}>
          <Text style={styles.galleryRowHeader}>April</Text>
          <View style={styles.imageWrap}>
            <Image
              style={styles.galleryImage}
              source={require("./assets/icon.png")}
            />
            <Image
              style={styles.galleryImage}
              source={require("./assets/icon.png")}
            />
            <Image
              style={styles.galleryImage}
              source={require("./assets/icon.png")}
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
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
