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
import { Ionicons, AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";

import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { Square3Stack3DIcon } from "react-native-heroicons/outline";

const ReceipeDetails = (props) => {
  let item = props.route.params;
  const [isFavourite, setIsFavourite] = useState(false);
  const [mealData, setMealData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMealData = async (id) => {
    console.log(id);
    try {
      const res = await axios.get(
        `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      if (res && res.data) {
        setMealData(res.data.meals[0]);
        setLoading(false);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getMealData(item.idMeal);
  }, []);

  const IngrediantsIndexes = (mealData) => {
    if (!mealData) return [];
    let indexes = [];
    for (let i = 1; i <= 20; i++) {
      if (mealData["strIngredient" + i]) {
        indexes.push(i);
      }
    }
    return indexes;
  };

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
      {loading ? (
        <Loading size="large" style={tw`mt-1`} />
      ) : (
        <View style={tw`px-4 flex justify-between pt-1`}>
          <View style={tw`mt-2 mb-2`}>
            <Text
              style={[
                { fontSize: hp(3.8) },
                tw`font-bold flex-1 text-neutral-700`,
              ]}
            >
              {mealData?.strMeal}
            </Text>

            <Text
              style={[
                { fontSize: hp(2) },
                tw`font-medium flex-1 text-neutral-500 mt-1`,
              ]}
            >
              {mealData?.strArea}
            </Text>
          </View>

          <View style={tw`flex-row justify-around`}>
            {/*{layouts}*/}
            <View style={tw`flex rounded-full bg-amber-300 p-2`}>
              <View
                style={[
                  { height: hp(6.5), width: hp(6.5) },
                  tw`bg-white rounded-full flex items-center justify-center`,
                ]}
              >
                <AntDesign name="clockcircleo" size={hp(4)} color="#525252" />
              </View>
              <View style={tw`flex items-center py-2`}>
                <Text
                  style={[{ fontSize: hp(2) }, tw`font-bold text-neutral-700`]}
                >
                  35
                </Text>
                <Text
                  style={[
                    { fontSize: hp(1.3) },
                    tw`font-bold text-neutral-700`,
                  ]}
                >
                  Mins
                </Text>
              </View>
            </View>

            <View style={tw`flex rounded-full bg-amber-300 p-2`}>
              <View
                style={[
                  { height: hp(6.5), width: hp(6.5) },
                  tw`bg-white rounded-full flex items-center justify-center`,
                ]}
              >
                <Entypo name="users" size={hp(4)} color="#525252" />
              </View>
              <View style={tw`flex items-center py-2`}>
                <Text
                  style={[{ fontSize: hp(2) }, tw`font-bold text-neutral-700`]}
                >
                  03
                </Text>
                <Text
                  style={[
                    { fontSize: hp(1.3) },
                    tw`font-bold text-neutral-700`,
                  ]}
                >
                  Servings
                </Text>
              </View>
            </View>

            <View style={tw`flex rounded-full bg-amber-300 p-2`}>
              <View
                style={[
                  { height: hp(6.5), width: hp(6.5) },
                  tw`bg-white rounded-full flex items-center justify-center`,
                ]}
              >
                <FontAwesome5 name="fire" size={hp(4)} color="#525252" />
              </View>
              <View style={tw`flex items-center py-2`}>
                <Text
                  style={[{ fontSize: hp(2) }, tw`font-bold text-neutral-700`]}
                >
                  103
                </Text>
                <Text
                  style={[
                    { fontSize: hp(1.3) },
                    tw`font-bold text-neutral-700`,
                  ]}
                >
                  Calories
                </Text>
              </View>
            </View>

            <View style={tw`flex rounded-full bg-amber-300 p-1`}>
              <View
                style={[
                  { height: hp(6.5), width: hp(6.5) },
                  tw`bg-white rounded-full flex items-center justify-center`,
                ]}
              >
                <Square3Stack3DIcon
                  size={hp(4)}
                  strokeWidth={2.5}
                  color="#525252"
                />
              </View>
              <View style={tw`flex items-center py-2`}>
                <Text
                  style={[{ fontSize: hp(2) }, tw`font-bold text-neutral-700`]}
                >
                  03
                </Text>
                <Text
                  style={[
                    { fontSize: hp(1.3) },
                    tw`font-bold text-neutral-700`,
                  ]}
                >
                  Easy
                </Text>
              </View>
            </View>
          </View>
          <View style={tw`mt-2`}>
            <Text
              style={[
                { fontSize: hp(2.5) },
                tw`font-bold flex-1 text-neutral-700`,
              ]}
            >
              Ingrediants
            </Text>
            <View style={tw`mt-3 ml-1 flex`}>
              {IngrediantsIndexes(mealData).map((i) => {
                return (
                  <View key={i} style={tw`flex-row mx-2`}>
                    <View
                      style={[
                        { height: hp(2.5), width: hp(2.5) },
                        tw`bg-amber-300 rounded-full mb-4`,
                      ]}
                    >
                      <View style={tw`flex-row ml-6`}>
                        <Text style={tw`text-neutral-600 font-extrabold`}>
                          {mealData["strMeasure" + i]}
                        </Text>
                        <Text style={tw`text-neutral-600 font-extrabold`}>
                          {mealData["strIngredients" + i]}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>

          <View style={tw`mt-2`}>
            <Text
              style={[
                { fontSize: hp(2.5) },
                tw`font-bold flex-1 text-neutral-700`,
              ]}
            >
              Instructions
            </Text>
            <Text style={[{ fontSize: hp(1.6) }, tw`text-neutral-700`]}>
              {mealData?.strInstructions}
            </Text>
          </View>

          {mealData.strYoutube && (
            <View style={tw`mt-3`}>
              <Text
                style={[
                  { fontSize: hp(2.5) },
                  tw`font-bold flex-1 text-neutral-700`,
                ]}
              >
                Recipe Video
              </Text>
              <View></View>
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default ReceipeDetails;
