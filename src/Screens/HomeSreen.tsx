import { View, Text, SafeAreaView, Platform, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { RootStackScreenProps } from "../Navigation/RootNavigation";
import HomeHeaders from "../Components/Headers/HomeHeaders";
import { restaurants } from "../Data/RestaurantAllData";
import RestaurantCard from "../Components/RestaurantCard";

type Props = {};

const HomeSreen = ({ navigation: route }: RootStackScreenProps<"home">) => {
  const [deliveryMethod, setDeliveryMethod] = useState<boolean>(false);
  useEffect(() => {
    console.log("data", restaurants);
  });
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
        />
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
              }}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeSreen;
