import { Image, StyleSheet, View } from "react-native";

export default function Photo() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/icon.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    borderColor: "blue",
    // borderWidth: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    aspectRatio: 1,
    height: 350,
  },
});
