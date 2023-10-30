import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
	useFonts,
	Overpass_300Light,
	Overpass_400Regular,
	Overpass_600SemiBold,
	Overpass_700Bold,
} from "@expo-google-fonts/overpass";
import Welcome from "./src/screens/Welcome";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
