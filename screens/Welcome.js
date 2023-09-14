import React, { useEffect } from "react";
import { View, Text, StatusBar, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  withRepeat,
} from "react-native-reanimated";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);
  const navigation = useNavigation();

  useEffect(() => {
    ring1padding.value = withRepeat(
      withSpring(hp(5), { damping: 2, stiffness: 80 }),
      -1,
      true
    );
    ring2padding.value = withRepeat(
      withSpring(hp(5.5), { damping: 2, stiffness: 80 }),
      -1,
      true
    );
    setTimeout(() => navigation.navigate("Home"), 2500);
  }, []);

  const ring1Style = useAnimatedStyle(() => {
    return {
      padding: ring1padding.value,
    };
  });

  const ring2Style = useAnimatedStyle(() => {
    return {
      padding: ring2padding.value,
    };
  });

  return (
    <View style={tw`flex-1 justify-center items-center bg-amber-500`}>
      <StatusBar style="light" />

      <Animated.View style={[tw`bg-white/20 rounded-full`, ring2Style]}>
        <Animated.View style={[tw`bg-white/20 rounded-full`, ring1Style]}>
          <Image
            source={require("../assets/images/welcome.png")}
            style={{ width: hp(20), height: hp(20) }}
          />
        </Animated.View>
      </Animated.View>
      <View style={tw`items-center mt-5`}>
        <Text style={tw`font-bold text-white tracking-widest text-5xl`}>
          Foody
        </Text>
        <Text style={tw`font-medium text-white tracking-widest text-lg`}>
          Food is always right
        </Text>
      </View>
    </View>
  );
};

export default Welcome;
