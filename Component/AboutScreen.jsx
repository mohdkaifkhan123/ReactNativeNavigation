import React, { Component } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
    </View>
  );
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

