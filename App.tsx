import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Gallery from "./screens/Gallery";
import Photo from "./screens/Photo";

import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { useState } from "react";
import Login from "./screens/Login";
import { AuthContext, IAuthContext } from "./AuthContext";

Amplify.configure(awsconfig);

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    signOut: async () => {},
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
                options={{ title: "Photo Gallery" }}
              />
              <Stack.Screen name="Photo" component={Photo} />
            </>
          )}
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
}
