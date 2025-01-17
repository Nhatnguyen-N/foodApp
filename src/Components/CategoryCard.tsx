import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";

interface CategoryParams {
  details: {
    _id?: string;
    name?: string;
    image?: string;
  };
  catProps: {
    activeCat?: string;
    onPressCat?: () => void;
  };
}
const CategoryCard = ({ details, catProps }: CategoryParams) => {
  let isActive = details._id == catProps.activeCat;
  let borderColor = isActive ? "orange" : "gray";
  let bgColor = isActive ? "orange" : "black";
  let textColor = isActive ? "orange" : "white";

  return (
    <View>
      <Pressable
        style={styles.container}
        key={details._id}
        onPress={catProps.onPressCat}
      >
        <View
          style={[
            styles.imageContainer,
            { backgroundColor: bgColor, borderColor: borderColor },
          ]}
        >
          <Image
            source={{ uri: details?.image }}
            style={{ width: 55, height: 55, resizeMode: "contain" }}
          />
        </View>
        <Text style={[styles.catName, { color: textColor }]}>
          {details?.name}
        </Text>
      </Pressable>
    </View>
  );
};

export default CategoryCard;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 3,
    margin: 3,
  },
  imageContainer: {
    borderRadius: 20,
    padding: 3,
  },
  catName: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
