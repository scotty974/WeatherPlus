import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AuthForm from "../components/form/Form";

function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSignUp ? "Inscription" : "Connexion"}</Text>
      <AuthForm isSignUp={isSignUp} />

      {/* Bouton pour basculer entre Connexion et Inscription */}
      <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
        <Text style={styles.text}>
          {isSignUp ? "Déjà un compte ?" : "Pas encore de compte ?"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#6c63ff",
    alignSelf: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
  },
  text: {
    color: "#6c63ff",
    textDecorationLine: "underline",
  },
});
