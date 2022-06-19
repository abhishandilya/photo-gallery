import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import { RootStackParamList } from "../App";
import GalleryRow from "../components/GalleryRow";

type Props = NativeStackScreenProps<RootStackParamList, "Gallery">;

export default function Gallery({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <GalleryRow
          title="June"
          onPress={() => {
            navigation.navigate<"Photo">("Photo");
          }}
        />
        <GalleryRow
          title="May"
          onPress={() => {
            navigation.navigate<"Photo">("Photo");
          }}
        />
        <GalleryRow
          title="April"
          onPress={() => {
            navigation.navigate<"Photo">("Photo");
          }}
        />
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
