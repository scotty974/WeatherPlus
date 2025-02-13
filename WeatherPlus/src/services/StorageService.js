import AsyncStorage from "@react-native-async-storage/async-storage";
const TOKEN_KEY = "token";
export const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.log("Erreur d'enregistrement du token", error);
  }
};

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.log("Erreur de recuperation du token", error);
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.log("Erreur de suppression du token", error);
  }
};
