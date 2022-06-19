import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { AuthContext } from "../AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthContext.Consumer>
      {({ signIn }) => (
        <View style={styles.form}>
          <Text>Email</Text>
          <TextInput
            onChangeText={(e) => {
              setEmail(e);
            }}
            value={email}
            style={styles.textInput}
          />

          <Text>Password</Text>
          <TextInput
            onChangeText={(e) => {
              setPassword(e);
            }}
            value={password}
            style={styles.textInput}
            secureTextEntry={true}
          />

          <Pressable
            onPress={async () => {
              await signIn(email, password);
            }}
          >
            <Text style={styles.loginButton}>Log in</Text>
          </Pressable>
        </View>
      )}
    </AuthContext.Consumer>
  );
}

const styles = StyleSheet.create({
  form: {
    margin: 16,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 8,
    height: 40,
    paddingLeft: 8,
  },
  loginButton: {
    backgroundColor: "gray",
    color: "white",
    padding: 8,
    fontSize: 16,
  },
});
