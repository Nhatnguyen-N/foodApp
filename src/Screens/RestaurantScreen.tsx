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
import React, { useRef, useState } from "react";
import { RootStackScreenProps } from "../Navigation/RootNavigation";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { menuItems, menus } from "../Data/RestaurantAllData";
import RestaurantInfo from "../Components/RestaurantInfo";
import { useDispatch, useSelector } from "react-redux";
import { CartState, menuItemParams } from "../TypesCheck/typesCheckParams";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../Redux/CartReducer";
import Modal from "react-native-modal";

type Props = {};

const RestaurantScreen = ({
  navigation,
  route,
}: RootStackScreenProps<"restaurantDisplay">) => {
  const { foodItemParams } = route.params;
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const lastOffsetY = useRef(0);
  const [scaleImage, setScaleImage] = useState(new Animated.Value(1));
  const cart = useSelector((state: CartState) => state.cart.cart);
  const total = cart
    ?.map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);

  const [additivesModal, setAdditivesModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const addItemToCart = (itemObj: menuItemParams) => {
    const findItem = cart?.find((item) => item._id === itemObj._id);
    if (findItem) {
      dispatch(incrementQuantity(itemObj));
    } else {
      if (itemObj.additives?.length !== undefined) {
        setAdditivesModal(true);
      } else {
        dispatch(addToCart(itemObj));
      }
    }
  };
  const decreaseQ = (itemObj: menuItemParams) => {
    const findItem = cart?.find((item) => item._id === itemObj._id);
    if (findItem?.quantity === 1) {
      dispatch(removeFromCart(itemObj));
    } else {
      dispatch(decrementQuantity(itemObj));
    }
  };

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
  const aHeaderBgColor = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: ["black", "black"],
    extrapolate: "clamp",
  });

  const aHeaderHt = scrollY.interpolate({
    inputRange: [100, 200],
    outputRange: [0, 50],
    extrapolate: "clamp",
  });

  const aninateMenus = {
    transform: [
      {
        translateY: scrollY.interpolate({
          inputRange: [150, 350],
          outputRange: [-50, 0],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  const aMenuBgColor = scrollY.interpolate({
    inputRange: [100, 100],
    outputRange: ["black", "black"],
    extrapolate: "clamp",
  });

  const aMenuHt = scrollY.interpolate({
    inputRange: [150, 200],
    outputRange: [0, 32],
    extrapolate: "clamp",
  });

  const aninateFloatingHd = {
    transform: [
      {
        translateY: scrollY.interpolate({
          inputRange: [90, 200],
          outputRange: [0, -60],
          extrapolate: "clamp",
        }),
      },
    ],
  };
  const aninateFloatingHd2 = {
    transform: [
      {
        translateY: scrollY.interpolate({
          inputRange: [120, 200],
          outputRange: [0, -60],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  const animateOpacity = {
    opacity: scrollY.interpolate({
      inputRange: [170, 180],
      outputRange: [1, 0],
      extrapolate: "clamp",
    }),
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
          <Animated.View
            style={[{ backgroundColor: aHeaderBgColor, height: aHeaderHt }]}
          >
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

        <Animated.View
          style={[
            { backgroundColor: aMenuBgColor, height: aMenuHt, zIndex: 99 },
            aninateMenus,
          ]}
        >
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
        <Animated.View style={[aninateFloatingHd]}>
          <Animated.View style={[aninateFloatingHd2, animateOpacity]}>
            <Pressable
              onPress={() => navigation.goBack()}
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
              transform: [{ scale: scaleImage }],
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
              lastOffsetY.current = newOffSetY;
              if (lastOffsetY.current < 0) {
                const scale = 1 - newOffSetY / 150;
                setScaleImage(new Animated.Value(scale));
              } else {
                setScaleImage(new Animated.Value(1));
              }
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
                                {cart?.map(
                                  (cartItem, index) =>
                                    cartItem._id === item._id && (
                                      <View key={index}>
                                        <Text
                                          style={{
                                            color: "#fff",
                                            fontSize: 15,
                                            fontWeight: "bold",
                                          }}
                                        >
                                          {cartItem.quantity}
                                        </Text>
                                      </View>
                                    )
                                )}
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
                              <Pressable
                                style={{
                                  flexDirection: "row",
                                  alignItems: "center",
                                  marginTop: -20,
                                  marginBottom: 8,
                                }}
                              >
                                <Pressable style={{ flex: 1 }}>
                                  {cart?.map((cartItem, index) => (
                                    <View key={index}>
                                      {cartItem._id === item._id && (
                                        <Pressable
                                          onPress={() => decreaseQ(item)}
                                          style={{
                                            backgroundColor: "green",
                                            width: 20,
                                            borderRadius: 99,
                                          }}
                                        >
                                          <AntDesign
                                            name="minus"
                                            size={20}
                                            color={"#fff"}
                                            style={{
                                              fontWeight: "bold",
                                            }}
                                          />
                                        </Pressable>
                                      )}
                                    </View>
                                  ))}
                                </Pressable>
                                {item.additives?.length !== undefined ? (
                                  <Pressable
                                    // onPress={}
                                    style={{
                                      backgroundColor: "green",
                                      width: 20,
                                      borderRadius: 99,
                                    }}
                                  >
                                    <AntDesign
                                      name="plus"
                                      size={20}
                                      color={"#fff"}
                                      style={{
                                        fontWeight: "bold",
                                      }}
                                    />
                                  </Pressable>
                                ) : (
                                  <Pressable
                                    onPress={() =>
                                      addItemToCart({ ...item, quantity: 1 })
                                    }
                                    style={{
                                      backgroundColor: "green",
                                      width: 20,
                                      borderRadius: 99,
                                    }}
                                  >
                                    <AntDesign
                                      name="plus"
                                      size={20}
                                      color={"#fff"}
                                      style={{
                                        fontWeight: "bold",
                                      }}
                                    />
                                  </Pressable>
                                )}
                              </Pressable>
                            </View>
                          ))}
                      </View>
                    </View>
                  ))}
              </View>
            </View>
          </ScrollView>
          {total > 0 && (
            <Pressable
              // onPress={}
              style={{
                position: "absolute",
                backgroundColor: "rgba(50,120,80,1)",
                width: "90%",
                height: 50,
                zIndex: 1,
                marginHorizontal: 20,
                bottom: 40,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 99,
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  color: "#fff",
                  fontWeight: "bold",
                  alignItems: "center",
                }}
              >
                View Cart ${total}
              </Text>
            </Pressable>
          )}
        </Animated.View>
      </SafeAreaView>
      <Modal
        isVisible={additivesModal}
        onBackdropPress={() => setAdditivesModal(!additivesModal)}
      >
        <View></View>
      </Modal>
    </>
  );
};

export default RestaurantScreen;
