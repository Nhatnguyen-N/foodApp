import {
  View,
  Text,
  SafeAreaView,
  Platform,
  ScrollView,
  Animated,
  Pressable,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { RootStackScreenProps } from "../Navigation/RootNavigation";
import HomeHeaders from "../Components/Headers/HomeHeaders";
import { restaurants, restuarantCategories } from "../Data/RestaurantAllData";
import RestaurantCard from "../Components/RestaurantCard";
import CategoryCard from "../Components/CategoryCard";
import { Ionicons } from "@expo/vector-icons";

type Props = {};
const MaxHeaderHeight = 130;
const MinHeaderHeight = 40;
const HomeSreen = ({ navigation, route }: RootStackScreenProps<"home">) => {
  const [deliveryMethod, setDeliveryMethod] = useState<boolean>(false);
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const [activeCat, setActiveCat] = useState<string>("");

  const animateCatHeight = scrollOffsetY.interpolate({
    inputRange: [50, 100],
    outputRange: [MaxHeaderHeight, MinHeaderHeight],
    extrapolate: "clamp",
  });
  const animateCategoies = {
    transform: [
      {
        translateY: scrollOffsetY?.interpolate({
          inputRange: [50, 100],
          outputRange: [0, -90],
          extrapolate: "clamp",
        }),
      },
    ],
  };
  const animateFilters = {
    transform: [
      {
        translateY: scrollOffsetY?.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -10],
          extrapolate: "clamp",
        }),
      },
    ],
  };
  return (
    <>
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "android" ? 40 : 0,
          flex: 1,
          backgroundColor: "#000",
        }}
      >
        <HomeHeaders
          deliveryMethod={deliveryMethod}
          setDeliveryMethod={() => setDeliveryMethod(!deliveryMethod)}
          scrollOffsetY={scrollOffsetY}
        />
        <Animated.View style={{ height: animateCatHeight }}>
          <Animated.ScrollView>
            <Animated.ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10 }}
              style={[animateCategoies]}
            >
              {restuarantCategories.map((cat, index) => (
                <CategoryCard
                  key={index}
                  details={{
                    image: cat.imageUrl,
                    name: cat.name,
                    _id: cat._id,
                  }}
                  catProps={{
                    activeCat: activeCat,
                    onPressCat: () => setActiveCat(cat?._id),
                  }}
                />
              ))}
            </Animated.ScrollView>
          </Animated.ScrollView>
          <View>
            <Animated.ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, paddingHorizontal: 10 }}
              style={[animateFilters]}
            >
              <Pressable
                style={{
                  backgroundColor: "rgba(100,100,100,0.4)",
                  // backgroundColor: "gray",
                  borderWidth: 1,
                  borderRadius: 12,
                  padding: 7,
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Promotions
                </Text>
              </Pressable>

              <Pressable
                style={{
                  backgroundColor: "rgba(100,100,100,0.4)",
                  // backgroundColor: "gray",
                  borderWidth: 1,
                  borderRadius: 12,
                  padding: 7,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Food Type
                </Text>
                <Ionicons name="chevron-down" size={16} color={"#fff"} />
              </Pressable>

              <Pressable
                style={{
                  backgroundColor: "rgba(100,100,100,0.4)",
                  // backgroundColor: "gray",
                  borderWidth: 1,
                  borderRadius: 12,
                  padding: 7,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    color: "#fff",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Sort By
                </Text>
                <Ionicons name="chevron-down" size={16} color={"#fff"} />
              </Pressable>
            </Animated.ScrollView>
          </View>
        </Animated.View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={(e) => {
            const offSetY = e.nativeEvent.contentOffset.y;
            scrollOffsetY.setValue(offSetY);
          }}
          scrollEventThrottle={16}
        >
          <ScrollView
            style={{
              marginTop: 4,
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              marginHorizontal: 10,
            }}
          >
            {restaurants.map((rest, index) => (
              <RestaurantCard
                key={index}
                details={{
                  image: rest.imageUrl,
                  name: rest.name,
                  _id: rest._id,
                  foodType: rest.foodType,
                  deliveryMethod: rest.deliveryMethod,
                  deliveryTimeFrom: rest.deliveryTimeFrom,
                  deliveryTimeTo: rest.deliveryTimeTo,
                  ratingCount: rest.ratingCount,
                  onPress: () => {
                    navigation.navigate("restaurantDisplay", {
                      foodItemParams: rest,
                    });
                  },
                }}
              />
            ))}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeSreen;
