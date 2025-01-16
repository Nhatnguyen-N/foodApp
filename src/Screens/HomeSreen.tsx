import {
  View,
  Text,
  SafeAreaView,
  Platform,
  ScrollView,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { RootStackScreenProps } from "../Navigation/RootNavigation";
import HomeHeaders from "../Components/Headers/HomeHeaders";
import { restaurants } from "../Data/RestaurantAllData";
import RestaurantCard from "../Components/RestaurantCard";

type Props = {};

const HomeSreen = ({ navigation: route }: RootStackScreenProps<"home">) => {
  const [deliveryMethod, setDeliveryMethod] = useState<boolean>(false);
  const scrollOffsetY = useRef(new Animated.Value(0)).current;

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
