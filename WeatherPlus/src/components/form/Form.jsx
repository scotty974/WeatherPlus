import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useState, useContext } from "react";
import { login, register } from "../../services/AuthService";
import { storeToken } from "../../services/StorageService";
import { AuthContext } from "../../context/AuthContext";

function AuthForm({ isSignUp, navigation }) {
  const { setUserToken } = useContext(AuthContext);
  const [data, setData] = useState({ email: "", password: "" });

  const handleAuth = async () => {
    try {
      let resp;
      if (isSignUp) {
        resp = await register(data);
        if (resp?.success) {
          console.log("Inscription réussie !");
          resp = await login(data); // Connexion automatique après inscription
        }
      } else {
        resp = await login(data);
      }

      if (resp?.token) {
        await storeToken(resp.token);
        setUserToken(resp.token); // Mise à jour du contexte

        console.log("Utilisateur connecté !");
        navigation.reset({
          index: 0,
          routes: [{ name: "Weather" }], // Réinitialisation de la navigation
        });
      }
    } catch (error) {
      console.error("Erreur d'authentification :", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setData({ ...data, email: text })}
        />
      </View>

      <View style={styles.box}>
        <Text style={styles.label}>Mot de passe</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setData({ ...data, password: text })}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAuth}>
        <Text style={styles.buttonText}>
          {isSignUp ? "S'inscrire" : "Se connecter"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  box: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: 250,
    height: 50,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  button: {
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#6c63ff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
