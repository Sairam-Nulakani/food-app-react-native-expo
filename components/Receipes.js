import { View, Text } from "react-native";
import tw from "twrnc";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MasonryList from "@react-native-seoul/masonry-list";
import { mealData } from "../constants";
import ReceipeCard from "./ReceipeCard";

const Receipes = ({ categories, receipes }) => {
  return (
    <View style={tw`mx-4 mt-3`}>
      <Text style={[{ fontSize: hp(3) }, tw`font-semibold text-neutral-600`]}>
        Receipes
      </Text>
      {categories.length === 0 || receipes.length === 0 ? null : (
        <View>
          <MasonryList
            data={receipes}
            keyExtractor={(item) => item.idMeal}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <ReceipeCard item={item} index={index} />
            )}
            //   refreshing={isLoadingNext}
            //   onRefresh={() => refetch({ first: ITEM_CNT })}
            onEndReachedThreshold={0.1}
            //   onEndReached={() => loadNext(ITEM_CNT)}
          />
        </View>
      )}
    </View>
  );
};

export default Receipes;
