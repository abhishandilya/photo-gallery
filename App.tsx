import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Gallery from "./screens/Gallery";
import Photo from "./screens/Photo";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { useState } from "react";
import Login from "./screens/Login";
import { AuthContext, IAuthContext } from "./AuthContext";
import { Pressable, Text } from "react-native";

Amplify.configure(awsconfig);

export type RootStackParamList = {
  Login: {};
  Gallery: {};
  Photo: {};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signOut = async () => {
    try {
      await Auth.signOut();
      setIsLoggedIn(false);
    } catch (error) {
      console.log("Error signing out", error);
    }
  };

  const authContext: IAuthContext = {
    signIn: async (username, password) => {
      try {
        await Auth.signIn(username, password);
        setIsLoggedIn(true);
        console.log("Signed in successfully!");
      } catch (error) {
        setIsLoggedIn(false);
        console.log("Error signing in", error);
      }
    },
    signOut: signOut,
  };

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        <Stack.Navigator>
          {!isLoggedIn ? (
            <Stack.Screen name="Login" component={Login} />
          ) : (
            <>
              <Stack.Screen
                name="Gallery"
                component={Gallery}
                options={{
                  title: "Photo Gallery",
                  headerRight: () => (
                    <Pressable onPress={signOut}>
                      <Text>Log out</Text>
                    </Pressable>
                  ),
                }}
              />
              <Stack.Screen name="Photo" component={Photo} />
            </>
          )}
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
}
