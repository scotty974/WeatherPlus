import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
function HomeScreen({navigation}) {
    return (  <View style={styles.container}>
          <View style={styles.header}>
            <Image 
              source={require('../../assets/undraw_nature.png')} 
              style={styles.backgroundImage}
              resizeMode="contain"
            />
            <Text style={styles.title}>WeatherPlus</Text>
          </View>
          
          {/* Bouton stylisé */}
          <TouchableOpacity style={styles.cta} onPress={() => navigation.navigate('Auth')}>
            <Text style={styles.ctaText}>Commencer</Text>
          </TouchableOpacity>
    
        </View> );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
      backgroundColor:"#fff"
    },
    header: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '30%',
    },
    backgroundImage: {
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'white',
      alignSelf: 'center',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 10,
    },
    cta: {
      backgroundColor: "#6c63ff",  // Couleur verte
      borderRadius: 10,
      width: 200,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5, // Ombre Android
    },
    ctaText: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    }
  });