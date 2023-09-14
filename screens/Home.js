import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import tw from "twrnc";
import { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import axios from "axios";

import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import Receipes from "../components/Receipes";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [receipes, setReceipes] = useState([]);

  const handleChangeCategory = (category) => {
    getRecipes(category);
    setActiveCategory(category);
    setReceipes([]);
  };

  const getCategories = async () => {
    try {
      const res = await axios.get(
        "https://themealdb.com/api/json/v1/1/categories.php"
      );
      if (res && res.data) {
        setCategories(res.data.categories);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const getRecipes = async (category = "Beef") => {
    try {
      const res = await axios.get(
        `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      if (res && res.data) {
        setReceipes(res.data.meals);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getCategories();
    getRecipes();
  }, []);

  return (
    <View style={tw`flex-1 bg-white`}>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        style={tw`pt-10`}
      >
        <View style={tw`mx-4 flex-row items-center justify-between mb-2`}>
          <Image
            source={require("../assets/images/avatar.png")}
            style={{ height: hp(5), width: hp(5.5) }}
          />
          <BellIcon size={hp(4)} color="gray" />
        </View>
        <View style={tw`mx-4 mt-1 mb-2`}>
          <Text style={[{ fontSize: hp(1.7) }, tw`text-neutral-600`]}>
            Hello,Admin
          </Text>
          <View>
            <Text
              style={[
                { fontSize: hp(3.8) },
                tw`text-neutral-600 font-semibold`,
              ]}
            >
              Make your own Food
            </Text>
          </View>
          <Text
            style={[{ fontSize: hp(3.8) }, tw`text-neutral-600 font-semibold`]}
          >
            Stay at <Text style={tw`text-amber-400`}>Home</Text>
          </Text>
        </View>

        <View
          style={tw`mx-4 flex-row items-center rounded-full bg-black/5 p-[6px] mt-4`}
        >
          <TextInput
            placeholder="Search any recipe"
            placeholderTextColor={"gray"}
            style={[
              { fontSize: hp(1.7) },
              tw`flex-1 text-base mb-1 pl-3 tracking-wider border-none p-2`,
            ]}
          />
          <View style={tw`bg-white rounded-full p-3`}>
            <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
          </View>
        </View>
        <View>
          {categories.length > 0 && (
            <Categories
              activeCategory={activeCategory}
              handleChangeCategory={handleChangeCategory}
              categories={categories}
            />
          )}
        </View>
        <View>
          <Receipes receipes={receipes} categories={categories} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
