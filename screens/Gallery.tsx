import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DataStore, Storage } from "aws-amplify";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { RootStackParamList } from "../App";
import GalleryRow from "../components/GalleryRow";
import { Photo } from "../src/models";

type Props = NativeStackScreenProps<RootStackParamList, "Gallery">;

export default function Gallery({ navigation }: Props) {
  useEffect(() => {
    const getPhotos = async () => {
      const photos = await DataStore.query(Photo);
      console.log(photos);
      try {
        // const fileList = await Storage.list("", { level: "private" });
        // console.log("File List:", fileList);
        // const s3URL = await Storage.get("sample-photo.jpeg", {
        //   level: "private",
        //   contentType: "image/jpeg",
        // });
        // console.log(s3URL);
      } catch (error) {
        console.log("Error retrieving S3 URL", error);
      }
    };
    getPhotos();
  });
  return (
    <View style={styles.container}>
      <ScrollView>
        <GalleryRow
          title="June"
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
