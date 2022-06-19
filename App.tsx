import { useState } from "react";
import { Pressable, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext, IAuthContext } from "./src/AuthContext";
import Gallery from "./src/screens/Gallery";
import Photo from "./src/screens/Photo";
import Login from "./src/screens/Login";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";

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
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: "Photo Gallery" }}
            />
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
