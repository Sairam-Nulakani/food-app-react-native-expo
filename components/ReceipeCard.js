import { View, Text, Pressable, Image } from "react-native";
import tw from "twrnc";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";

const ReceipeCard = ({ item, index, navigation }) => {
  let isEven = index % 2 == 0;
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100)
        .duration(600)
        .springify()
        .damping(12)}
    >
      <Pressable
        style={[
          {
            width: "100%",
            paddingLeft: isEven ? 0 : 8,
            paddingRight: isEven ? 8 : 0,
          },
          tw`flex justify-center mb-4 mt-3 mb-1`,
        ]}
        onPress={() => navigation.navigate("ReceipeDetails", { ...item })}
      >
        <Image
          source={{ uri: item.strMealThumb }}
          style={[
            {
              width: "100%",
              borderRadius: 30,
              height: isEven ? hp(25) : hp(35),
            },
            tw`bg-black/5`,
          ]}
        />
        <Text
          style={[
            {
              fontSize: hp(1.5),
            },
            tw`ml-2 font-semibold text-neutral-600 mt-2`,
          ]}
        >
          {item.strMeal.length > 20
            ? item.strMeal.slice(0, 20) + "..."
            : item.strMeal}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

export default ReceipeCard;
