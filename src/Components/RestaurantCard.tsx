import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

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
                height: 200,
                width: "100%",
                borderRadius: 20,
              }}
            />
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              alignItems: "center",
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                color: "#fff",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {details?.name}
            </Text>
            {details?.foodType && (
              <View
                style={{
                  backgroundColor: "gray",
                  borderWidth: 1,
                  borderRadius: 7,
                  padding: 4,
                  marginTop: 2,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: "bold",
                    paddingHorizontal: 5,
                  }}
                >
                  {details?.foodType}
                </Text>
              </View>
            )}
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "orange",
                borderWidth: 1,
                borderRadius: 7,
                padding: 3,
                flexDirection: "row",
              }}
            >
              <Ionicons
                name="bicycle-outline"
                color={"#000"}
                size={15}
                style={{
                  paddingRight: 3,
                }}
              />
              <Text style={{ color: "#000", fontSize: 13, fontWeight: "bold" }}>
                {details?.deliveryMethod}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 15,
                color: "#FFF",
                fontWeight: "bold",
                paddingLeft: 3,
              }}
            >
              .
            </Text>
            <Text style={{ fontSize: 13, padding: 4, color: "#FFF" }}>
              {details?.deliveryTimeFrom}-{details?.deliveryTimeTo} mins
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingHorizontal: 10,
            top: -80,
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              borderRadius: 20,
              padding: 3,
              flexDirection: "row",
            }}
          >
            <MaterialIcons
              name="thumb-up-alt"
              color={"#000"}
              size={15}
              style={{ paddingLeft: 3 }}
            />
            <Text style={{ color: "#000", fontSize: 13, fontWeight: "bold" }}>
              Like
            </Text>
            <Text style={{ color: "#000", fontSize: 13, fontWeight: "bold" }}>
              {details?.ratingCount}
            </Text>
          </View>
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
