import {
  View,
  Text,
  SafeAreaView,
  Platform,
  Animated,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { RootStackScreenProps } from "../Navigation/RootNavigation";
import { Ionicons } from "@expo/vector-icons";
import { menuItems, menus } from "../Data/RestaurantAllData";
import RestaurantInfo from "../Components/RestaurantInfo";

type Props = {};

const RestaurantScreen = ({
  navigation,
  route,
}: RootStackScreenProps<"restaurantDisplay">) => {
  const { foodItemParams } = route.params;
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const aninateHeader = {
    transform: [
      {
        translateY: scrollY.interpolate({
          inputRange: [0, 200],
          outputRange: [-200, 0],
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
        <Animated.View style={[{ zIndex: 100 }, aninateHeader]}>
          <Animated.View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 7,
              }}
            >
              <Pressable onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={30} color={"#ffff"} />
              </Pressable>
              <View>
                <Text style={{ fontSize: 14, color: "#ffff" }}>
                  {foodItemParams?.name}
                </Text>
              </View>
              <Pressable>
                <Ionicons
                  name="heart"
                  color={"#ffff"}
                  size={24}
                  style={{ padding: 5 }}
                />
              </Pressable>
            </View>
          </Animated.View>
        </Animated.View>
        <Animated.View>
          <Animated.ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 5 }}
          >
            {menus
              .filter((menU) => menU.restaurantId === foodItemParams._id)
              .map((menuList, index) => (
                <Pressable key={index} style={{ marginHorizontal: 10 }}>
                  <Text
                    style={{
                      color: "#ffff",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    {menuList?.menuName}
                  </Text>
                </Pressable>
              ))}
          </Animated.ScrollView>
        </Animated.View>
        <Animated.View>
          <Animated.View>
            <Pressable
              style={{
                marginLeft: 12,
                zIndex: 990,
                position: "absolute",
                top: 20,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,20,0.7)",
                width: 40,
                height: 40,
                borderRadius: 20,
              }}
            >
              <Ionicons name="chevron-back" size={25} color={"#fff"} />
            </Pressable>

            <Pressable
              style={{
                marginRight: 12,
                zIndex: 990,
                position: "absolute",
                top: 20,
                right: 0,

                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,20,0.7)",
                width: 40,
                height: 40,
                borderRadius: 20,
              }}
            >
              <Ionicons name="share-outline" size={25} color={"#fff"} />
            </Pressable>
          </Animated.View>
          <Animated.Image
            source={{ uri: foodItemParams?.imageUrl }}
            style={{
              width: "100%",
              height: 210,
              resizeMode: "cover",
              position: "absolute",
              zIndex: -1,
            }}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 120, paddingBottom: 20 }}
            style={{ zIndex: -1 }}
            onScroll={(e) => {
              const newOffSetY = e.nativeEvent.contentOffset.y;
              // scrollOffsetY.setValue(offSetY);
              setScrollY(new Animated.Value(newOffSetY));
            }}
            scrollEventThrottle={16}
          >
            <View style={{ backgroundColor: "#000", borderTopRightRadius: 70 }}>
              <View style={{ marginTop: 20, marginHorizontal: 10 }}>
                <Text
                  style={{ fontSize: 15, color: "#fff", fontWeight: "bold" }}
                >
                  {foodItemParams?.name}
                </Text>
              </View>
              <RestaurantInfo
                imageUrl="https://res.cloudinary.com/dsq3oy0yz/image/upload/v1737028518/rating_regular_caxad7.png"
                info={{
                  restaurantName: foodItemParams?.name,
                  deliveryTimeFrom: foodItemParams?.deliveryTimeFrom,
                  deliveryTimeTo: foodItemParams?.deliveryTimeTo,
                  deliveryFee: "Free",
                  deliveryPrice: 400,
                }}
              />
              <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                {menus
                  .filter((menU) => menU.restaurantId === foodItemParams._id)
                  .map((menuList, index) => (
                    <View key={index}>
                      <View
                        style={{ marginTop: 50, marginBottom: 10 }}
                        key={menuList._id}
                      >
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 18,
                            fontWeight: "bold",
                          }}
                        >
                          {menuList.menuName}
                        </Text>
                      </View>
                      <View>
                        {menuItems
                          .filter((itemobj) => itemobj.menuId === menuList._id)
                          .map((item, index) => (
                            <View
                              style={{
                                backgroundColor: "#000",
                                marginVertical: 3,
                                paddingTop: 10,
                                borderBottomColor: "#F0F0F0",
                                borderWidth: 2,
                              }}
                              key={index}
                            >
                              <Pressable
                                style={{
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Image
                                  source={{ uri: item?.image }}
                                  style={{
                                    width: 100,
                                    height: 100,
                                    resizeMode: "contain",
                                  }}
                                />
                                <Text
                                  numberOfLines={3}
                                  style={{
                                    width: 120,
                                    flexWrap: "wrap",
                                    fontSize: 16,
                                    color: "#fff",
                                    alignItems: "center",
                                  }}
                                >
                                  {item?.name}
                                </Text>
                                <Text style={{ fontSize: 16, color: "#ffff" }}>
                                  ${item?.price}.00
                                </Text>
                              </Pressable>
                            </View>
                          ))}
                      </View>
                    </View>
                  ))}
              </View>
            </View>
          </ScrollView>
        </Animated.View>
      </SafeAreaView>
    </>
  );
};

export default RestaurantScreen;
