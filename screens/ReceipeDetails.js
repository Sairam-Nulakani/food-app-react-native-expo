import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import tw from "twrnc";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const ReceipeDetails = (props) => {
  let item = props.route.params;
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <ScrollView
      style={tw`relative bg-white flex-1`}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <StatusBar style={"light"} />
      <View style={tw`flex-row justify-center`}>
        <Image
          source={{ uri: item.strMealThumb }}
          style={[
            {
              width: wp(100),
              height: hp(50),
            },
            tw`rounded-b-lg`,
          ]}
        />
      </View>
      <View
        style={tw`w-full absolute flex-row justify-between items-center pt-2 pr-5`}
      >
        <Pressable onPress={() => props.navigation.goBack()} style={tw`ml-5`}>
          <Ionicons name="arrow-back-circle" size={38} color="#FFBF00" />
        </Pressable>
        <Pressable onPress={() => setIsFavourite(!isFavourite)}>
          <AntDesign
            name="heart"
            size={29}
            color={isFavourite ? "red" : "gray"}
          />
        </Pressable>
      </View>
      <View style={tw`absolute bottom-2 ml-4`}>
        <Text style={tw`font-bold text-3xl text-white`}>{item.strMeal}</Text>
      </View>
    </ScrollView>
  );
};

export default ReceipeDetails;
