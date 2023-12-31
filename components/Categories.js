import { View, Text, ScrollView, Pressable, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";

const Categories = ({ activeCategory, handleChangeCategory, categories }) => {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`mx-4`}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((category, index) => {
          let isActive = category.strCategory == activeCategory;
          let activeButtonClass = isActive ? "bg-amber-400" : "bg-black/10";
          return (
            <Pressable
              key={index}
              style={tw`flex-1 items-center mt-3 mb-1 mr-3`}
              onPress={() => handleChangeCategory(category.strCategory)}
            >
              <View style={tw`rounded-full p-[6px] ${activeButtonClass}`}>
                <Image
                  source={{ uri: category.strCategoryThumb }}
                  style={[{ width: hp(6), height: hp(6) }, tw`rounded-full `]}
                />
              </View>
              <Text
                style={[
                  { fontSize: hp(1.6) },
                  tw`text-neutral-600 mt-1 font-bold`,
                ]}
              >
                {category.strCategory}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
};

export default Categories;
