import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Gallery from "./screens/Gallery";
import Photo from "./screens/Photo";

import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { useEffect } from "react";

Amplify.configure(awsconfig);

export type RootStackParamList = {
  Gallery: {};
  Photo: {};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gallery">
        <Stack.Screen
          name="Gallery"
          component={Gallery}
          options={{ title: "Photo Gallery" }}
        />
        <Stack.Screen name="Photo" component={Photo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
