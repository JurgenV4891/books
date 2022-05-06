import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Action = (props) => {
  const { container, preview, previewContent, price, priceContent } = styles;
  return (
    <View style={container}>
      <TouchableOpacity onPress={() => {}} style={price}>
        <Text style={priceContent}>19.99€</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={preview}>
        <Text style={previewContent}>Aperçu Gratuit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 71,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 27,
  },
  price: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 48,
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  priceContent: {
    fontFamily: "Montserrat-Black",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 18,
  },
  preview: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 48,
    backgroundColor: "#ef8262",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  previewContent: {
    color: "white",
    fontFamily: "Gilroy-Bold",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 16,
  },
});

export default Action;
