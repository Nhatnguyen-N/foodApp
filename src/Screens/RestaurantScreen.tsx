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
import React, { useEffect, useRef, useState } from "react";
import { RootStackScreenProps } from "../Navigation/RootNavigation";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { menuItems, menus } from "../Data/RestaurantAllData";
import RestaurantInfo from "../Components/RestaurantInfo";
import { useDispatch, useSelector } from "react-redux";
import {
  additives,
  CartState,
  menuItemParams,
} from "../TypesCheck/typesCheckParams";
import {
  addToCart,
  decrementQuantity,
  emptyCart,
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
  const [additiveId, setAdditiveId] = useState<string>("");

  const [modalScrollY, setModalScrollY] = useState(new Animated.Value(0));
  const ModalOffsetValue = useRef(0);
  const [selectedAdditives, setSelectedAdditives] = useState<additives[]>([]);

  const selectedMenuItem = menuItems.find((item) => item._id === additiveId);

  console.log("cart", cart);

  const handleAdditivesModal = (id: string) => {
    setAdditiveId(id);
    setAdditivesModal(!additivesModal);
  };

  const addAdditives = (newAdditive: additives, id: string) => {
    setSelectedAdditives((preAdditives) => {
      const checkParentid = preAdditives.some(
        (item) =>
          item.parentId === newAdditive.parentId && item._id !== newAdditive._id
      );

      if (checkParentid) {
        const updatedAdditive = preAdditives.filter(
          (item) => item.parentId !== newAdditive.parentId
        );
        return [...updatedAdditive, newAdditive];
      } else {
        const isPresent = preAdditives.some(
          (item) => item.parentId === newAdditive.parentId
        );
        if (isPresent) {
          return preAdditives.filter((item) => item._id !== newAdditive._id);
        } else {
          return [...preAdditives, newAdditive];
        }
      }
    });
  };

  const dispatch = useDispatch();

  const addItemToCart = (itemObj: menuItemParams) => {
    const findItem = cart?.find((item) => item._id === itemObj._id);
    if (findItem) {
      dispatch(incrementQuantity(itemObj));
      // dispatch(emptyCart());
    } else {
      dispatch(addToCart(itemObj));
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

  const [qCount, setqCount] = useState<number>(1);
  const incQ = () => {
    setqCount((prevQuantity) => prevQuantity + 1);
  };
  const decQ = () => {
    if (qCount !== 1) {
      setqCount((prevQuantity) => prevQuantity - 1);
    }
  };

  const additiveTotal = selectedAdditives
    ?.map((item) => item?.price ?? 0)
    .reduce((curr, prev) => curr + prev, 0);
  const subTotal = additiveTotal + (selectedMenuItem?.price ?? 0);
  const itemTotal = subTotal * qCount;
  const [totalPrice, setTotalPrice] = useState<number>(itemTotal);

  useEffect(() => {
    setTotalPrice(itemTotal);
  }, [itemTotal]);

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
  //additive animations

  const animateModalHeader1 = {
    transform: [
      {
        translateY: modalScrollY.interpolate({
          inputRange: [250, 300],
          outputRange: [-10, 0],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  const animateModalHeader2 = {
    transform: [
      {
        translateY: modalScrollY.interpolate({
          inputRange: [170, 300],
          outputRange: [0, -60],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  const animateModalHeader2Ht = modalScrollY.interpolate({
    inputRange: [150, 200],
    outputRange: [0, 32],
    extrapolate: "clamp",
  });

  const animateModalHt = modalScrollY.interpolate({
    inputRange: [250, 300],
    outputRange: [0, 50],
    extrapolate: "clamp",
  });
  const animateHodalBgCol = modalScrollY.interpolate({
    inputRange: [0, 100],
    outputRange: ["black", "black"],
    extrapolate: "clamp",
  });

  const animateModalOpacity = {
    opacity: scrollY.interpolate({
      inputRange: [250, 350],
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
                                    onPress={() =>
                                      handleAdditivesModal(item._id)
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
        // style={{ alignItems: "center", width: "100%" }}
      >
        <View
          style={{
            height: "90%",
            width: 366,
            backgroundColor: "#000",
            position: "absolute",
            bottom: -20,
            left: -15,
            borderRadius: 7,
            marginBottom: 2,
          }}
        >
          <Animated.View style={[{ zIndex: 100 }, animateModalHeader1]}>
            <Animated.View
              style={[
                { backgroundColor: animateHodalBgCol, height: animateModalHt },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 7,
                  padding: 10,
                }}
              >
                <Pressable onPress={() => setAdditivesModal(!additivesModal)}>
                  <Ionicons name="close" size={30} color={"#fff"} />
                </Pressable>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 17, fontWeight: "bold", color: "#fff" }}
                  >
                    {selectedMenuItem?.name}
                  </Text>
                </View>
              </View>
            </Animated.View>
          </Animated.View>

          <Animated.View style={[{ zIndex: 1 }, animateModalHeader2]}>
            <Animated.View style={[animateModalHeader2Ht, animateModalOpacity]}>
              <Pressable
                onPress={() => setAdditivesModal(!additivesModal)}
                style={{
                  marginLeft: 12,
                  // zIndex: 2,
                  position: "absolute",
                  top: 20,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(0,0,20,0.3)",
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                }}
              >
                <Ionicons name="close" size={25} color={"#fff"} />
              </Pressable>
            </Animated.View>
          </Animated.View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 0, paddingBottom: 20 }}
            style={{ zIndex: 0 }}
            onScroll={(e) => {
              const modalNewOffSetY = e.nativeEvent.contentOffset.y;
              // scrollOffsetY.setValue(offSetY);
              setModalScrollY(new Animated.Value(modalNewOffSetY));
              ModalOffsetValue.current = modalNewOffSetY;
            }}
            scrollEventThrottle={16}
          >
            {menuItems
              .filter((menuItem) => menuItem._id === additiveId)
              .map((foodItem, index) => (
                <View key={index}>
                  <Image
                    key={foodItem._id}
                    source={{ uri: foodItem.image }}
                    style={{
                      width: "100%",
                      height: 300,
                      resizeMode: "cover",
                    }}
                  />
                  <View style={{ marginTop: 10 }}>
                    <Text
                      style={{
                        fontSize: 25,
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      {foodItem?.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#fff",
                        marginTop: 6,
                      }}
                    >
                      ${foodItem?.price}
                    </Text>
                  </View>

                  <View style={{ marginTop: 10 }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "500",
                        color: "#D0D0D0",
                      }}
                    >
                      {foodItem?.description}
                    </Text>
                  </View>
                  {foodItem.additives?.map((additive, index) => (
                    <View
                      key={index}
                      style={{ marginTop: 80, marginHorizontal: 10 }}
                    >
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 20,
                          fontWeight: "bold",
                          marginBottom: 5,
                        }}
                      >
                        {additive.additiveType}
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "#D0D0D0", fontSize: 13 }}>
                          Choose 1 item
                        </Text>
                        <View
                          style={{
                            backgroundColor: "orange",
                            borderWidth: 1,
                            borderRadius: 3,
                            padding: 0,
                            flexDirection: "row",
                          }}
                        >
                          <Text
                            numberOfLines={1}
                            style={{
                              color: "#000",
                              fontSize: 12,
                              fontWeight: "bold",
                            }}
                          >
                            Required
                          </Text>
                        </View>
                      </View>
                      {additive.additiveInfo
                        .filter((item) => item.parentId === additive._id)
                        .map((additiveList, index) => (
                          <View
                            key={index}
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                              marginTop: 35,
                            }}
                          >
                            <View style={{ flexDirection: "row" }}>
                              <Text
                                numberOfLines={2}
                                style={{
                                  width: 280,
                                  flexWrap: "wrap",
                                  color: "#fff",
                                  fontSize: 18,
                                }}
                              >
                                {additiveList.name}
                                {additiveList.price !== undefined && (
                                  <Text
                                    numberOfLines={2}
                                    style={{
                                      color: "orange",
                                      fontSize: 18,
                                    }}
                                  >
                                    $+{additiveList?.price}
                                  </Text>
                                )}
                              </Text>
                            </View>
                            <Pressable
                              onPress={() =>
                                addAdditives(additiveList, additiveList._id)
                              }
                              style={{
                                backgroundColor: "green",
                                width: 20,
                                height: 20,
                                borderRadius: 99,
                              }}
                            >
                              <Feather
                                name={
                                  selectedAdditives.includes(additiveList)
                                    ? "check"
                                    : "plus"
                                }
                                size={20}
                                color={"#fff"}
                                style={{ fontWeight: "bold" }}
                              />
                            </Pressable>
                          </View>
                        ))}
                    </View>
                  ))}
                </View>
              ))}
            <View
              style={{
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 10,
                marginBottom: 90,
              }}
            >
              <Pressable
                onPress={() => decQ()}
                style={{
                  backgroundColor: "rgba(100,100,100,0.4)",

                  padding: 10,
                  height: 44,
                  width: 44,
                  borderRadius: 30,
                }}
              >
                <AntDesign
                  name="minus"
                  size={24}
                  color={"#ffff"}
                  style={{
                    fontWeight: "bold",
                  }}
                />
              </Pressable>

              <Pressable
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 6,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  {qCount}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => incQ()}
                style={{
                  backgroundColor: "rgba(100,100,100,0.4)",

                  padding: 10,
                  height: 44,
                  width: 44,
                  borderRadius: 30,
                }}
              >
                <AntDesign
                  name="plus"
                  size={24}
                  color={"#ffff"}
                  style={{
                    fontWeight: "bold",
                  }}
                />
              </Pressable>
            </View>
          </ScrollView>

          {totalPrice > 0 && (
            <View>
              {menuItems
                .filter((item) => item._id === additiveId)
                .map((foodItem, index) => (
                  <Pressable
                    key={index}
                    onPress={() =>
                      addItemToCart({
                        ...foodItem,
                        subTotal: subTotal,
                        totalPrice: totalPrice,
                        quantity: qCount,
                        additiveTotal: additiveTotal,
                        selectedAdditives: selectedAdditives,
                      })
                    }
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
                      Add {qCount} for ${totalPrice}
                    </Text>
                  </Pressable>
                ))}
            </View>
          )}
        </View>
      </Modal>
    </>
  );
};

export default RestaurantScreen;
