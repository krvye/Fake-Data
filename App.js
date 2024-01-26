import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import generateFakeData from "./services/firebase/readData";
import resetData from "./services/firebase/resetDatabase";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={generateFakeData}>
        <Text style={styles.buttonText}>Generate</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resetButton} onPress={resetData}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 210,
    height: 80,
    backgroundColor: "gray",
    borderRadius: 35,
    padding: 10,
  },
  header: {
    fontSize: 20,
    backgroundColor: "blue",
  },
  resetButton: {
    width: 210,
    height: 80,
    backgroundColor: "darkred",
    borderRadius: 35,
    padding: 10,
    marginTop: 150,
  },
  resetButtonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
  },
});
