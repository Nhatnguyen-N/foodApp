import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";

interface RestaurantParams {
  details: {
    _id: string;
    name: string;
    image: string;
    foodType?: string;
    ratingCount?: number;
    deliveryTimeFrom?: number;
    deliveryTimeTo?: number;
    deliveryMethod?: string;
    selectedRestaurant?: string;
    menuType?: string;
    onPress?: () => void;
  };
  // restStyleProps: {
  //   width?: number;
  //   resizeMode?: "contain" | "cover" | "stretch";
  // };
}

const RestaurantCard = ({ details }: RestaurantParams) => {
  return (
    <View style={{ backgroundColor: "#000" }}>
      <Pressable
        style={styles.imageContainer}
        key={details._id}
        onPress={details?.onPress}
      >
        <View>
          <Pressable
            key={details._id}
            onPress={details.onPress}
            style={{ alignItems: "center" }}
          >
            <Image
              source={{ uri: details.image }}
              style={{
                resizeMode: "cover",
                height: 100,
                width: "100%",
                borderRadius: 20,
              }}
            />
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 50,
  },
  catName: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    marginHorizontal: 5,
  },
});
