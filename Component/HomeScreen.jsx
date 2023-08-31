import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
      fontWeight:'600',
      fontSize: 25,
  },
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
  }
  
  })