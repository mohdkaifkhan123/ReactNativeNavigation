import React, { Component } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

export default function ContactScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.text}>Contact Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
text: {
    fontWeight:'600',
    fontSize: 25,
},
})


