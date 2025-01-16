import React from "react";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import HomeSreen from "../Screens/HomeSreen";

export type RootStackParams = {
  home: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParams>();
export type RootStackScreenProps<T extends keyof RootStackParams> =
  NativeStackScreenProps<RootStackParams, T>;
const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="home"
        component={HomeSreen}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
